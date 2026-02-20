export type YearNumber = number;
export type MonthNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type EuroCents = number;

export interface DayEntry {
  isoDate: string;
  foodCents: EuroCents;
  goingOutCents: EuroCents;
}

export interface FixedCostTemplate {
  id: string;
  name: string;
  plannedCents: EuroCents;
}

export interface FixedCostEntry {
  id: string;
  templateId: string;
  name: string;
  plannedCents: EuroCents;
  actualCents: EuroCents;
}

export interface ExpenseEntry {
  id: string;
  description: string;
  amountCents: EuroCents;
  createdAt: string;
}

export interface VariableBudgetPosition {
  id: string;
  name: string;
  budgetCents: EuroCents;
  actualCents: EuroCents;
}

export interface MonthBook {
  month: MonthNumber;
  days: DayEntry[];
  fixedCosts: FixedCostEntry[];
  fixedBudgetCents: EuroCents;
  variableCosts: ExpenseEntry[];
  variablePositions: VariableBudgetPosition[];
  variableBudgetCents: EuroCents;
  miscCosts: ExpenseEntry[];
}

export interface YearBook {
  year: YearNumber;
  createdAt: string;
  templateVersion: string;
  months: MonthBook[];
}

export interface BackupPayload {
  exportedAt: string;
  years: YearBook[];
  fixedTemplates: FixedCostTemplate[];
}
