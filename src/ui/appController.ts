import type {
  BackupPayload,
  ExpenseEntry,
  FixedCostTemplate,
  MonthBook,
  YearBook,
  YearNumber,
} from "../domain/model";
import {
  classifyCostByAmount,
  createExpense,
  createId,
  createYearWithMonths,
} from "../domain/rules";
import {
  createBackupPayload,
  deleteYear,
  getFixedTemplateState,
  getYear,
  listYears,
  restoreFromBackup,
  saveFixedTemplates,
  saveYear,
} from "../storage/repository";
import { centsToEuro, euroToCents, monthLabel } from "./format";

interface State {
  years: YearBook[];
  selectedYear: number | null;
  selectedMonth: number;
  fixedTemplates: FixedCostTemplate[];
  fixedTemplateVersion: string;
}

interface CostSummary {
  foodCents: number;
  goingOutCents: number;
  fixedCents: number;
  variableCents: number;
  miscCents: number;
  totalCents: number;
}

interface MonthSummaryRow {
  month: number;
  summary: CostSummary;
}

export function createAppController(root: HTMLElement) {
  const state: State = {
    years: [],
    selectedYear: null,
    selectedMonth: 1,
    fixedTemplates: [],
    fixedTemplateVersion: "",
  };

  async function init(): Promise<void> {
    const [years, fixed] = await Promise.all([
      listYears(),
      getFixedTemplateState(),
    ]);
    state.years = years;
    state.fixedTemplates = fixed.templates;
    state.fixedTemplateVersion = fixed.version;
    if (years.length > 0 && years[0]) {
      state.selectedYear = years[0].year;
    }
    render();
  }

  function getSelectedYearBook(): YearBook | undefined {
    if (!state.selectedYear) {
      return undefined;
    }
    return state.years.find((year) => year.year === state.selectedYear);
  }

  function getSelectedMonthBook(): MonthBook | undefined {
    const year = getSelectedYearBook();
    if (!year) {
      return undefined;
    }
    return year.months.find((month) => month.month === state.selectedMonth);
  }

  function summarizeMonth(month: MonthBook): CostSummary {
    const foodCents = month.days.reduce((sum, day) => sum + day.foodCents, 0);
    const goingOutCents = month.days.reduce(
      (sum, day) => sum + day.goingOutCents,
      0,
    );
    const fixedCents = month.fixedCosts.reduce(
      (sum, entry) => sum + entry.actualCents,
      0,
    );
    const variableCents = month.variableCosts.reduce(
      (sum, entry) => sum + entry.amountCents,
      0,
    );
    const miscCents = month.miscCosts.reduce(
      (sum, entry) => sum + entry.amountCents,
      0,
    );
    const totalCents =
      foodCents + goingOutCents + fixedCents + variableCents + miscCents;

    return {
      foodCents,
      goingOutCents,
      fixedCents,
      variableCents,
      miscCents,
      totalCents,
    };
  }

  function summarizeYear(year: YearBook): CostSummary {
    return year.months.reduce<CostSummary>(
      (acc, monthItem) => {
        const monthSummary = summarizeMonth(monthItem);
        return {
          foodCents: acc.foodCents + monthSummary.foodCents,
          goingOutCents: acc.goingOutCents + monthSummary.goingOutCents,
          fixedCents: acc.fixedCents + monthSummary.fixedCents,
          variableCents: acc.variableCents + monthSummary.variableCents,
          miscCents: acc.miscCents + monthSummary.miscCents,
          totalCents: acc.totalCents + monthSummary.totalCents,
        };
      },
      {
        foodCents: 0,
        goingOutCents: 0,
        fixedCents: 0,
        variableCents: 0,
        miscCents: 0,
        totalCents: 0,
      },
    );
  }

  function summarizeYearByMonth(year: YearBook): MonthSummaryRow[] {
    return year.months
      .slice()
      .sort((left, right) => left.month - right.month)
      .map((monthItem) => ({
        month: monthItem.month,
        summary: summarizeMonth(monthItem),
      }));
  }

  async function createYear(yearNumber: YearNumber): Promise<void> {
    const existing = await getYear(yearNumber);
    if (existing) {
      alert(`Jahr ${yearNumber} existiert bereits.`);
      return;
    }
    const created = createYearWithMonths(
      yearNumber,
      state.fixedTemplates,
      state.fixedTemplateVersion,
    );
    await saveYear(created);
    state.years = await listYears();
    state.selectedYear = yearNumber;
    state.selectedMonth = 1;
    render();
  }

  async function persistSelectedYear(): Promise<void> {
    const year = getSelectedYearBook();
    if (!year) {
      return;
    }
    await saveYear(year);
    state.years = await listYears();
  }

  async function upsertFixedTemplate(
    templateId: string | null,
    name: string,
    plannedCents: number,
  ): Promise<void> {
    const cleanName = name.trim();
    if (!cleanName) {
      return;
    }
    if (templateId) {
      state.fixedTemplates = state.fixedTemplates.map((template) =>
        template.id === templateId
          ? { ...template, name: cleanName, plannedCents }
          : template,
      );
    } else {
      state.fixedTemplates = [
        ...state.fixedTemplates,
        { id: createId("tpl"), name: cleanName, plannedCents },
      ];
    }

    state.fixedTemplateVersion = await saveFixedTemplates(state.fixedTemplates);
    render();
  }

  async function removeFixedTemplate(templateId: string): Promise<void> {
    state.fixedTemplates = state.fixedTemplates.filter(
      (template) => template.id !== templateId,
    );
    state.fixedTemplateVersion = await saveFixedTemplates(state.fixedTemplates);
    render();
  }

  async function updateDayAmount(
    isoDate: string,
    key: "foodCents" | "goingOutCents",
    amountCents: number,
  ): Promise<void> {
    const month = getSelectedMonthBook();
    if (!month) {
      return;
    }
    month.days = month.days.map((day) =>
      day.isoDate === isoDate ? { ...day, [key]: amountCents } : day,
    );
    await persistSelectedYear();
    render();
  }

  async function updateFixedCostActual(
    fixedCostId: string,
    amountCents: number,
  ): Promise<void> {
    const month = getSelectedMonthBook();
    if (!month) {
      return;
    }
    month.fixedCosts = month.fixedCosts.map((entry) =>
      entry.id === fixedCostId ? { ...entry, actualCents: amountCents } : entry,
    );
    await persistSelectedYear();
    render();
  }

  async function addExpense(
    description: string,
    amountCents: number,
  ): Promise<void> {
    if (!description.trim()) {
      alert("Beschreibung fehlt.");
      return;
    }
    const month = getSelectedMonthBook();
    if (!month) {
      return;
    }

    const bucket = classifyCostByAmount(amountCents);
    const entry: ExpenseEntry = createExpense(description, amountCents);

    if (bucket === "variable") {
      month.variableCosts = [entry, ...month.variableCosts];
    } else {
      month.miscCosts = [entry, ...month.miscCosts];
    }

    await persistSelectedYear();
    render();
  }

  async function removeExpense(expenseId: string): Promise<void> {
    const month = getSelectedMonthBook();
    if (!month) {
      return;
    }
    month.variableCosts = month.variableCosts.filter(
      (entry) => entry.id !== expenseId,
    );
    month.miscCosts = month.miscCosts.filter((entry) => entry.id !== expenseId);
    await persistSelectedYear();
    render();
  }

  async function exportBackup(): Promise<void> {
    const payload = await createBackupPayload();
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `haushaltsbuch-backup-${new Date().toISOString().slice(0, 10)}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  async function importBackup(file: File): Promise<void> {
    const text = await file.text();
    const parsed = JSON.parse(text) as BackupPayload;
    await restoreFromBackup(parsed);
    const [years, fixed] = await Promise.all([
      listYears(),
      getFixedTemplateState(),
    ]);
    state.years = years;
    state.fixedTemplates = fixed.templates;
    state.fixedTemplateVersion = fixed.version;
    state.selectedYear = years[0]?.year ?? null;
    state.selectedMonth = 1;
    render();
  }

  async function removeCurrentYear(): Promise<void> {
    if (!state.selectedYear) {
      return;
    }
    await deleteYear(state.selectedYear);
    state.years = await listYears();
    state.selectedYear = state.years[0]?.year ?? null;
    state.selectedMonth = 1;
    render();
  }

  function render(): void {
    const year = getSelectedYearBook();
    const month = getSelectedMonthBook();
    const monthSummary = month
      ? summarizeMonth(month)
      : {
          foodCents: 0,
          goingOutCents: 0,
          fixedCents: 0,
          variableCents: 0,
          miscCents: 0,
          totalCents: 0,
        };
    const yearSummary = year
      ? summarizeYear(year)
      : {
          foodCents: 0,
          goingOutCents: 0,
          fixedCents: 0,
          variableCents: 0,
          miscCents: 0,
          totalCents: 0,
        };
    const yearByMonth = year ? summarizeYearByMonth(year) : [];

    root.innerHTML = `
      <div class="app grid">
        <h1>Haushaltsbuch (Local First)</h1>

        <section class="card grid">
          <h2>Jahre</h2>
          <div class="inline">
            <label>
              Neues Jahr
              <input id="new-year" type="number" min="2000" max="2100" value="${new Date().getFullYear()}" />
            </label>
            <button id="create-year">Jahr anlegen (12 Monate automatisch)</button>
            <button id="delete-year" ${state.selectedYear ? "" : "disabled"}>Aktuelles Jahr löschen</button>
          </div>
          <div class="inline">
            <label>
              Jahr wählen
              <select id="year-select">
                ${state.years
                  .map(
                    (item) =>
                      `<option value="${item.year}" ${item.year === state.selectedYear ? "selected" : ""}>${item.year}</option>`,
                  )
                  .join("")}
              </select>
            </label>
            <label>
              Monat wählen
              <select id="month-select" ${state.selectedYear ? "" : "disabled"}>
                ${Array.from({ length: 12 }, (_, index) => index + 1)
                  .map(
                    (monthNumber) =>
                      `<option value="${monthNumber}" ${monthNumber === state.selectedMonth ? "selected" : ""}>${monthLabel(monthNumber)}</option>`,
                  )
                  .join("")}
              </select>
            </label>
          </div>
          <p class="muted">Neue Monate werden automatisch aus zentralen Fixkosten-Vorlagen gespeist. 30,00€ und mehr zählen als variable Kosten.</p>
        </section>

        <section class="card">
          <h2>Fixe Kosten (zentral)</h2>
          <div class="inline">
            <label>
              Name
              <input id="fixed-template-name" type="text" placeholder="z.B. Miete" />
            </label>
            <label>
              Betrag (€)
              <input id="fixed-template-amount" type="number" min="0" step="0.01" />
            </label>
            <button id="add-fixed-template">Vorlage speichern</button>
          </div>
          <table>
            <thead>
              <tr><th>Name</th><th>Geplant (€)</th><th></th></tr>
            </thead>
            <tbody>
              ${state.fixedTemplates
                .map(
                  (template) =>
                    `<tr>
                      <td>${template.name}</td>
                      <td>${centsToEuro(template.plannedCents)}</td>
                      <td><button data-remove-fixed-template="${template.id}">Löschen</button></td>
                    </tr>`,
                )
                .join("")}
            </tbody>
          </table>
        </section>

        <section class="card grid">
          <h2>Monat: ${year ? `${monthLabel(state.selectedMonth)} ${year.year}` : "-"}</h2>

          <article class="card">
            <h3>Auswertung (Monat & Jahr)</h3>
            <table>
              <thead>
                <tr><th>Rechnungskreis</th><th>Monat (€)</th><th>Jahr (€)</th></tr>
              </thead>
              <tbody>
                <tr><td>1) Essen</td><td>${centsToEuro(monthSummary.foodCents)}</td><td>${centsToEuro(yearSummary.foodCents)}</td></tr>
                <tr><td>1) Ausgehen</td><td>${centsToEuro(monthSummary.goingOutCents)}</td><td>${centsToEuro(yearSummary.goingOutCents)}</td></tr>
                <tr><td>2) Fixe Kosten (Ist)</td><td>${centsToEuro(monthSummary.fixedCents)}</td><td>${centsToEuro(yearSummary.fixedCents)}</td></tr>
                <tr><td>3) Variable Kosten</td><td>${centsToEuro(monthSummary.variableCents)}</td><td>${centsToEuro(yearSummary.variableCents)}</td></tr>
                <tr><td>4) Sonstige</td><td>${centsToEuro(monthSummary.miscCents)}</td><td>${centsToEuro(yearSummary.miscCents)}</td></tr>
                <tr><th>Gesamt</th><th>${centsToEuro(monthSummary.totalCents)}</th><th>${centsToEuro(yearSummary.totalCents)}</th></tr>
              </tbody>
            </table>

            <h3>Jahresvergleich (Monat zu Monat)</h3>
            <table>
              <thead>
                <tr>
                  <th>Monat</th>
                  <th>Essen (€)</th>
                  <th>Ausgehen (€)</th>
                  <th>Fixe Kosten (€)</th>
                  <th>Variable (€)</th>
                  <th>Sonstige (€)</th>
                  <th>Gesamt (€)</th>
                </tr>
              </thead>
              <tbody>
                ${yearByMonth
                  .map(
                    (row) => `<tr>
                  <td>${monthLabel(row.month)}</td>
                  <td>${centsToEuro(row.summary.foodCents)}</td>
                  <td>${centsToEuro(row.summary.goingOutCents)}</td>
                  <td>${centsToEuro(row.summary.fixedCents)}</td>
                  <td>${centsToEuro(row.summary.variableCents)}</td>
                  <td>${centsToEuro(row.summary.miscCents)}</td>
                  <td>${centsToEuro(row.summary.totalCents)}</td>
                </tr>`,
                  )
                  .join("")}
              </tbody>
            </table>
          </article>

          <div class="grid grid-4">
            <article class="card">
              <h3>1) Essen, Trinken und Ausgehen (Tage)</h3>
              <table>
                <thead>
                  <tr><th>Datum</th><th>Essen (€)</th><th>Ausgehen (€)</th></tr>
                </thead>
                <tbody>
                  ${
                    month
                      ? month.days
                          .map(
                            (day) => `<tr>
                      <td>${new Date(day.isoDate).toLocaleDateString("de-DE")}</td>
                      <td><input data-day-food="${day.isoDate}" type="number" min="0" step="0.01" value="${centsToEuro(day.foodCents)}" /></td>
                      <td><input data-day-going="${day.isoDate}" type="number" min="0" step="0.01" value="${centsToEuro(day.goingOutCents)}" /></td>
                    </tr>`,
                          )
                          .join("")
                      : ""
                  }
                </tbody>
              </table>
            </article>

            <article class="card">
              <h3>2) Fixe Kosten (Monatssnapshot)</h3>
              <table>
                <thead>
                  <tr><th>Name</th><th>Geplant (€)</th><th>Ist (€)</th></tr>
                </thead>
                <tbody>
                ${
                  month
                    ? month.fixedCosts
                        .map(
                          (cost) => `<tr>
                    <td>${cost.name}</td>
                    <td>${centsToEuro(cost.plannedCents)}</td>
                    <td><input data-fixed-actual="${cost.id}" type="number" min="0" step="0.01" value="${centsToEuro(cost.actualCents)}" /></td>
                  </tr>`,
                        )
                        .join("")
                    : ""
                }
                </tbody>
              </table>
            </article>

            <article class="card">
              <h3>3) Variable Kosten (>= 30€)</h3>
              <div class="inline">
                <input id="expense-description" type="text" placeholder="Beschreibung" />
                <input id="expense-amount" type="number" min="0" step="0.01" placeholder="Betrag (€)" />
                <button id="add-expense">Erfassen</button>
              </div>
              <table>
                <thead>
                  <tr><th>Beschreibung</th><th>Betrag (€)</th><th></th></tr>
                </thead>
                <tbody>
                ${
                  month
                    ? month.variableCosts
                        .map(
                          (entry) => `<tr>
                    <td>${entry.description}</td>
                    <td>${centsToEuro(entry.amountCents)}</td>
                    <td><button data-remove-expense="${entry.id}">Löschen</button></td>
                  </tr>`,
                        )
                        .join("")
                    : ""
                }
                </tbody>
              </table>
            </article>

            <article class="card">
              <h3>4) Sonstige (unter 30€)</h3>
              <table>
                <thead>
                  <tr><th>Beschreibung</th><th>Betrag (€)</th><th></th></tr>
                </thead>
                <tbody>
                ${
                  month
                    ? month.miscCosts
                        .map(
                          (entry) => `<tr>
                    <td>${entry.description}</td>
                    <td>${centsToEuro(entry.amountCents)}</td>
                    <td><button data-remove-expense="${entry.id}">Löschen</button></td>
                  </tr>`,
                        )
                        .join("")
                    : ""
                }
                </tbody>
              </table>
            </article>
          </div>
        </section>

        <section class="card grid">
          <h2>Lokale Datensicherung</h2>
          <div class="inline">
            <button id="backup-export">Backup exportieren (JSON)</button>
            <label>
              Backup importieren (JSON)
              <input id="backup-import" type="file" accept="application/json" />
            </label>
          </div>
          <p class="muted">Die Daten bleiben lokal im Browser (IndexedDB). Zusätzlich kannst du Backups als Datei sichern und später importieren.</p>
        </section>
      </div>
    `;

    bindEvents();
  }

  function bindEvents(): void {
    const newYearInput = root.querySelector<HTMLInputElement>("#new-year");
    const createYearButton =
      root.querySelector<HTMLButtonElement>("#create-year");
    const deleteYearButton =
      root.querySelector<HTMLButtonElement>("#delete-year");
    const yearSelect = root.querySelector<HTMLSelectElement>("#year-select");
    const monthSelect = root.querySelector<HTMLSelectElement>("#month-select");

    createYearButton?.addEventListener("click", async () => {
      const yearValue = Number.parseInt(newYearInput?.value ?? "", 10);
      if (!Number.isInteger(yearValue)) {
        alert("Bitte gültiges Jahr eingeben.");
        return;
      }
      await createYear(yearValue);
    });

    deleteYearButton?.addEventListener("click", async () => {
      const shouldDelete = confirm("Aktuelles Jahr wirklich löschen?");
      if (!shouldDelete) {
        return;
      }
      await removeCurrentYear();
    });

    yearSelect?.addEventListener("change", () => {
      state.selectedYear = Number.parseInt(yearSelect.value, 10);
      state.selectedMonth = 1;
      render();
    });

    monthSelect?.addEventListener("change", () => {
      state.selectedMonth = Number.parseInt(monthSelect.value, 10);
      render();
    });

    const fixedNameInput = root.querySelector<HTMLInputElement>(
      "#fixed-template-name",
    );
    const fixedAmountInput = root.querySelector<HTMLInputElement>(
      "#fixed-template-amount",
    );
    const addFixedTemplateButton = root.querySelector<HTMLButtonElement>(
      "#add-fixed-template",
    );

    addFixedTemplateButton?.addEventListener("click", async () => {
      const name = fixedNameInput?.value ?? "";
      const amountCents = euroToCents(fixedAmountInput?.value ?? "0");
      await upsertFixedTemplate(null, name, amountCents);
      if (fixedNameInput) fixedNameInput.value = "";
      if (fixedAmountInput) fixedAmountInput.value = "";
    });

    root
      .querySelectorAll<HTMLButtonElement>("[data-remove-fixed-template]")
      .forEach((button) => {
        button.addEventListener("click", async () => {
          const templateId = button.dataset.removeFixedTemplate;
          if (!templateId) return;
          await removeFixedTemplate(templateId);
        });
      });

    root
      .querySelectorAll<HTMLInputElement>("[data-day-food]")
      .forEach((input) => {
        input.addEventListener("change", async () => {
          const date = input.dataset.dayFood;
          if (!date) return;
          await updateDayAmount(date, "foodCents", euroToCents(input.value));
        });
      });

    root
      .querySelectorAll<HTMLInputElement>("[data-day-going]")
      .forEach((input) => {
        input.addEventListener("change", async () => {
          const date = input.dataset.dayGoing;
          if (!date) return;
          await updateDayAmount(
            date,
            "goingOutCents",
            euroToCents(input.value),
          );
        });
      });

    root
      .querySelectorAll<HTMLInputElement>("[data-fixed-actual]")
      .forEach((input) => {
        input.addEventListener("change", async () => {
          const fixedCostId = input.dataset.fixedActual;
          if (!fixedCostId) return;
          await updateFixedCostActual(fixedCostId, euroToCents(input.value));
        });
      });

    const expenseDescription = root.querySelector<HTMLInputElement>(
      "#expense-description",
    );
    const expenseAmount =
      root.querySelector<HTMLInputElement>("#expense-amount");
    const addExpenseButton =
      root.querySelector<HTMLButtonElement>("#add-expense");

    addExpenseButton?.addEventListener("click", async () => {
      const amountCents = euroToCents(expenseAmount?.value ?? "0");
      await addExpense(expenseDescription?.value ?? "", amountCents);
      if (expenseDescription) expenseDescription.value = "";
      if (expenseAmount) expenseAmount.value = "";
    });

    root
      .querySelectorAll<HTMLButtonElement>("[data-remove-expense]")
      .forEach((button) => {
        button.addEventListener("click", async () => {
          const expenseId = button.dataset.removeExpense;
          if (!expenseId) return;
          await removeExpense(expenseId);
        });
      });

    const backupExport =
      root.querySelector<HTMLButtonElement>("#backup-export");
    const backupImport = root.querySelector<HTMLInputElement>("#backup-import");

    backupExport?.addEventListener("click", async () => {
      await exportBackup();
    });

    backupImport?.addEventListener("change", async () => {
      const file = backupImport.files?.[0];
      if (!file) {
        return;
      }
      await importBackup(file);
      backupImport.value = "";
    });
  }

  return {
    init,
  };
}
