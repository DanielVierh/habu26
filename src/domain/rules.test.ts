import { describe, expect, it } from "vitest";
import {
  classifyCostByAmount,
  createMonthDays,
  createYearWithMonths,
  evaluateKeywordAcrossYears,
} from "./rules";

describe("rules", () => {
  it("klassifiziert 30,00€ als variable Kosten", () => {
    expect(classifyCostByAmount(3000)).toBe("variable");
    expect(classifyCostByAmount(2999)).toBe("misc");
  });

  it("erstellt korrekte Tagesanzahl je Monat", () => {
    expect(createMonthDays(2026, 2)).toHaveLength(28);
    expect(createMonthDays(2024, 2)).toHaveLength(29);
  });

  it("erstellt beim Jahr automatisch 12 Monate", () => {
    const year = createYearWithMonths(
      2026,
      [
        {
          id: "tpl-1",
          name: "Miete",
          plannedCents: 90000,
        },
      ],
      "v1",
    );

    expect(year.months).toHaveLength(12);
    expect(year.months[0]?.fixedCosts).toHaveLength(1);
    expect(year.months[0]?.fixedCosts[0]?.actualCents).toBe(0);
    expect(year.months[0]?.foodBudgetCents).toBe(0);
    expect(year.months[0]?.goingOutBudgetCents).toBe(0);
    expect(year.months[0]?.weeklyShoppingWeekday).toBeNull();
    expect(year.months[0]?.weeklyShoppingEstimateCents).toBe(0);
    expect(year.months[0]?.fixedBudgetCents).toBe(90000);
    expect(year.months[0]?.variablePositions).toEqual([]);
    expect(year.months[0]?.variableBudgetCents).toBe(0);
  });

  it("wertet Suchwort über alle Jahre aus", () => {
    const year2025 = createYearWithMonths(2025, [], "v1");
    const year2026 = createYearWithMonths(2026, [], "v1");

    const jan2025 = year2025.months[0];
    const mar2026 = year2026.months[2];
    if (!jan2025 || !mar2026) {
      throw new Error("Testdaten konnten nicht vorbereitet werden.");
    }

    jan2025.fixedCosts.push({
      id: "f-1",
      templateId: "tpl-1",
      name: "Klamotten-Abo",
      plannedCents: 1000,
      actualCents: 1200,
    });
    jan2025.variableCosts.push({
      id: "v-1",
      description: "Klamotten Sale",
      amountCents: 3400,
      createdAt: "2025-01-05T08:00:00.000Z",
    });
    jan2025.variablePositions.push({
      id: "vp-1",
      name: "Klamotten Budgetposition",
      budgetCents: 3500,
      actualCents: 2000,
    });
    mar2026.miscCosts.push({
      id: "m-1",
      description: "Neue KLAMOTTEN",
      amountCents: 5000,
      createdAt: "2026-03-02T08:00:00.000Z",
    });

    const result = evaluateKeywordAcrossYears(
      [year2026, year2025],
      "klamotten",
      2026,
    );

    expect(result.keyword).toBe("klamotten");
    expect(result.totalHitCount).toBe(4);
    expect(result.totalCents).toBe(11600);
    expect(result.currentYearCents).toBe(5000);
    expect(result.monthsWithHits).toBe(2);
    expect(result.monthAverageCents).toBe(5800);

    expect(result.yearRows).toEqual([
      {
        year: 2025,
        hitCount: 3,
        totalCents: 6600,
        monthsWithHits: 1,
        monthAverageCents: 6600,
      },
      {
        year: 2026,
        hitCount: 1,
        totalCents: 5000,
        monthsWithHits: 1,
        monthAverageCents: 5000,
      },
    ]);
    expect(result.monthRows).toEqual([
      {
        year: 2025,
        month: 1,
        hitCount: 3,
        totalCents: 6600,
      },
      {
        year: 2026,
        month: 3,
        hitCount: 1,
        totalCents: 5000,
      },
    ]);
  });

  it("liefert leere Auswertung bei leerem Suchwort", () => {
    const year = createYearWithMonths(2026, [], "v1");
    const result = evaluateKeywordAcrossYears([year], "   ", 2026);

    expect(result.keyword).toBe("");
    expect(result.totalHitCount).toBe(0);
    expect(result.totalCents).toBe(0);
    expect(result.currentYearCents).toBe(0);
    expect(result.monthsWithHits).toBe(0);
    expect(result.monthAverageCents).toBe(0);
    expect(result.yearRows).toEqual([]);
    expect(result.monthRows).toEqual([]);
  });
});
