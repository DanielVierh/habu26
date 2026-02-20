import type {
  DayEntry,
  ExpenseEntry,
  FixedCostEntry,
  FixedCostTemplate,
  MonthBook,
  MonthNumber,
  YearBook,
  YearNumber,
} from "./model";

const monthNumbers: MonthNumber[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export function nowIso(): string {
  return new Date().toISOString();
}

export function createId(prefix: string): string {
  const randomPart = Math.random().toString(36).slice(2, 10);
  return `${prefix}_${Date.now()}_${randomPart}`;
}

export function createMonthDays(
  year: YearNumber,
  month: MonthNumber,
): DayEntry[] {
  const daysInMonth = new Date(year, month, 0).getDate();
  const days: DayEntry[] = [];
  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = new Date(Date.UTC(year, month - 1, day));
    days.push({
      isoDate: date.toISOString().slice(0, 10),
      foodCents: 0,
      goingOutCents: 0,
    });
  }
  return days;
}

export function seedMonthFromFixedTemplates(
  templates: FixedCostTemplate[],
): FixedCostEntry[] {
  return templates.map((template) => ({
    id: createId("fixed"),
    templateId: template.id,
    name: template.name,
    plannedCents: template.plannedCents,
    actualCents: template.plannedCents,
  }));
}

export function createYearWithMonths(
  year: YearNumber,
  fixedTemplates: FixedCostTemplate[],
  templateVersion: string,
): YearBook {
  const defaultFixedBudgetCents = fixedTemplates.reduce(
    (sum, template) => sum + template.plannedCents,
    0,
  );

  const months: MonthBook[] = monthNumbers.map((month) => ({
    month,
    days: createMonthDays(year, month),
    fixedCosts: seedMonthFromFixedTemplates(fixedTemplates),
    fixedBudgetCents: defaultFixedBudgetCents,
    variableCosts: [],
    variablePositions: [],
    variableBudgetCents: 0,
    miscCosts: [],
  }));

  return {
    year,
    createdAt: nowIso(),
    templateVersion,
    months,
  };
}

export function classifyCostByAmount(amountCents: number): "variable" | "misc" {
  return amountCents >= 3000 ? "variable" : "misc";
}

export function createExpense(
  description: string,
  amountCents: number,
): ExpenseEntry {
  return {
    id: createId("expense"),
    description,
    amountCents,
    createdAt: nowIso(),
  };
}
