import type {
  DayEntry,
  ExpenseEntry,
  FixedCostEntry,
  FixedCostTemplate,
  IncomeEntry,
  IncomeSource,
  MonthBook,
  MonthNumber,
  SearchEvaluationMonthRow,
  SearchEvaluationResult,
  SearchEvaluationYearRow,
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
    actualCents: 0,
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
    weeklyShoppingWeekday: null,
    weeklyShoppingEstimateCents: 0,
    foodBudgetCents: 0,
    goingOutBudgetCents: 0,
    incomes: [],
    fixedCosts: seedMonthFromFixedTemplates(fixedTemplates),
    fixedBudgetCents: defaultFixedBudgetCents,
    variableCosts: [],
    variablePositions: [],
    variableBudgetCents: 0,
    miscBudgetCents: 0,
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

export function createIncomeEntry(
  description: string,
  amountCents: number,
  incomeSource?: IncomeSource,
): IncomeEntry {
  const entryBase = {
    id: createId("income"),
    description,
    amountCents,
    createdAt: nowIso(),
  };

  if (!incomeSource) {
    return entryBase;
  }

  return {
    ...entryBase,
    incomeSource,
  };
}

function includesKeyword(value: string, keyword: string): boolean {
  return value.toLocaleLowerCase("de-DE").includes(keyword);
}

export function evaluateKeywordAcrossYears(
  years: YearBook[],
  keyword: string,
  currentYear: number,
  currentMonth: number,
): SearchEvaluationResult {
  const trimmedKeyword = keyword.trim();
  const normalizedKeyword = trimmedKeyword.toLocaleLowerCase("de-DE");

  if (!normalizedKeyword) {
    return {
      id: createId("search_eval"),
      keyword: "",
      keywordNormalized: "",
      createdAt: nowIso(),
      totalHitCount: 0,
      totalCents: 0,
      currentYearCents: 0,
      monthsWithHits: 0,
      monthAverageCents: 0,
      yearRows: [],
      monthRows: [],
    };
  }

  let totalHitCount = 0;
  let totalCents = 0;
  let currentYearCents = 0;
  let monthsWithHits = 0;
  let monthAverageSourceCents = 0;
  const cappedCurrentMonth = Math.max(1, Math.min(12, currentMonth));

  const yearRows: SearchEvaluationYearRow[] = [];
  const monthRows: SearchEvaluationMonthRow[] = [];

  years
    .slice()
    .sort((left, right) => left.year - right.year)
    .forEach((year) => {
      let yearHitCount = 0;
      let yearTotalCents = 0;
      let yearMonthsWithHits = 0;
      let yearAverageSourceCents = 0;
      let yearAverageMonthsWithHits = 0;

      year.months
        .slice()
        .sort((left, right) => left.month - right.month)
        .forEach((month) => {
          let monthHitCount = 0;
          let monthTotalCents = 0;

          month.fixedCosts.forEach((entry) => {
            if (!includesKeyword(entry.name, normalizedKeyword)) {
              return;
            }
            monthHitCount += 1;
            monthTotalCents += entry.actualCents;
          });

          month.variableCosts.forEach((entry) => {
            if (!includesKeyword(entry.description, normalizedKeyword)) {
              return;
            }
            monthHitCount += 1;
            monthTotalCents += entry.amountCents;
          });

          month.variablePositions.forEach((entry) => {
            if (!includesKeyword(entry.name, normalizedKeyword)) {
              return;
            }
            monthHitCount += 1;
            monthTotalCents += entry.actualCents;
          });

          month.miscCosts.forEach((entry) => {
            if (!includesKeyword(entry.description, normalizedKeyword)) {
              return;
            }
            monthHitCount += 1;
            monthTotalCents += entry.amountCents;
          });

          if (monthHitCount <= 0) {
            return;
          }

          yearHitCount += monthHitCount;
          yearTotalCents += monthTotalCents;
          yearMonthsWithHits += 1;

          const isIncludedForYearAverage =
            year.year < currentYear ||
            (year.year === currentYear && month.month <= cappedCurrentMonth);
          if (isIncludedForYearAverage) {
            yearAverageMonthsWithHits += 1;
            yearAverageSourceCents += monthTotalCents;
          }

          totalHitCount += monthHitCount;
          totalCents += monthTotalCents;

          const isIncludedForMonthAverage =
            year.year < currentYear ||
            (year.year === currentYear && month.month <= cappedCurrentMonth);
          if (isIncludedForMonthAverage) {
            monthsWithHits += 1;
            monthAverageSourceCents += monthTotalCents;
          }

          monthRows.push({
            year: year.year,
            month: month.month,
            hitCount: monthHitCount,
            totalCents: monthTotalCents,
          });
        });

      if (yearHitCount <= 0) {
        return;
      }

      if (year.year === currentYear) {
        currentYearCents += yearTotalCents;
      }

      yearRows.push({
        year: year.year,
        hitCount: yearHitCount,
        totalCents: yearTotalCents,
        monthsWithHits: yearAverageMonthsWithHits,
        monthAverageCents:
          yearAverageMonthsWithHits > 0
            ? Math.round(yearAverageSourceCents / yearAverageMonthsWithHits)
            : 0,
      });
    });

  return {
    id: createId("search_eval"),
    keyword: trimmedKeyword,
    keywordNormalized: normalizedKeyword,
    createdAt: nowIso(),
    totalHitCount,
    totalCents,
    currentYearCents,
    monthsWithHits,
    monthAverageCents:
      monthsWithHits > 0 ? Math.round(monthAverageSourceCents / monthsWithHits) : 0,
    yearRows,
    monthRows,
  };
}
