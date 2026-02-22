import { describe, expect, it } from "vitest";
import {
  classifyCostByAmount,
  createMonthDays,
  createYearWithMonths,
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
    expect(year.months[0]?.fixedBudgetCents).toBe(90000);
    expect(year.months[0]?.variablePositions).toEqual([]);
    expect(year.months[0]?.variableBudgetCents).toBe(0);
  });
});
