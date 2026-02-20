import type {
  BackupPayload,
  ExpenseEntry,
  FixedCostTemplate,
  MonthBook,
  YearBook,
  YearNumber,
} from "../domain/model";
import { createExpense, createId, createYearWithMonths } from "../domain/rules";
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
  editingFixedTemplateId: string | null;
  theme: "light" | "dark" | "forest";
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
    editingFixedTemplateId: null,
    theme: "light",
  };

  const THEME_STORAGE_KEY = "habu-theme";

  function loadTheme(): "light" | "dark" | "forest" {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark" || stored === "forest") {
      return stored;
    }
    return "light";
  }

  function applyTheme(theme: "light" | "dark" | "forest"): void {
    state.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }

  async function init(): Promise<void> {
    applyTheme(loadTheme());
    const [years, fixed] = await Promise.all([
      listYears(),
      getFixedTemplateState(),
    ]);
    state.years = years;
    normalizeBudgetsForYears(state.years);
    state.fixedTemplates = fixed.templates;
    state.fixedTemplateVersion = fixed.version;
    await persistNormalizedYears(state.years);
    if (years.length > 0 && years[0]) {
      state.selectedYear = years[0].year;
    }
    render();
  }

  function normalizeBudgetsForYears(years: YearBook[]): void {
    years.forEach((year) => {
      year.months.forEach((month) => {
        if (!Array.isArray(month.incomes)) {
          month.incomes = [];
        }
        if (typeof month.fixedBudgetCents !== "number") {
          month.fixedBudgetCents = month.fixedCosts.reduce(
            (sum, entry) => sum + entry.plannedCents,
            0,
          );
        }
        if (typeof month.variableBudgetCents !== "number") {
          month.variableBudgetCents = 0;
        }
        if (!Array.isArray(month.variablePositions)) {
          month.variablePositions = [];
        }
        month.variableBudgetCents = month.variablePositions.reduce(
          (sum, position) => sum + position.budgetCents,
          0,
        );
      });
    });
  }

  async function persistNormalizedYears(years: YearBook[]): Promise<void> {
    for (const yearItem of years) {
      await saveYear(yearItem);
    }
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
    const variableCents =
      month.variableCosts.reduce((sum, entry) => sum + entry.amountCents, 0) +
      month.variablePositions.reduce(
        (sum, entry) => sum + entry.actualCents,
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

  function budgetStatusClass(actualCents: number, budgetCents: number): string {
    if (budgetCents <= 0) {
      return "";
    }
    if (actualCents > budgetCents) {
      return "budget-over";
    }
    if (actualCents < budgetCents) {
      return "budget-under";
    }
    return "";
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

  async function persistAllYears(): Promise<void> {
    for (const yearItem of state.years) {
      await saveYear(yearItem);
    }
    state.years = await listYears();
  }

  function monthKey(year: number, month: number): number {
    return year * 100 + month;
  }

  function recalculateFixedBudget(month: MonthBook): void {
    month.fixedBudgetCents = month.fixedCosts.reduce(
      (sum, entry) => sum + entry.plannedCents,
      0,
    );
  }

  function defaultEffectiveMonthText(): string {
    if (state.selectedYear) {
      return `${state.selectedYear}-${String(state.selectedMonth).padStart(2, "0")}`;
    }
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  }

  function askEffectiveMonth(): { year: number; month: number } | null {
    const input = prompt(
      "Ab wann soll die Änderung gelten? Format: YYYY-MM",
      defaultEffectiveMonthText(),
    );
    if (!input) {
      return null;
    }
    const match = input.trim().match(/^(\d{4})-(0[1-9]|1[0-2])$/);
    if (!match) {
      alert("Ungültiges Format. Bitte YYYY-MM verwenden.");
      return null;
    }
    const yearText = match[1];
    const monthText = match[2];
    if (!yearText || !monthText) {
      return null;
    }
    return {
      year: Number.parseInt(yearText, 10),
      month: Number.parseInt(monthText, 10),
    };
  }

  function applyFixedTemplateToFutureMonths(
    template: FixedCostTemplate,
    effective: { year: number; month: number },
  ): void {
    const threshold = monthKey(effective.year, effective.month);
    state.years.forEach((yearItem) => {
      yearItem.months.forEach((monthItem) => {
        if (monthKey(yearItem.year, monthItem.month) < threshold) {
          return;
        }
        const exists = monthItem.fixedCosts.some(
          (entry) => entry.templateId === template.id,
        );
        if (!exists) {
          monthItem.fixedCosts.push({
            id: createId("fixed"),
            templateId: template.id,
            name: template.name,
            plannedCents: template.plannedCents,
            actualCents: template.plannedCents,
          });
          recalculateFixedBudget(monthItem);
        }
      });
    });
  }

  function updateFixedTemplateInFutureMonths(
    previousTemplate: FixedCostTemplate,
    updatedTemplate: FixedCostTemplate,
    effective: { year: number; month: number },
  ): void {
    const threshold = monthKey(effective.year, effective.month);
    state.years.forEach((yearItem) => {
      yearItem.months.forEach((monthItem) => {
        if (monthKey(yearItem.year, monthItem.month) < threshold) {
          return;
        }

        monthItem.fixedCosts = monthItem.fixedCosts.map((entry) => {
          if (entry.templateId !== updatedTemplate.id) {
            return entry;
          }
          return {
            ...entry,
            name: updatedTemplate.name,
            plannedCents: updatedTemplate.plannedCents,
            actualCents:
              entry.actualCents === previousTemplate.plannedCents
                ? updatedTemplate.plannedCents
                : entry.actualCents,
          };
        });

        recalculateFixedBudget(monthItem);
      });
    });
  }

  function removeFixedTemplateFromFutureMonths(
    templateId: string,
    effective: { year: number; month: number },
  ): void {
    const threshold = monthKey(effective.year, effective.month);
    state.years.forEach((yearItem) => {
      yearItem.months.forEach((monthItem) => {
        if (monthKey(yearItem.year, monthItem.month) < threshold) {
          return;
        }
        monthItem.fixedCosts = monthItem.fixedCosts.filter(
          (entry) => entry.templateId !== templateId,
        );
        recalculateFixedBudget(monthItem);
      });
    });
  }

  async function upsertFixedTemplate(
    name: string,
    plannedCents: number,
  ): Promise<void> {
    const cleanName = name.trim();
    if (!cleanName) {
      return;
    }

    const effective = askEffectiveMonth();
    if (!effective) {
      return;
    }

    if (state.editingFixedTemplateId) {
      const existingTemplate = state.fixedTemplates.find(
        (template) => template.id === state.editingFixedTemplateId,
      );
      if (!existingTemplate) {
        return;
      }

      const updatedTemplate: FixedCostTemplate = {
        ...existingTemplate,
        name: cleanName,
        plannedCents,
      };

      state.fixedTemplates = state.fixedTemplates.map((template) =>
        template.id === state.editingFixedTemplateId
          ? updatedTemplate
          : template,
      );

      updateFixedTemplateInFutureMonths(
        existingTemplate,
        updatedTemplate,
        effective,
      );
    } else {
      const createdTemplate: FixedCostTemplate = {
        id: createId("tpl"),
        name: cleanName,
        plannedCents,
      };
      state.fixedTemplates = [...state.fixedTemplates, createdTemplate];
      applyFixedTemplateToFutureMonths(createdTemplate, effective);
    }

    state.fixedTemplateVersion = await saveFixedTemplates(state.fixedTemplates);
    state.editingFixedTemplateId = null;
    await persistAllYears();
    render();
  }

  function startEditFixedTemplate(templateId: string): void {
    state.editingFixedTemplateId = templateId;
    render();
  }

  function cancelEditFixedTemplate(): void {
    state.editingFixedTemplateId = null;
    render();
  }

  async function removeFixedTemplate(templateId: string): Promise<void> {
    const shouldDelete = confirm("Fixkosten-Vorlage wirklich löschen?");
    if (!shouldDelete) {
      return;
    }

    const effective = askEffectiveMonth();
    if (!effective) {
      return;
    }

    state.fixedTemplates = state.fixedTemplates.filter(
      (template) => template.id !== templateId,
    );
    removeFixedTemplateFromFutureMonths(templateId, effective);
    if (state.editingFixedTemplateId === templateId) {
      state.editingFixedTemplateId = null;
    }
    state.fixedTemplateVersion = await saveFixedTemplates(state.fixedTemplates);
    await persistAllYears();
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

  async function updateMonthlyFixedBudget(amountCents: number): Promise<void> {
    const month = getSelectedMonthBook();
    if (!month) {
      return;
    }
    month.fixedBudgetCents = amountCents;
    await persistSelectedYear();
    render();
  }

  async function addVariablePosition(
    name: string,
    budgetCents: number,
  ): Promise<void> {
    const month = getSelectedMonthBook();
    if (!month) {
      return;
    }
    const cleanName = name.trim();
    if (!cleanName) {
      alert("Bitte Bezeichnung für die Position angeben.");
      return;
    }

    month.variablePositions = [
      {
        id: createId("varpos"),
        name: cleanName,
        budgetCents,
        actualCents: 0,
      },
      ...month.variablePositions,
    ];
    month.variableBudgetCents = month.variablePositions.reduce(
      (sum, position) => sum + position.budgetCents,
      0,
    );

    await persistSelectedYear();
    render();
  }

  async function updateVariablePositionActual(
    positionId: string,
    actualCents: number,
  ): Promise<void> {
    const month = getSelectedMonthBook();
    if (!month) {
      return;
    }

    month.variablePositions = month.variablePositions.map((position) =>
      position.id === positionId ? { ...position, actualCents } : position,
    );

    await persistSelectedYear();
    render();
  }

  async function removeVariablePosition(positionId: string): Promise<void> {
    const shouldDelete = confirm("Variable Position wirklich löschen?");
    if (!shouldDelete) {
      return;
    }

    const month = getSelectedMonthBook();
    if (!month) {
      return;
    }

    month.variablePositions = month.variablePositions.filter(
      (position) => position.id !== positionId,
    );
    month.variableBudgetCents = month.variablePositions.reduce(
      (sum, position) => sum + position.budgetCents,
      0,
    );

    await persistSelectedYear();
    render();
  }

  async function addIncome(
    description: string,
    amountCents: number,
  ): Promise<void> {
    const month = getSelectedMonthBook();
    if (!month) {
      return;
    }
    const cleanDescription = description.trim();
    if (!cleanDescription) {
      alert("Bitte Einkommens-Bezeichnung eingeben.");
      return;
    }
    if (amountCents <= 0) {
      alert("Bitte einen positiven Einkommensbetrag eingeben.");
      return;
    }

    const entry: ExpenseEntry = createExpense(cleanDescription, amountCents);
    month.incomes = [entry, ...month.incomes];

    await persistSelectedYear();
    render();
  }

  async function removeIncome(incomeId: string): Promise<void> {
    const shouldDelete = confirm("Einkommens-Eintrag wirklich löschen?");
    if (!shouldDelete) {
      return;
    }

    const month = getSelectedMonthBook();
    if (!month) {
      return;
    }
    month.incomes = month.incomes.filter((entry) => entry.id !== incomeId);
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
    normalizeBudgetsForYears(state.years);
    state.fixedTemplates = fixed.templates;
    state.fixedTemplateVersion = fixed.version;
    await persistNormalizedYears(state.years);
    state.selectedYear = years[0]?.year ?? null;
    state.selectedMonth = 1;
    render();
  }

  async function removeCurrentYear(): Promise<void> {
    const shouldDelete = confirm("Aktuelles Jahr wirklich löschen?");
    if (!shouldDelete) {
      return;
    }

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
    const fixedBudgetCents = month
      ? (month.fixedBudgetCents ??
        month.fixedCosts.reduce((sum, entry) => sum + entry.plannedCents, 0))
      : 0;
    const variableBudgetCents = month
      ? month.variablePositions.reduce(
          (sum, position) => sum + position.budgetCents,
          0,
        )
      : 0;
    const variablePositionBudgetCents = month
      ? month.variablePositions.reduce(
          (sum, position) => sum + position.budgetCents,
          0,
        )
      : 0;
    const incomeTotalCents = month
      ? month.incomes.reduce((sum, entry) => sum + entry.amountCents, 0)
      : 0;
    const fixedSummaryBudgetClass = budgetStatusClass(
      monthSummary.fixedCents,
      fixedBudgetCents,
    );
    const variableSummaryBudgetClass = budgetStatusClass(
      monthSummary.variableCents,
      variableBudgetCents,
    );
    const editingFixedTemplate = state.editingFixedTemplateId
      ? state.fixedTemplates.find(
          (template) => template.id === state.editingFixedTemplateId,
        )
      : null;

    root.innerHTML = `
      <div class="app grid">
        <div class="app-header inline">
          <h1 class="app-title">Haushaltsbuch (Local First)</h1>
          <label>
            Theme
            <select id="theme-select">
              <option value="light" ${state.theme === "light" ? "selected" : ""}>Light</option>
              <option value="dark" ${state.theme === "dark" ? "selected" : ""}>Dark</option>
              <option value="forest" ${state.theme === "forest" ? "selected" : ""}>Forest</option>
            </select>
          </label>
        </div>

        <section class="card grid">
          <h2>Jahre</h2>
          <div class="inline">
            <label>
              Neues Jahr
              <input id="new-year" type="number" min="2000" max="2100" value="${new Date().getFullYear()}" />
            </label>
            <button class="btn btn-primary" id="create-year">Jahr anlegen (12 Monate automatisch)</button>
            <button class="btn btn-danger" id="delete-year" ${state.selectedYear ? "" : "disabled"}>Aktuelles Jahr löschen</button>
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
          </div>
          <p class="muted">Neue Monate werden automatisch aus zentralen Fixkosten-Vorlagen gespeist. 30,00€ und mehr zählen als variable Kosten.</p>
        </section>

        <section class="card">
          <h2>Fixe Kosten (zentral)</h2>
          <div class="inline">
            <label>
              Name
              <input id="fixed-template-name" type="text" placeholder="z.B. Miete" value="${editingFixedTemplate?.name ?? ""}" />
            </label>
            <label>
              Betrag (€)
              <input class="amount-input" id="fixed-template-amount" type="number" min="0" step="0.01" value="${editingFixedTemplate ? centsToEuro(editingFixedTemplate.plannedCents) : ""}" />
            </label>
            <button class="btn btn-primary" id="add-fixed-template">${editingFixedTemplate ? "Änderung speichern" : "Vorlage speichern"}</button>
            ${editingFixedTemplate ? '<button class="btn btn-quiet" id="cancel-fixed-template-edit">Abbrechen</button>' : ""}
          </div>
          <table>
            <thead>
              <tr><th>Name</th><th>Geplant (€)</th><th></th><th></th></tr>
            </thead>
            <tbody>
              ${state.fixedTemplates
                .map(
                  (template) =>
                    `<tr>
                      <td>${template.name}</td>
                      <td>${centsToEuro(template.plannedCents)}</td>
                      <td><button class="btn btn-quiet" data-edit-fixed-template="${template.id}">Bearbeiten</button></td>
                      <td><button class="btn btn-quiet" data-remove-fixed-template="${template.id}">Löschen</button></td>
                    </tr>`,
                )
                .join("")}
            </tbody>
          </table>
        </section>

        <section class="card grid">
          <h2>Monat: ${year ? `${monthLabel(state.selectedMonth)} ${year.year}` : "-"}</h2>
          <div class="inline">
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

          <article class="card">
            <h3>Auswertung (Monat & Jahr)</h3>
            <table>
              <thead>
                <tr><th>Rechnungskreis</th><th>Monat (€)</th><th>Jahr (€)</th></tr>
              </thead>
              <tbody>
                <tr><td>1) Essen</td><td>${centsToEuro(monthSummary.foodCents)}</td><td>${centsToEuro(yearSummary.foodCents)}</td></tr>
                <tr><td>1) Ausgehen</td><td>${centsToEuro(monthSummary.goingOutCents)}</td><td>${centsToEuro(yearSummary.goingOutCents)}</td></tr>
                <tr><td>2) Fixe Kosten (Ist)</td><td class="${fixedSummaryBudgetClass}">${centsToEuro(monthSummary.fixedCents)}</td><td>${centsToEuro(yearSummary.fixedCents)}</td></tr>
                <tr><td>2) Fixe Kosten Budget</td><td>${centsToEuro(fixedBudgetCents)}</td><td>-</td></tr>
                <tr><td>3) Variable Kosten</td><td class="${variableSummaryBudgetClass}">${centsToEuro(monthSummary.variableCents)}</td><td>${centsToEuro(yearSummary.variableCents)}</td></tr>
                <tr><td>3) Variable Kosten Budget</td><td>${centsToEuro(variableBudgetCents)}</td><td>-</td></tr>
                <tr><td>3) Variable Positionen Budget</td><td>${centsToEuro(variablePositionBudgetCents)}</td><td>-</td></tr>
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

          <article class="card">
            <h3>Einkommen (Monat)</h3>
            <div class="inline">
              <label>
                Beschreibung
                <input id="income-description" type="text" placeholder="z.B. Gehalt" ${month ? "" : "disabled"} />
              </label>
              <label>
                Betrag (€)
                <input class="amount-input" id="income-amount" type="number" min="0" step="0.01" placeholder="0.00" ${month ? "" : "disabled"} />
              </label>
              <button class="btn btn-primary" id="add-income" ${month ? "" : "disabled"}>Einkommen erfassen</button>
            </div>
            <table>
              <thead>
                <tr><th>Beschreibung</th><th>Betrag (€)</th><th></th></tr>
              </thead>
              <tbody>
                ${
                  month
                    ? month.incomes
                        .map(
                          (entry) => `<tr>
                    <td>${entry.description}</td>
                    <td>${centsToEuro(entry.amountCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-income="${entry.id}">Löschen</button></td>
                  </tr>`,
                        )
                        .join("")
                    : ""
                }
              </tbody>
            </table>
            <p class="muted">Monatliches Einkommen gesamt: ${centsToEuro(incomeTotalCents)} €</p>
          </article>

          <div class="grid grid-4">
            <article class="card">
              <h3>1) Essen, Trinken und Ausgehen (Tage)</h3>
              <table class="daily-table">
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
                      <td><input class="amount-input" data-day-food="${day.isoDate}" type="number" min="0" step="0.01" value="${centsToEuro(day.foodCents)}" /></td>
                      <td><input class="amount-input" data-day-going="${day.isoDate}" type="number" min="0" step="0.01" value="${centsToEuro(day.goingOutCents)}" /></td>
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
              <div class="inline">
                <label>
                  Budget Fixkosten (€)
                  <input class="amount-input" id="fixed-budget" type="number" min="0" step="0.01" value="${centsToEuro(fixedBudgetCents)}" ${month ? "" : "disabled"} />
                </label>
              </div>
              <table>
                <thead>
                  <tr><th>Name</th><th>Geplant (€)</th><th>Ist (€)</th><th>Abweichung (€)</th></tr>
                </thead>
                <tbody>
                ${
                  month
                    ? month.fixedCosts
                        .map(
                          (cost) => `<tr>
                    <td>${cost.name}</td>
                    <td>${centsToEuro(cost.plannedCents)}</td>
                    <td class="${budgetStatusClass(cost.actualCents, cost.plannedCents)}"><input class="amount-input" data-fixed-actual="${cost.id}" type="number" min="0" step="0.01" value="${centsToEuro(cost.actualCents)}" /></td>
                    <td class="${budgetStatusClass(cost.actualCents, cost.plannedCents)}">${centsToEuro(cost.actualCents - cost.plannedCents)}</td>
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
                <label>
                  Neue Position
                  <input id="variable-position-name" type="text" placeholder="z.B. Urlaub" ${month ? "" : "disabled"} />
                </label>
                <label>
                  Positionsbudget (€)
                  <input class="amount-input" id="variable-position-budget" type="number" min="0" step="0.01" placeholder="500.00" ${month ? "" : "disabled"} />
                </label>
                <button class="btn btn-primary" id="add-variable-position" ${month ? "" : "disabled"}>Position anlegen</button>
              </div>
              <table>
                <thead>
                  <tr><th>Position</th><th>Budget (€)</th><th>Ist (€)</th><th>Abweichung (€)</th><th></th></tr>
                </thead>
                <tbody>
                ${
                  month
                    ? month.variablePositions
                        .map(
                          (position) => `<tr>
                    <td>${position.name}</td>
                    <td>${centsToEuro(position.budgetCents)}</td>
                    <td class="${budgetStatusClass(position.actualCents, position.budgetCents)}"><input class="amount-input" data-variable-position-actual="${position.id}" type="number" min="0" step="0.01" value="${centsToEuro(position.actualCents)}" /></td>
                    <td class="${budgetStatusClass(position.actualCents, position.budgetCents)}">${centsToEuro(position.actualCents - position.budgetCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-variable-position="${position.id}">Löschen</button></td>
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
                  <tr><th>Beschreibung</th><th>Betrag (€)</th></tr>
                </thead>
                <tbody>
                ${
                  month
                    ? month.miscCosts
                        .map(
                          (entry) => `<tr>
                    <td>${entry.description}</td>
                    <td>${centsToEuro(entry.amountCents)}</td>
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
            <button class="btn btn-primary" id="backup-export">Backup exportieren (JSON)</button>
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
    const themeSelect = root.querySelector<HTMLSelectElement>("#theme-select");
    const newYearInput = root.querySelector<HTMLInputElement>("#new-year");
    const createYearButton =
      root.querySelector<HTMLButtonElement>("#create-year");
    const deleteYearButton =
      root.querySelector<HTMLButtonElement>("#delete-year");
    const yearSelect = root.querySelector<HTMLSelectElement>("#year-select");
    const monthSelect = root.querySelector<HTMLSelectElement>("#month-select");

    themeSelect?.addEventListener("change", () => {
      const selectedTheme = themeSelect.value;
      if (
        selectedTheme === "light" ||
        selectedTheme === "dark" ||
        selectedTheme === "forest"
      ) {
        applyTheme(selectedTheme);
      }
    });

    createYearButton?.addEventListener("click", async () => {
      const yearValue = Number.parseInt(newYearInput?.value ?? "", 10);
      if (!Number.isInteger(yearValue)) {
        alert("Bitte gültiges Jahr eingeben.");
        return;
      }
      await createYear(yearValue);
    });

    deleteYearButton?.addEventListener("click", async () => {
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
    const cancelFixedTemplateEditButton = root.querySelector<HTMLButtonElement>(
      "#cancel-fixed-template-edit",
    );

    addFixedTemplateButton?.addEventListener("click", async () => {
      const name = fixedNameInput?.value ?? "";
      const amountCents = euroToCents(fixedAmountInput?.value ?? "0");
      await upsertFixedTemplate(name, amountCents);
      if (fixedNameInput) fixedNameInput.value = "";
      if (fixedAmountInput) fixedAmountInput.value = "";
    });

    cancelFixedTemplateEditButton?.addEventListener("click", () => {
      cancelEditFixedTemplate();
    });

    root
      .querySelectorAll<HTMLButtonElement>("[data-edit-fixed-template]")
      .forEach((button) => {
        button.addEventListener("click", () => {
          const templateId = button.dataset.editFixedTemplate;
          if (!templateId) return;
          startEditFixedTemplate(templateId);
        });
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

    const fixedBudgetInput =
      root.querySelector<HTMLInputElement>("#fixed-budget");
    fixedBudgetInput?.addEventListener("change", async () => {
      await updateMonthlyFixedBudget(euroToCents(fixedBudgetInput.value));
    });

    const variablePositionNameInput = root.querySelector<HTMLInputElement>(
      "#variable-position-name",
    );
    const variablePositionBudgetInput = root.querySelector<HTMLInputElement>(
      "#variable-position-budget",
    );
    const addVariablePositionButton = root.querySelector<HTMLButtonElement>(
      "#add-variable-position",
    );
    const incomeDescriptionInput = root.querySelector<HTMLInputElement>(
      "#income-description",
    );
    const incomeAmountInput =
      root.querySelector<HTMLInputElement>("#income-amount");
    const addIncomeButton =
      root.querySelector<HTMLButtonElement>("#add-income");

    addVariablePositionButton?.addEventListener("click", async () => {
      const budgetCents = euroToCents(
        variablePositionBudgetInput?.value ?? "0",
      );
      await addVariablePosition(
        variablePositionNameInput?.value ?? "",
        budgetCents,
      );
      if (variablePositionNameInput) variablePositionNameInput.value = "";
      if (variablePositionBudgetInput) variablePositionBudgetInput.value = "";
    });

    addIncomeButton?.addEventListener("click", async () => {
      const amountCents = euroToCents(incomeAmountInput?.value ?? "0");
      await addIncome(incomeDescriptionInput?.value ?? "", amountCents);
      if (incomeDescriptionInput) incomeDescriptionInput.value = "";
      if (incomeAmountInput) incomeAmountInput.value = "";
    });

    root
      .querySelectorAll<HTMLInputElement>("[data-variable-position-actual]")
      .forEach((input) => {
        input.addEventListener("change", async () => {
          const positionId = input.dataset.variablePositionActual;
          if (!positionId) return;
          await updateVariablePositionActual(
            positionId,
            euroToCents(input.value),
          );
        });
      });

    root
      .querySelectorAll<HTMLButtonElement>("[data-remove-variable-position]")
      .forEach((button) => {
        button.addEventListener("click", async () => {
          const positionId = button.dataset.removeVariablePosition;
          if (!positionId) return;
          await removeVariablePosition(positionId);
        });
      });

    root
      .querySelectorAll<HTMLButtonElement>("[data-remove-income]")
      .forEach((button) => {
        button.addEventListener("click", async () => {
          const incomeId = button.dataset.removeIncome;
          if (!incomeId) return;
          await removeIncome(incomeId);
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
