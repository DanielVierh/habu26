import type {
  AnnualVariableFixedCostTemplate,
  AuditLogEntry,
  BackupPayload,
  ExpenseEntry,
  FixedCostEntry,
  FixedCostTemplate,
  IncomeSource,
  MonthBook,
  MonthNumber,
  YearBook,
  YearNumber,
} from "../domain/model";
import {
  createExpense,
  createId,
  createIncomeEntry,
  createYearWithMonths,
} from "../domain/rules";
import {
  appendAuditLogEntry,
  createBackupPayload,
  deleteYear,
  getAnnualVariableFixedTemplateState,
  getFixedTemplateState,
  getYear,
  listAuditLogEntries,
  listYears,
  restoreFromBackup,
  saveAnnualVariableFixedTemplates,
  saveFixedTemplates,
  saveYear,
} from "../storage/repository";
import {
  centsToEuro,
  centsToEuroInput,
  euroToCents,
  monthLabel,
} from "./format";

const AVAILABLE_THEMES = [
  "light",
  "dark",
  "forest",
  "sage-light",
  "mint-light",
  "pine-light",
  "pine-dark",
  "midnight",
  "graphite",
  "violet-night",
  "ocean-dark",
  "ember-dark",
  "neon-dark",
  "slate-dark",
  "plum-dark",
  "moss-dark",
  "cyber-dark",
] as const;

type ThemeName = (typeof AVAILABLE_THEMES)[number];

type BudgetFieldName =
  | "foodBudgetCents"
  | "goingOutBudgetCents"
  | "fixedBudgetCents"
  | "variableBudgetCents"
  | "miscBudgetCents";

interface RecurringBudgetDefaults {
  foodBudgetCents: number | null;
  goingOutBudgetCents: number | null;
  fixedBudgetCents: number | null;
  variableBudgetCents: number | null;
  miscBudgetCents: number | null;
}

interface ChangeLogEntry {
  id: string;
  timestampIso: string;
  message: string;
}

function isThemeName(value: string): value is ThemeName {
  return (AVAILABLE_THEMES as readonly string[]).includes(value);
}

function themeLabel(theme: ThemeName): string {
  switch (theme) {
    case "light":
      return "Light";
    case "dark":
      return "Dark";
    case "forest":
      return "Forest";
    case "sage-light":
      return "Sage Light";
    case "mint-light":
      return "Mint Light";
    case "pine-light":
      return "Pine Light";
    case "pine-dark":
      return "Pine Dark";
    case "midnight":
      return "Midnight";
    case "graphite":
      return "Graphite";
    case "violet-night":
      return "Violet Night";
    case "ocean-dark":
      return "Ocean Dark";
    case "ember-dark":
      return "Ember Dark";
    case "neon-dark":
      return "Neon Dark";
    case "slate-dark":
      return "Slate Dark";
    case "plum-dark":
      return "Plum Dark";
    case "moss-dark":
      return "Moss Dark";
    case "cyber-dark":
      return "Cyber Dark";
  }
}

interface State {
  years: YearBook[];
  selectedYear: number | null;
  selectedMonth: number;
  fixedTemplates: FixedCostTemplate[];
  fixedTemplateVersion: string;
  annualVariableFixedTemplates: AnnualVariableFixedCostTemplate[];
  annualVariableFixedTemplateVersion: string;
  editingFixedTemplateId: string | null;
  theme: ThemeName;
  hasUnexportedChanges: boolean;
  unexportedChangeLog: ChangeLogEntry[];
  showUnexportedChangeLogModal: boolean;
  persistentAuditLog: AuditLogEntry[];
  showPersistentAuditLogModal: boolean;
  lastBackupFileName: string | null;
  topModal: "years" | "fixed" | "variable-fixed" | "dashboard" | null;
  dashboardTab: "year" | "food" | "all";
  dashboardYear: number | null;
  recurringBudgetDefaults: RecurringBudgetDefaults;
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
  month: MonthNumber;
  summary: CostSummary;
}

interface IncomeFlowSummary {
  hasPreviousMonth: boolean;
  carriedFromPreviousCents: number;
  recordedIncomeCents: number;
  effectiveIncomeCents: number;
  plannedBudgetCents: number;
  netCents: number;
}

type WeekdayNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6;

const WEEKDAY_OPTIONS: Array<{ value: WeekdayNumber; label: string }> = [
  { value: 1, label: "Montag" },
  { value: 2, label: "Dienstag" },
  { value: 3, label: "Mittwoch" },
  { value: 4, label: "Donnerstag" },
  { value: 5, label: "Freitag" },
  { value: 6, label: "Samstag" },
  { value: 0, label: "Sonntag" },
];

export function createAppController(root: HTMLElement) {
  const state: State = {
    years: [],
    selectedYear: null,
    selectedMonth: 1,
    fixedTemplates: [],
    fixedTemplateVersion: "",
    annualVariableFixedTemplates: [],
    annualVariableFixedTemplateVersion: "",
    editingFixedTemplateId: null,
    theme: "light",
    hasUnexportedChanges: false,
    unexportedChangeLog: [],
    showUnexportedChangeLogModal: false,
    persistentAuditLog: [],
    showPersistentAuditLogModal: false,
    lastBackupFileName: null,
    topModal: null,
    dashboardTab: "year",
    dashboardYear: null,
    recurringBudgetDefaults: {
      foodBudgetCents: null,
      goingOutBudgetCents: null,
      fixedBudgetCents: null,
      variableBudgetCents: null,
      miscBudgetCents: null,
    },
  };

  const THEME_STORAGE_KEY = "habu-theme";
  const BACKUP_DIRTY_STORAGE_KEY = "habu-backup-dirty";
  const UNEXPORTED_CHANGE_LOG_STORAGE_KEY = "habu-unexported-change-log";
  const LAST_BACKUP_FILENAME_STORAGE_KEY = "habu-last-backup-filename";
  const RECURRING_BUDGET_DEFAULTS_STORAGE_KEY =
    "habu-recurring-budget-defaults";
  let toastRoot: HTMLDivElement | null = null;
  let amountModalRoot: HTMLDivElement | null = null;
  let amountModalTarget: HTMLInputElement | null = null;
  let weeklyShoppingModalRoot: HTMLDivElement | null = null;
  let hasBoundGlobalModalKeys = false;
  let hasBoundScrollUpVisibilityEvents = false;
  const budgetCanvasAnimationFrames = new WeakMap<HTMLCanvasElement, number>();

  function renderBudgetVsActualCanvases(): void {
    const canvases = root.querySelectorAll<HTMLCanvasElement>(
      "[data-budget-vs-canvas]",
    );
    if (canvases.length === 0) {
      return;
    }

    const themeStyles = getComputedStyle(document.documentElement);
    const colorText = themeStyles.getPropertyValue("--text-main").trim();
    const colorMuted = themeStyles.getPropertyValue("--text-muted").trim();
    const colorTrack = themeStyles.getPropertyValue("--table-stripe").trim();
    const colorBorder = themeStyles.getPropertyValue("--table-border").trim();
    const colorPositive = themeStyles.getPropertyValue("--budget-under").trim();
    const colorNegative = themeStyles.getPropertyValue("--danger-2").trim();

    const canvasHeightPx = 96;
    const animationDurationMs = 250;
    const easeOutCubic = (value: number): number =>
      1 - Math.pow(1 - Math.max(0, Math.min(1, value)), 3);

    canvases.forEach((canvas) => {
      if (canvas.dataset.hoverBound !== "1") {
        canvas.dataset.hoverBound = "1";
        canvas.addEventListener("mouseenter", () => {
          canvas.dataset.hovering = "1";
          renderBudgetVsActualCanvases();
        });
        canvas.addEventListener("mouseleave", () => {
          delete canvas.dataset.hovering;
          delete canvas.dataset.hoverX;
          renderBudgetVsActualCanvases();
        });
        canvas.addEventListener("mousemove", (event) => {
          const rect = canvas.getBoundingClientRect();
          const hoverX = Math.round(event.clientX - rect.left);
          canvas.dataset.hoverX = String(hoverX);
          renderBudgetVsActualCanvases();
        });
      }

      const budgetCents = Number.parseInt(
        canvas.dataset.budgetCents ?? "0",
        10,
      );
      const actualCents = Number.parseInt(
        canvas.dataset.actualCents ?? "0",
        10,
      );
      const label = canvas.dataset.label ?? "Kategorie";
      const isHovered = canvas.dataset.hovering === "1";
      const signature = `${label}|${budgetCents}|${actualCents}`;
      const shouldAnimate = canvas.dataset.lastRenderSignature !== signature;
      canvas.dataset.lastRenderSignature = signature;

      const cssWidth = Math.max(120, Math.floor(canvas.clientWidth || 120));
      const dpr = window.devicePixelRatio || 1;
      const pixelWidth = Math.floor(cssWidth * dpr);
      const pixelHeight = Math.floor(canvasHeightPx * dpr);

      if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
        canvas.width = pixelWidth;
        canvas.height = pixelHeight;
      }

      const context = canvas.getContext("2d");
      if (!context) {
        return;
      }

      const maxCents = Math.max(1, budgetCents, actualCents);
      const budgetRatio = Math.min(1, Math.max(0, budgetCents / maxCents));
      const actualRatio = Math.min(1, Math.max(0, actualCents / maxCents));
      const diffCents = budgetCents - actualCents;
      const usagePercent =
        budgetCents > 0
          ? (actualCents / budgetCents) * 100
          : actualCents > 0
            ? 100
            : 0;

      const paddingX = 8;
      const trackX = paddingX;
      const trackY = 34;
      const trackWidth = cssWidth - paddingX * 2;
      const trackHeight = 22;
      const hoverX = Number.parseInt(canvas.dataset.hoverX ?? "-1", 10);

      const drawRoundedRect = (
        x: number,
        y: number,
        width: number,
        height: number,
        radius: number,
      ) => {
        context.beginPath();
        context.moveTo(x + radius, y);
        context.lineTo(x + width - radius, y);
        context.quadraticCurveTo(x + width, y, x + width, y + radius);
        context.lineTo(x + width, y + height - radius);
        context.quadraticCurveTo(
          x + width,
          y + height,
          x + width - radius,
          y + height,
        );
        context.lineTo(x + radius, y + height);
        context.quadraticCurveTo(x, y + height, x, y + height - radius);
        context.lineTo(x, y + radius);
        context.quadraticCurveTo(x, y, x + radius, y);
        context.closePath();
      };

      const renderFrame = (progress: number): void => {
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.scale(dpr, dpr);

        drawRoundedRect(trackX, trackY, trackWidth, trackHeight, 8);
        context.fillStyle = colorTrack;
        context.fill();
        context.strokeStyle = colorBorder;
        context.lineWidth = 1;
        context.stroke();

        const bandWidths = [0.6, 0.25, 0.15];
        const bandAlphas = [0.1, 0.16, 0.24];
        let bandOffset = 0;
        bandWidths.forEach((bandWidth, index) => {
          const width = trackWidth * bandWidth;
          context.save();
          context.globalAlpha = bandAlphas[index] ?? 0.1;
          context.fillStyle = colorMuted;
          context.fillRect(trackX + bandOffset, trackY, width, trackHeight);
          context.restore();
          bandOffset += width;
        });

        const actualColor =
          budgetCents > 0 && actualCents > budgetCents
            ? colorNegative
            : colorPositive;
        const animatedActualWidth = trackWidth * actualRatio * progress;
        drawRoundedRect(
          trackX,
          trackY + 3,
          animatedActualWidth,
          trackHeight - 6,
          6,
        );
        context.fillStyle = actualColor;
        context.fill();

        if (isHovered) {
          context.save();
          context.strokeStyle = actualColor;
          context.lineWidth = 1.5;
          context.globalAlpha = 0.8;
          drawRoundedRect(
            trackX - 1,
            trackY + 2,
            Math.max(2, animatedActualWidth + 2),
            trackHeight - 4,
            7,
          );
          context.stroke();
          context.restore();
        }

        const markerX = trackX + trackWidth * budgetRatio;
        context.strokeStyle = colorText;
        context.lineWidth = isHovered ? 3 : 2;
        context.beginPath();
        context.moveTo(markerX, trackY - 3);
        context.lineTo(markerX, trackY + trackHeight + 3);
        context.stroke();

        if (isHovered && hoverX >= trackX && hoverX <= trackX + trackWidth) {
          context.save();
          context.strokeStyle = colorText;
          context.globalAlpha = 0.35;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(hoverX, trackY - 8);
          context.lineTo(hoverX, trackY + trackHeight + 8);
          context.stroke();
          context.restore();
        }

        context.fillStyle = colorText;
        context.font = "600 12px system-ui, -apple-system, sans-serif";
        context.textAlign = "left";
        context.textBaseline = "top";
        context.fillText(label, trackX, 10);

        const animatedUsagePercent = usagePercent * progress;
        context.fillStyle =
          usagePercent > 100
            ? colorNegative
            : usagePercent < 100
              ? colorPositive
              : colorMuted;
        context.textAlign = "right";
        context.fillText(
          `${animatedUsagePercent.toFixed(0)}%`,
          trackX + trackWidth,
          10,
        );

        context.fillStyle = colorMuted;
        context.font = "500 11px system-ui, -apple-system, sans-serif";
        context.textAlign = "left";
        context.textBaseline = "top";
        context.fillText(
          `Ist ${centsToEuro(actualCents)} · Ziel ${centsToEuro(budgetCents)} · Δ ${diffCents >= 0 ? "+" : ""}${centsToEuro(diffCents)}`,
          trackX,
          64,
        );

        if (isHovered) {
          const tooltipText = `Nutzung ${usagePercent.toFixed(1)}%`;
          context.font = "600 11px system-ui, -apple-system, sans-serif";
          const tooltipPaddingX = 8;
          const tooltipPaddingY = 5;
          const tooltipHeight = 22;
          const tooltipTextWidth = context.measureText(tooltipText).width;
          const tooltipWidth = tooltipTextWidth + tooltipPaddingX * 2;
          const preferredX = Number.isFinite(hoverX)
            ? hoverX - tooltipWidth / 2
            : trackX + trackWidth - tooltipWidth;
          const tooltipX = Math.min(
            trackX + trackWidth - tooltipWidth,
            Math.max(trackX, preferredX),
          );
          const tooltipY = trackY - tooltipHeight - 8;

          context.save();
          context.fillStyle = colorText;
          context.globalAlpha = 0.92;
          drawRoundedRect(tooltipX, tooltipY, tooltipWidth, tooltipHeight, 6);
          context.fill();
          context.restore();

          context.fillStyle = colorTrack;
          context.textAlign = "left";
          context.textBaseline = "top";
          context.fillText(
            tooltipText,
            tooltipX + tooltipPaddingX,
            tooltipY + tooltipPaddingY,
          );
        }
      };

      const runningAnimationId = budgetCanvasAnimationFrames.get(canvas);
      if (runningAnimationId) {
        window.cancelAnimationFrame(runningAnimationId);
      }

      if (!shouldAnimate) {
        renderFrame(1);
        return;
      }

      const animationStartedAt = performance.now();
      const animate = (timestamp: number) => {
        const elapsed = timestamp - animationStartedAt;
        const normalized = Math.min(1, elapsed / animationDurationMs);
        renderFrame(easeOutCubic(normalized));
        if (normalized < 1) {
          const frameId = window.requestAnimationFrame(animate);
          budgetCanvasAnimationFrames.set(canvas, frameId);
          return;
        }
        budgetCanvasAnimationFrames.delete(canvas);
      };

      const frameId = window.requestAnimationFrame(animate);
      budgetCanvasAnimationFrames.set(canvas, frameId);
    });
  }

  function bindDashboardTrendInteractions(): void {
    const charts = root.querySelectorAll<HTMLElement>(
      "[data-year-trend-chart]",
    );
    charts.forEach((chart) => {
      const points = Array.from(
        chart.querySelectorAll<HTMLButtonElement>("[data-year-trend-point]"),
      );
      if (points.length === 0) {
        return;
      }

      const monthElement = chart.querySelector<HTMLElement>(
        "[data-year-trend-active-month]",
      );
      const netElement = chart.querySelector<HTMLElement>(
        "[data-year-trend-active-net]",
      );
      const incomeElement = chart.querySelector<HTMLElement>(
        "[data-year-trend-active-income]",
      );
      const expenseElement = chart.querySelector<HTMLElement>(
        "[data-year-trend-active-expense]",
      );
      const deltaElement = chart.querySelector<HTMLElement>(
        "[data-year-trend-active-delta]",
      );
      const liveRegion = chart.querySelector<HTMLElement>(
        "[data-year-trend-live]",
      );

      if (
        !monthElement ||
        !netElement ||
        !incomeElement ||
        !expenseElement ||
        !deltaElement
      ) {
        return;
      }

      const applyBalanceClass = (element: HTMLElement, value: number): void => {
        element.classList.remove("danger", "budget-under");
        const className =
          value < 0 ? "danger" : value > 0 ? "budget-under" : "";
        if (className) {
          element.classList.add(className);
        }
      };

      const setActivePoint = (point: HTMLButtonElement): void => {
        const month = point.dataset.monthLabel ?? "-";
        const netCents = Number.parseInt(point.dataset.netCents ?? "0", 10);
        const actualNetCents = Number.parseInt(
          point.dataset.actualNetCents ?? "0",
          10,
        );
        const incomeCents = Number.parseInt(
          point.dataset.incomeCents ?? "0",
          10,
        );
        const expenseCents = Number.parseInt(
          point.dataset.expenseCents ?? "0",
          10,
        );
        const deltaCents = Number.parseInt(point.dataset.deltaCents ?? "0", 10);

        monthElement.textContent = month;
        netElement.textContent = centsToEuro(netCents);
        incomeElement.textContent = centsToEuro(incomeCents);
        expenseElement.textContent = centsToEuro(expenseCents);
        deltaElement.textContent = `${deltaCents >= 0 ? "+" : ""}${centsToEuro(deltaCents)}`;

        applyBalanceClass(netElement, netCents);
        applyBalanceClass(deltaElement, deltaCents);

        points.forEach((candidate) => {
          const isActive = candidate === point;
          candidate.classList.toggle("is-active", isActive);
          candidate.setAttribute("aria-pressed", String(isActive));
        });

        if (liveRegion) {
          liveRegion.textContent = `${month}: Kalkulierter Saldo ${centsToEuro(netCents)}, Ist-Saldo ${centsToEuro(actualNetCents)}, Einkommen ${centsToEuro(incomeCents)}, Ausgaben ${centsToEuro(expenseCents)}`;
        }
      };

      points.forEach((point) => {
        const activate = () => {
          setActivePoint(point);
        };
        point.addEventListener("mouseenter", activate);
        point.addEventListener("focus", activate);
        point.addEventListener("click", activate);
      });

      const defaultPoint =
        points.find((point) => point.dataset.pointDefault === "1") ??
        points[points.length - 1];
      if (defaultPoint) {
        setActivePoint(defaultPoint);
      }
    });
  }

  function openTopModal(
    kind: "years" | "fixed" | "variable-fixed" | "dashboard",
  ): void {
    if (kind === "dashboard") {
      const sortedYears = state.years
        .slice()
        .sort((left, right) => right.year - left.year);
      const hasDashboardYear = sortedYears.some(
        (year) => year.year === state.dashboardYear,
      );
      if (!hasDashboardYear) {
        state.dashboardYear =
          state.selectedYear ?? sortedYears[0]?.year ?? null;
      }
    }
    state.topModal = kind;
    render();
  }

  function closeTopModal(): void {
    if (!state.topModal) {
      return;
    }
    state.topModal = null;
    render();
  }

  function openUnexportedChangeLogModal(): void {
    state.showUnexportedChangeLogModal = true;
    render();
  }

  function closeUnexportedChangeLogModal(): void {
    if (!state.showUnexportedChangeLogModal) {
      return;
    }
    state.showUnexportedChangeLogModal = false;
    render();
  }

  function openPersistentAuditLogModal(): void {
    state.showPersistentAuditLogModal = true;
    render();
  }

  function closePersistentAuditLogModal(): void {
    if (!state.showPersistentAuditLogModal) {
      return;
    }
    state.showPersistentAuditLogModal = false;
    render();
  }

  function bindGlobalModalKeysOnce(): void {
    if (hasBoundGlobalModalKeys) {
      return;
    }
    hasBoundGlobalModalKeys = true;
    window.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") {
        return;
      }
      if (state.showUnexportedChangeLogModal) {
        event.preventDefault();
        closeUnexportedChangeLogModal();
        return;
      }
      if (state.showPersistentAuditLogModal) {
        event.preventDefault();
        closePersistentAuditLogModal();
        return;
      }
      if (!state.topModal) {
        return;
      }
      event.preventDefault();
      closeTopModal();
    });
  }

  function shouldShowScrollUpButton(): boolean {
    const maxScrollableHeight = Math.max(
      0,
      document.documentElement.scrollHeight - window.innerHeight,
    );
    if (maxScrollableHeight <= 0) {
      return false;
    }
    const threshold = maxScrollableHeight / 6;
    return window.scrollY > threshold;
  }

  function updateScrollUpButtonVisibility(): void {
    const scrollUpButton =
      root.querySelector<HTMLButtonElement>("#scroll-up-btn");
    if (!scrollUpButton) {
      return;
    }
    scrollUpButton.classList.toggle("is-visible", shouldShowScrollUpButton());
  }

  function bindScrollUpVisibilityOnce(): void {
    if (hasBoundScrollUpVisibilityEvents) {
      return;
    }
    hasBoundScrollUpVisibilityEvents = true;

    const onWindowChange = () => {
      updateScrollUpButtonVisibility();
      renderBudgetVsActualCanvases();
    };

    window.addEventListener("scroll", onWindowChange, { passive: true });
    window.addEventListener("resize", onWindowChange);
  }

  function ensureToastRoot(): HTMLDivElement {
    if (toastRoot && document.body.contains(toastRoot)) {
      return toastRoot;
    }
    const existing = document.getElementById("toast-root");
    if (existing instanceof HTMLDivElement) {
      toastRoot = existing;
      return existing;
    }
    const created = document.createElement("div");
    created.id = "toast-root";
    created.className = "toast-root";
    created.setAttribute("aria-live", "polite");
    created.setAttribute("aria-atomic", "true");
    document.body.appendChild(created);
    toastRoot = created;
    return created;
  }

  function ensureAmountModalRoot(): HTMLDivElement {
    if (amountModalRoot && document.body.contains(amountModalRoot)) {
      return amountModalRoot;
    }
    const existing = document.getElementById("amount-modal-root");
    if (existing instanceof HTMLDivElement) {
      amountModalRoot = existing;
      return existing;
    }
    const created = document.createElement("div");
    created.id = "amount-modal-root";
    document.body.appendChild(created);
    amountModalRoot = created;
    return created;
  }

  function ensureWeeklyShoppingModalRoot(): HTMLDivElement {
    if (
      weeklyShoppingModalRoot &&
      document.body.contains(weeklyShoppingModalRoot)
    ) {
      return weeklyShoppingModalRoot;
    }
    const existing = document.getElementById("weekly-shopping-modal-root");
    if (existing instanceof HTMLDivElement) {
      weeklyShoppingModalRoot = existing;
      return existing;
    }
    const created = document.createElement("div");
    created.id = "weekly-shopping-modal-root";
    document.body.appendChild(created);
    weeklyShoppingModalRoot = created;
    return created;
  }

  function closeAmountModal(): void {
    if (!amountModalRoot) {
      amountModalTarget = null;
      return;
    }
    amountModalRoot.innerHTML = "";
    amountModalTarget = null;
  }

  function closeWeeklyShoppingModal(): void {
    if (!weeklyShoppingModalRoot) {
      return;
    }
    weeklyShoppingModalRoot.innerHTML = "";
  }

  function countRemainingWeekdaysInMonth(
    year: number,
    month: MonthNumber,
    weekday: WeekdayNumber,
  ): { occurrences: number; remainingDays: number } {
    const now = new Date();
    const nowYear = now.getFullYear();
    const nowMonth = now.getMonth() + 1;
    const nowDay = now.getDate();
    const daysInMonth = new Date(year, month, 0).getDate();

    if (year < nowYear || (year === nowYear && month < nowMonth)) {
      return { occurrences: 0, remainingDays: 0 };
    }

    const startDay =
      year === nowYear && month === nowMonth
        ? Math.min(nowDay, daysInMonth)
        : 1;
    const remainingDays = Math.max(0, daysInMonth - startDay + 1);

    let occurrences = 0;
    for (let day = startDay; day <= daysInMonth; day += 1) {
      const candidate = new Date(year, month - 1, day);
      if (candidate.getDay() === weekday) {
        occurrences += 1;
      }
    }

    return { occurrences, remainingDays };
  }

  async function updateWeeklyShoppingPlan(
    weekday: WeekdayNumber,
    estimateCents: number,
  ): Promise<void> {
    const month = getSelectedMonthBook();
    if (!month) {
      return;
    }

    month.weeklyShoppingWeekday = weekday;
    month.weeklyShoppingEstimateCents = Math.max(0, estimateCents);

    await persistSelectedYear(
      `Wocheneinkauf geplant: ${WEEKDAY_OPTIONS.find((option) => option.value === weekday)?.label ?? "Wochentag"} mit ${centsToEuro(month.weeklyShoppingEstimateCents)} €`,
    );
    render();
  }

  function openWeeklyShoppingPlanModal(): void {
    const month = getSelectedMonthBook();
    const selectedYear = getSelectedYearBook();
    if (!month || !selectedYear) {
      return;
    }

    const container = ensureWeeklyShoppingModalRoot();
    closeWeeklyShoppingModal();

    const currentWeekday: WeekdayNumber =
      month.weeklyShoppingWeekday === null ||
      month.weeklyShoppingWeekday === undefined
        ? 1
        : (month.weeklyShoppingWeekday as WeekdayNumber);
    const currentEstimateCents = month.weeklyShoppingEstimateCents ?? 0;
    const selectedYearNumber = selectedYear.year;
    const selectedMonthNumber = month.month;
    const selectedMonthBook = getMonthBook(
      selectedYearNumber,
      selectedMonthNumber,
    );
    const selectedMonthSummary = selectedMonthBook
      ? summarizeMonth(selectedMonthBook)
      : {
          foodCents: 0,
          goingOutCents: 0,
          fixedCents: 0,
          variableCents: 0,
          miscCents: 0,
          totalCents: 0,
        };
    const selectedMonthFoodBudgetCents = selectedMonthBook
      ? (selectedMonthBook.foodBudgetCents ?? 0)
      : 0;
    const selectedMonthFoodActualCents = selectedMonthSummary.foodCents;
    const selectedMonthBudgetRemainingCents =
      selectedMonthFoodBudgetCents - selectedMonthFoodActualCents;

    container.innerHTML = `
      <div class="weekly-shopping-modal-backdrop" role="dialog" aria-modal="true" aria-label="Wocheneinkauf planen">
        <div class="weekly-shopping-modal card">
          <h3>Wocheneinkauf planen</h3>
          <div class="weekly-shopping-modal-body">
            <div class="inline">
              <label>
                Wochentag
                <select id="weekly-shopping-weekday">
                  ${WEEKDAY_OPTIONS.map(
                    (option) =>
                      `<option value="${option.value}" ${option.value === currentWeekday ? "selected" : ""}>${option.label}</option>`,
                  ).join("")}
                </select>
              </label>
              <label>
                Geschätzter Betrag pro Einkauf (€)
                <input class="amount-input" id="weekly-shopping-estimate" type="number" min="0" step="0.01" value="${centsToEuroInput(currentEstimateCents)}" />
              </label>
            </div>

            <div class="weekly-shopping-eval" id="weekly-shopping-eval">
              <div class="column-overview-row"><span>Verbleibende Wocheneinkäufe</span><strong id="weekly-shopping-occurrences">0</strong></div>
              <div class="column-overview-row"><span>Summe Wocheneinkäufe</span><strong id="weekly-shopping-total">0,00 €</strong></div>
              <div class="column-overview-row"><span>Restbudget aktuell (ausgewählter Monat, Essen/Trinken)</span><strong id="weekly-shopping-rest-before">0,00 €</strong></div>
              <div class="column-overview-row"><span>Restbudget nach Abzug</span><strong id="weekly-shopping-rest-after">0,00 €</strong></div>
              <div class="column-overview-row"><span>Verbleibende Tage im Monat</span><strong id="weekly-shopping-days-left">0</strong></div>
              <div class="column-overview-row"><span>Verfügbar pro Tag (Restmonat)</span><strong id="weekly-shopping-per-day">0,00 €</strong></div>
            </div>

            <div class="amount-modal-actions">
              <button class="btn btn-quiet" id="weekly-shopping-cancel" type="button">Schließen</button>
              <button class="btn btn-primary" id="weekly-shopping-save" type="button">Übernehmen</button>
            </div>
          </div>
        </div>
      </div>
    `;

    const backdrop = container.querySelector<HTMLDivElement>(
      ".weekly-shopping-modal-backdrop",
    );
    const weekdayInput = container.querySelector<HTMLSelectElement>(
      "#weekly-shopping-weekday",
    );
    const estimateInput = container.querySelector<HTMLInputElement>(
      "#weekly-shopping-estimate",
    );
    const occurrencesEl = container.querySelector<HTMLElement>(
      "#weekly-shopping-occurrences",
    );
    const totalEl = container.querySelector<HTMLElement>(
      "#weekly-shopping-total",
    );
    const restBeforeEl = container.querySelector<HTMLElement>(
      "#weekly-shopping-rest-before",
    );
    const restAfterEl = container.querySelector<HTMLElement>(
      "#weekly-shopping-rest-after",
    );
    const daysLeftEl = container.querySelector<HTMLElement>(
      "#weekly-shopping-days-left",
    );
    const perDayEl = container.querySelector<HTMLElement>(
      "#weekly-shopping-per-day",
    );
    const cancelButton = container.querySelector<HTMLButtonElement>(
      "#weekly-shopping-cancel",
    );
    const saveButton = container.querySelector<HTMLButtonElement>(
      "#weekly-shopping-save",
    );

    function readWeekday(): WeekdayNumber {
      const parsed = Number.parseInt(weekdayInput?.value ?? "1", 10);
      if (Number.isInteger(parsed) && parsed >= 0 && parsed <= 6) {
        return parsed as WeekdayNumber;
      }
      return 1;
    }

    function readEstimateCents(): number {
      return Math.max(0, euroToCents(estimateInput?.value ?? "0"));
    }

    function refreshPreview(): void {
      const weekday = readWeekday();
      const estimateCents = readEstimateCents();
      const { occurrences, remainingDays } = countRemainingWeekdaysInMonth(
        selectedYearNumber,
        selectedMonthNumber,
        weekday,
      );
      const totalWeeklyShoppingCents = occurrences * estimateCents;
      const restAfterWeeklyShoppingCents =
        selectedMonthBudgetRemainingCents - totalWeeklyShoppingCents;
      const perDayCents =
        remainingDays > 0
          ? Math.trunc(restAfterWeeklyShoppingCents / remainingDays)
          : 0;

      if (occurrencesEl) {
        occurrencesEl.textContent = `${occurrences}`;
      }
      if (totalEl) {
        totalEl.textContent = `${centsToEuro(totalWeeklyShoppingCents)} €`;
      }
      if (restBeforeEl) {
        restBeforeEl.textContent = `${centsToEuro(selectedMonthBudgetRemainingCents)} €`;
      }
      if (restAfterEl) {
        restAfterEl.textContent = `${centsToEuro(restAfterWeeklyShoppingCents)} €`;
        restAfterEl.className =
          restAfterWeeklyShoppingCents < 0
            ? "danger"
            : restAfterWeeklyShoppingCents > 0
              ? "budget-under"
              : "";
      }
      if (daysLeftEl) {
        daysLeftEl.textContent = `${remainingDays}`;
      }
      if (perDayEl) {
        perDayEl.textContent = `${centsToEuro(perDayCents)} €`;
        perDayEl.className =
          perDayCents < 0 ? "danger" : perDayCents > 0 ? "budget-under" : "";
      }
    }

    async function saveAndClose(): Promise<void> {
      await updateWeeklyShoppingPlan(readWeekday(), readEstimateCents());
      closeWeeklyShoppingModal();
    }

    cancelButton?.addEventListener("click", () => {
      closeWeeklyShoppingModal();
    });
    saveButton?.addEventListener("click", async () => {
      await saveAndClose();
    });

    weekdayInput?.addEventListener("change", () => {
      refreshPreview();
    });
    estimateInput?.addEventListener("input", () => {
      refreshPreview();
    });
    estimateInput?.addEventListener("keydown", async (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeWeeklyShoppingModal();
        return;
      }
      if (event.key === "Enter") {
        event.preventDefault();
        await saveAndClose();
      }
    });

    backdrop?.addEventListener("click", (event) => {
      if (event.target === backdrop) {
        closeWeeklyShoppingModal();
      }
    });

    window.setTimeout(() => {
      estimateInput?.focus();
      estimateInput?.select();
      refreshPreview();
    }, 0);
  }

  function clampCentsToInputBounds(
    cents: number,
    target: HTMLInputElement,
  ): number {
    let result = cents;
    const minText = target.min;
    if (minText) {
      const minNumber = Number.parseFloat(minText);
      if (!Number.isNaN(minNumber)) {
        const minCents = Math.round(minNumber * 100);
        result = Math.max(result, minCents);
      }
    }
    const maxText = target.max;
    if (maxText) {
      const maxNumber = Number.parseFloat(maxText);
      if (!Number.isNaN(maxNumber)) {
        const maxCents = Math.round(maxNumber * 100);
        result = Math.min(result, maxCents);
      }
    }
    return result;
  }

  function openAmountDeltaModal(targetInput: HTMLInputElement): void {
    if (targetInput.disabled) {
      return;
    }

    const container = ensureAmountModalRoot();
    closeAmountModal();
    amountModalTarget = targetInput;

    const existingCents = euroToCents(targetInput.value || "0");
    const title = "Betrag anpassen";

    container.innerHTML = `
      <div class="amount-modal-backdrop" role="dialog" aria-modal="true" aria-label="${title}">
        <div class="amount-modal card">
          <h3>${title}</h3>
          <div class="amount-modal-body">
            <div class="amount-modal-meta">
              <div>Aktuell: <strong>${centsToEuro(existingCents)} €</strong></div>
              <div>Neu (verrechnen): <strong id="amount-modal-next-delta">${centsToEuro(existingCents)} €</strong></div>
              <div>Neu (korrigieren): <strong id="amount-modal-next-overwrite">${centsToEuro(existingCents)} €</strong></div>
            </div>
            <label>
              Betrag (€)
              <input id="amount-modal-delta" type="number" step="0.01" value="0.00" />
            </label>
            <div class="amount-modal-actions">
              <button class="btn btn-quiet" id="amount-modal-cancel" type="button">Abbrechen</button>
              <button class="btn" id="amount-modal-overwrite" type="button">Korrigieren</button>
              <button class="btn btn-primary" id="amount-modal-apply" type="button">Verrechnen</button>
            </div>
          </div>
        </div>
      </div>
    `;

    const backdrop = container.querySelector<HTMLDivElement>(
      ".amount-modal-backdrop",
    );
    const deltaInput = container.querySelector<HTMLInputElement>(
      "#amount-modal-delta",
    );
    const nextDeltaLabel = container.querySelector<HTMLElement>(
      "#amount-modal-next-delta",
    );
    const nextOverwriteLabel = container.querySelector<HTMLElement>(
      "#amount-modal-next-overwrite",
    );
    const cancelButton = container.querySelector<HTMLButtonElement>(
      "#amount-modal-cancel",
    );
    const overwriteButton = container.querySelector<HTMLButtonElement>(
      "#amount-modal-overwrite",
    );
    const applyButton = container.querySelector<HTMLButtonElement>(
      "#amount-modal-apply",
    );

    function computeNextDeltaCents(): number {
      const deltaCents = euroToCents(deltaInput?.value ?? "0");
      return clampCentsToInputBounds(existingCents + deltaCents, targetInput);
    }

    function computeOverwriteCents(): number {
      const nextCents = euroToCents(deltaInput?.value ?? "0");
      return clampCentsToInputBounds(nextCents, targetInput);
    }

    function refreshPreview(): void {
      if (nextDeltaLabel) {
        nextDeltaLabel.textContent = `${centsToEuro(computeNextDeltaCents())} €`;
      }
      if (nextOverwriteLabel) {
        nextOverwriteLabel.textContent = `${centsToEuro(computeOverwriteCents())} €`;
      }
    }

    function applyDeltaAndClose(): void {
      const target = amountModalTarget;
      if (!target) {
        closeAmountModal();
        return;
      }
      const nextCents = computeNextDeltaCents();
      closeAmountModal();
      target.value = centsToEuroInput(nextCents);
      target.dispatchEvent(new Event("change", { bubbles: true }));
    }

    function overwriteAndClose(): void {
      const target = amountModalTarget;
      if (!target) {
        closeAmountModal();
        return;
      }
      const nextCents = computeOverwriteCents();
      closeAmountModal();
      target.value = centsToEuroInput(nextCents);
      target.dispatchEvent(new Event("change", { bubbles: true }));
    }

    cancelButton?.addEventListener("click", () => {
      closeAmountModal();
    });

    overwriteButton?.addEventListener("click", () => {
      overwriteAndClose();
    });

    applyButton?.addEventListener("click", () => {
      applyDeltaAndClose();
    });

    deltaInput?.addEventListener("input", () => {
      refreshPreview();
    });

    deltaInput?.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeAmountModal();
        return;
      }
      if (event.key === "Enter") {
        event.preventDefault();
        applyDeltaAndClose();
      }
    });

    backdrop?.addEventListener("click", (event) => {
      if (event.target === backdrop) {
        closeAmountModal();
      }
    });

    window.setTimeout(() => {
      deltaInput?.focus();
      deltaInput?.select();
      refreshPreview();
    }, 0);
  }

  function showToast(
    message: string,
    variant: "success" | "error" = "success",
  ): void {
    const container = ensureToastRoot();
    const toast = document.createElement("div");
    toast.className = `toast toast-${variant}`;
    toast.textContent = message;
    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add("toast-visible");
    });

    const timeoutMs = variant === "error" ? 5000 : 3000;
    window.setTimeout(() => {
      toast.classList.remove("toast-visible");
      window.setTimeout(() => {
        toast.remove();
      }, 220);
    }, timeoutMs);
  }

  function getCurrentMonthNumber(): number {
    return new Date().getMonth() + 1;
  }

  function getCurrentYearNumber(): number {
    return new Date().getFullYear();
  }

  function getDefaultSelectedYear(years: YearBook[]): number | null {
    const currentYear = getCurrentYearNumber();
    const matchingCurrentYear = years.find((year) => year.year === currentYear);
    if (matchingCurrentYear) {
      return matchingCurrentYear.year;
    }
    return years[0]?.year ?? null;
  }

  function getTodayIsoDate(): string {
    return new Date().toISOString().slice(0, 10);
  }

  function getBackupTimeId(): string {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    return `${hours}${minutes}${seconds}`;
  }

  function escapeHtml(value: string): string {
    return value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function loadTheme(): ThemeName {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored && isThemeName(stored)) {
      return stored;
    }
    return "light";
  }

  function applyTheme(theme: ThemeName): void {
    state.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }

  function loadHasUnexportedChanges(): boolean {
    return localStorage.getItem(BACKUP_DIRTY_STORAGE_KEY) === "1";
  }

  function saveHasUnexportedChanges(value: boolean): void {
    localStorage.setItem(BACKUP_DIRTY_STORAGE_KEY, value ? "1" : "0");
  }

  function loadUnexportedChangeLog(): ChangeLogEntry[] {
    const raw = localStorage.getItem(UNEXPORTED_CHANGE_LOG_STORAGE_KEY);
    if (!raw) {
      return [];
    }

    try {
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) {
        return [];
      }
      return parsed
        .filter((entry): entry is ChangeLogEntry => {
          if (!entry || typeof entry !== "object") {
            return false;
          }
          const candidate = entry as Partial<ChangeLogEntry>;
          return (
            typeof candidate.id === "string" &&
            typeof candidate.timestampIso === "string" &&
            typeof candidate.message === "string"
          );
        })
        .slice(-200);
    } catch {
      return [];
    }
  }

  function saveUnexportedChangeLog(entries: ChangeLogEntry[]): void {
    localStorage.setItem(
      UNEXPORTED_CHANGE_LOG_STORAGE_KEY,
      JSON.stringify(entries.slice(-200)),
    );
  }

  function loadLastBackupFileName(): string | null {
    const stored = localStorage.getItem(LAST_BACKUP_FILENAME_STORAGE_KEY);
    if (!stored) {
      return null;
    }
    const trimmed = stored.trim();
    return trimmed ? trimmed : null;
  }

  function loadRecurringBudgetDefaults(): RecurringBudgetDefaults {
    const fallback: RecurringBudgetDefaults = {
      foodBudgetCents: null,
      goingOutBudgetCents: null,
      fixedBudgetCents: null,
      variableBudgetCents: null,
      miscBudgetCents: null,
    };

    const raw = localStorage.getItem(RECURRING_BUDGET_DEFAULTS_STORAGE_KEY);
    if (!raw) {
      return fallback;
    }

    try {
      const parsed = JSON.parse(raw) as Partial<RecurringBudgetDefaults>;
      const toCentsOrNull = (value: unknown): number | null =>
        typeof value === "number" && Number.isFinite(value) ? value : null;

      return {
        foodBudgetCents: toCentsOrNull(parsed.foodBudgetCents),
        goingOutBudgetCents: toCentsOrNull(parsed.goingOutBudgetCents),
        fixedBudgetCents: toCentsOrNull(parsed.fixedBudgetCents),
        variableBudgetCents: toCentsOrNull(parsed.variableBudgetCents),
        miscBudgetCents: toCentsOrNull(parsed.miscBudgetCents),
      };
    } catch {
      return fallback;
    }
  }

  function saveRecurringBudgetDefaults(
    defaults: RecurringBudgetDefaults,
  ): void {
    localStorage.setItem(
      RECURRING_BUDGET_DEFAULTS_STORAGE_KEY,
      JSON.stringify(defaults),
    );
  }

  function applyRecurringBudgetDefaultsToYear(year: YearBook): void {
    year.months.forEach((month) => {
      const { recurringBudgetDefaults } = state;
      if (typeof recurringBudgetDefaults.foodBudgetCents === "number") {
        month.foodBudgetCents = recurringBudgetDefaults.foodBudgetCents;
      }
      if (typeof recurringBudgetDefaults.goingOutBudgetCents === "number") {
        month.goingOutBudgetCents = recurringBudgetDefaults.goingOutBudgetCents;
      }
      if (typeof recurringBudgetDefaults.fixedBudgetCents === "number") {
        month.fixedBudgetCents = recurringBudgetDefaults.fixedBudgetCents;
      }
      if (typeof recurringBudgetDefaults.variableBudgetCents === "number") {
        month.variableBudgetCents = recurringBudgetDefaults.variableBudgetCents;
      }
      if (typeof recurringBudgetDefaults.miscBudgetCents === "number") {
        month.miscBudgetCents = recurringBudgetDefaults.miscBudgetCents;
      }
    });
  }

  function saveLastBackupFileName(fileName: string): void {
    const trimmed = fileName.trim();
    if (!trimmed) {
      return;
    }
    localStorage.setItem(LAST_BACKUP_FILENAME_STORAGE_KEY, trimmed);
  }

  async function init(): Promise<void> {
    ensureToastRoot();
    applyTheme(loadTheme());
    state.hasUnexportedChanges = loadHasUnexportedChanges();
    state.unexportedChangeLog = loadUnexportedChangeLog();
    state.persistentAuditLog = await listAuditLogEntries();
    state.lastBackupFileName = loadLastBackupFileName();
    state.recurringBudgetDefaults = loadRecurringBudgetDefaults();
    bindGlobalModalKeysOnce();
    bindScrollUpVisibilityOnce();
    const [years, fixed, annualVariableFixed] = await Promise.all([
      listYears(),
      getFixedTemplateState(),
      getAnnualVariableFixedTemplateState(),
    ]);
    state.years = years;
    state.annualVariableFixedTemplates = annualVariableFixed.templates;
    state.annualVariableFixedTemplateVersion = annualVariableFixed.version;
    normalizeBudgetsForYears(state.years);
    normalizeAnnualVariableFixedCostsForYears(state.years);
    state.fixedTemplates = fixed.templates;
    state.fixedTemplateVersion = fixed.version;
    await persistNormalizedYears(state.years);
    if (years.length > 0) {
      state.selectedYear = getDefaultSelectedYear(years);
      state.selectedMonth = getCurrentMonthNumber();
    }
    render();
  }

  function normalizeBudgetsForYears(years: YearBook[]): void {
    const normalizeIncomeSource = (value: unknown): IncomeSource | undefined =>
      value === "balance" || value === "fresh" || value === "salary"
        ? value
        : undefined;

    years.forEach((year) => {
      year.months.forEach((month) => {
        if (
          month.weeklyShoppingWeekday !== null &&
          month.weeklyShoppingWeekday !== undefined
        ) {
          const weekday = Number(month.weeklyShoppingWeekday);
          if (Number.isInteger(weekday) && weekday >= 0 && weekday <= 6) {
            month.weeklyShoppingWeekday = weekday;
          } else {
            month.weeklyShoppingWeekday = null;
          }
        } else {
          month.weeklyShoppingWeekday = null;
        }
        if (typeof month.weeklyShoppingEstimateCents !== "number") {
          month.weeklyShoppingEstimateCents = 0;
        }
        if (typeof month.foodBudgetCents !== "number") {
          month.foodBudgetCents = 0;
        }
        if (typeof month.goingOutBudgetCents !== "number") {
          month.goingOutBudgetCents = 0;
        }
        if (!Array.isArray(month.incomes)) {
          month.incomes = [];
        } else {
          month.incomes = month.incomes.map((entry) => {
            const normalizedIncomeSource = normalizeIncomeSource(
              entry.incomeSource,
            );
            if (!normalizedIncomeSource) {
              const { incomeSource: _unusedIncomeSource, ...rest } = entry;
              return rest;
            }
            return {
              ...entry,
              incomeSource: normalizedIncomeSource,
            };
          });
        }
        if (typeof month.fixedBudgetCents !== "number") {
          month.fixedBudgetCents = month.fixedCosts.reduce(
            (sum, entry) => sum + entry.plannedCents,
            0,
          );
        }
        if (typeof month.variableBudgetCents !== "number") {
          month.variableBudgetCents = month.variablePositions.reduce(
            (sum, position) => sum + position.budgetCents,
            0,
          );
        }
        if (!Array.isArray(month.variablePositions)) {
          month.variablePositions = [];
        }
        if (typeof month.miscBudgetCents !== "number") {
          month.miscBudgetCents = 0;
        }
      });
    });
  }

  function incomeSourceLabel(source: IncomeSource | undefined): string {
    if (source === "balance") {
      return "Bestandsguthaben";
    }
    if (source === "salary") {
      return "Gehalt";
    }
    if (source === "fresh") {
      return "Neues Einkommen";
    }
    return "Nicht zugeordnet";
  }

  function isRecordedIncomeSource(source: IncomeSource | undefined): boolean {
    return source === "fresh" || source === "salary" || !source;
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

  function getMonthBook(
    yearNumber: number,
    monthNumber: number,
  ): MonthBook | undefined {
    const year = state.years.find((item) => item.year === yearNumber);
    if (!year) {
      return undefined;
    }
    return year.months.find((item) => item.month === monthNumber);
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

  function summarizePlannedBudgetsCents(month: MonthBook): number {
    const foodBudgetCents = month.foodBudgetCents ?? 0;
    const goingOutBudgetCents = month.goingOutBudgetCents ?? 0;
    const fixedBudgetCents =
      month.fixedBudgetCents ??
      month.fixedCosts.reduce((sum, entry) => sum + entry.plannedCents, 0);
    const variableBudgetCents = month.variablePositions.reduce(
      (sum, position) => sum + position.budgetCents,
      0,
    );
    const miscBudgetCents = month.miscBudgetCents ?? 0;

    return (
      foodBudgetCents +
      goingOutBudgetCents +
      fixedBudgetCents +
      (month.variableBudgetCents ?? variableBudgetCents) +
      miscBudgetCents
    );
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

  function summarizeYearBudgetByCategory(year: YearBook): {
    foodCents: number;
    goingOutCents: number;
    fixedCents: number;
    variableCents: number;
    miscCents: number;
    totalCents: number;
  } {
    const foodCents = year.months.reduce(
      (sum, monthItem) => sum + (monthItem.foodBudgetCents ?? 0),
      0,
    );
    const goingOutCents = year.months.reduce(
      (sum, monthItem) => sum + (monthItem.goingOutBudgetCents ?? 0),
      0,
    );
    const fixedCents = year.months.reduce(
      (sum, monthItem) =>
        sum +
        (monthItem.fixedBudgetCents ??
          monthItem.fixedCosts.reduce(
            (fixedSum, entry) => fixedSum + entry.plannedCents,
            0,
          )),
      0,
    );
    const variableCents = year.months.reduce(
      (sum, monthItem) =>
        sum +
        (monthItem.variableBudgetCents ??
          monthItem.variablePositions.reduce(
            (positionSum, position) => positionSum + position.budgetCents,
            0,
          )),
      0,
    );
    const miscCents = year.months.reduce(
      (sum, monthItem) => sum + (monthItem.miscBudgetCents ?? 0),
      0,
    );

    return {
      foodCents,
      goingOutCents,
      fixedCents,
      variableCents,
      miscCents,
      totalCents:
        foodCents + goingOutCents + fixedCents + variableCents + miscCents,
    };
  }

  function summarizeRecordedIncomeCents(year: YearBook): number {
    return year.months.reduce(
      (sum, monthItem) =>
        sum +
        monthItem.incomes.reduce(
          (monthSum, entry) =>
            monthSum +
            (isRecordedIncomeSource(entry.incomeSource)
              ? entry.amountCents
              : 0),
          0,
        ),
      0,
    );
  }

  function getYearOpeningCarryoverCents(
    year: YearBook,
    incomeFlowByMonth: Map<number, IncomeFlowSummary>,
  ): number {
    const firstMonth = year.months
      .slice()
      .sort((left, right) => left.month - right.month)[0];
    if (!firstMonth) {
      return 0;
    }
    return (
      incomeFlowByMonth.get(monthKey(year.year, firstMonth.month))
        ?.carriedFromPreviousCents ?? 0
    );
  }

  function summarizeIncomeFlowByMonth(): Map<number, IncomeFlowSummary> {
    const orderedMonths = state.years
      .slice()
      .sort((left, right) => left.year - right.year)
      .flatMap((yearItem) =>
        yearItem.months
          .slice()
          .sort((left, right) => left.month - right.month)
          .map((monthItem) => ({ year: yearItem.year, month: monthItem })),
      );

    const summaryMap = new Map<number, IncomeFlowSummary>();
    let carryoverCents = 0;

    orderedMonths.forEach(({ year, month }, index) => {
      const override = month.carryoverOverrideCents;
      const hasOverride = typeof override === "number";
      const carriedFromPreviousCents = hasOverride ? override : carryoverCents;
      const hasPreviousMonth = index > 0 || hasOverride;

      const recordedIncomeCents = month.incomes.reduce(
        (sum, entry) =>
          sum +
          (isRecordedIncomeSource(entry.incomeSource) ? entry.amountCents : 0),
        0,
      );
      const plannedBudgetCents = summarizePlannedBudgetsCents(month);
      const effectiveIncomeCents =
        recordedIncomeCents + carriedFromPreviousCents;
      const netCents = effectiveIncomeCents - plannedBudgetCents;

      summaryMap.set(monthKey(year, month.month), {
        hasPreviousMonth,
        carriedFromPreviousCents,
        recordedIncomeCents,
        effectiveIncomeCents,
        plannedBudgetCents,
        netCents,
      });

      carryoverCents = netCents;
    });

    return summaryMap;
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

  function formatSignedEuroCents(cents: number): string {
    const sign = cents > 0 ? "+" : "";
    return `${sign}${centsToEuro(cents)}`;
  }

  function renderPlannedWithDiff(
    budgetCents: number,
    actualCents: number,
  ): string {
    const diffCents = budgetCents - actualCents;
    const statusClass = budgetStatusClass(actualCents, budgetCents);
    return `${centsToEuro(budgetCents)} <span class="eval-diff ${statusClass}">(Δ ${formatSignedEuroCents(diffCents)})</span>`;
  }

  function renderColumnOverview(
    budgetCents: number | null,
    actualCents: number,
  ): string {
    const hasBudget = budgetCents !== null;
    const diffCents = hasBudget ? budgetCents - actualCents : null;
    const statusClass = hasBudget
      ? budgetStatusClass(actualCents, budgetCents)
      : "";

    return `<div class="column-overview">
      <div class="column-overview-row">
        <span>Budget</span>
        <strong>${hasBudget ? `${centsToEuro(budgetCents)} €` : "-"}</strong>
      </div>
      <div class="column-overview-row">
        <span>Ausgegeben</span>
        <strong>${centsToEuro(actualCents)} €</strong>
      </div>
      <div class="column-overview-row ${statusClass}">
        <span>Diff</span>
        <strong>${diffCents === null ? "-" : `${centsToEuro(diffCents)} €`}</strong>
      </div>
    </div>`;
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
    applyRecurringBudgetDefaultsToYear(created);
    applyAnnualVariableFixedTemplatesToYear(created);
    await saveYear(created);
    state.years = await listYears();
    markDataChanged(`Jahr ${yearNumber} wurde angelegt`);
    state.selectedYear = yearNumber;
    state.selectedMonth = getCurrentMonthNumber();
    showToast(`Jahr ${yearNumber} wurde angelegt.`);
    render();
  }

  function markDataChanged(reason = "Änderung an den Daten"): void {
    state.hasUnexportedChanges = true;
    saveHasUnexportedChanges(true);
    const selectedScope = state.selectedYear
      ? `${state.selectedYear}-${String(state.selectedMonth).padStart(2, "0")}`
      : "ohne Zeitraum";
    const timestampIso = new Date().toISOString();
    const message = `${reason} (${selectedScope})`;
    const nextEntry: ChangeLogEntry = {
      id: createId("change"),
      timestampIso,
      message,
    };
    state.unexportedChangeLog = [...state.unexportedChangeLog, nextEntry].slice(
      -200,
    );
    saveUnexportedChangeLog(state.unexportedChangeLog);

    const nextAuditEntry: AuditLogEntry = {
      id: createId("audit"),
      timestampIso,
      message,
    };
    state.persistentAuditLog = [...state.persistentAuditLog, nextAuditEntry]
      .slice()
      .sort((left, right) =>
        left.timestampIso.localeCompare(right.timestampIso),
      );
    void appendAuditLogEntry(nextAuditEntry).catch((error) => {
      console.error("Audit-Log konnte nicht gespeichert werden", error);
      showToast("Chronik-Eintrag konnte nicht gespeichert werden.", "error");
    });
  }

  function rememberBackupFile(fileName: string): void {
    const trimmed = fileName.trim();
    if (!trimmed) {
      return;
    }
    state.lastBackupFileName = trimmed;
    saveLastBackupFileName(trimmed);
  }

  function markBackupCompleted(fileName: string): void {
    state.hasUnexportedChanges = false;
    saveHasUnexportedChanges(false);
    state.unexportedChangeLog = [];
    saveUnexportedChangeLog([]);
    state.showUnexportedChangeLogModal = false;
    rememberBackupFile(fileName);
  }

  async function persistSelectedYear(reason?: string): Promise<void> {
    const year = getSelectedYearBook();
    if (!year) {
      return;
    }
    await saveYear(year);
    state.years = await listYears();
    markDataChanged(reason);
  }

  async function persistAllYears(reason?: string): Promise<void> {
    for (const yearItem of state.years) {
      await saveYear(yearItem);
    }
    state.years = await listYears();
    markDataChanged(reason);
  }

  function monthKey(year: number, month: number): number {
    return year * 100 + month;
  }

  function parseDueDateParts(
    dueDateIso: string,
  ): { year: number; month: number } | null {
    const match = dueDateIso.match(/^(\d{4})-(0[1-9]|1[0-2])-\d{2}$/);
    if (!match) {
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

  function applyAnnualVariableFixedTemplateToYear(
    template: AnnualVariableFixedCostTemplate,
    yearItem: YearBook,
  ): void {
    const dueDate = parseDueDateParts(template.dueDateIso);
    if (!dueDate) {
      return;
    }
    if (yearItem.year < dueDate.year) {
      return;
    }

    const targetMonth = yearItem.months.find(
      (monthItem) => monthItem.month === dueDate.month,
    );
    if (!targetMonth) {
      return;
    }

    const alreadyExists = targetMonth.variablePositions.some(
      (entry) => entry.autoAnnualTemplateId === template.id,
    );
    if (alreadyExists) {
      return;
    }

    targetMonth.variablePositions = [
      {
        id: createId("varpos"),
        name: template.name,
        budgetCents: template.plannedCents,
        actualCents: 0,
        autoAnnualTemplateId: template.id,
      },
      ...targetMonth.variablePositions,
    ];
    recalculateVariableBudget(targetMonth);
  }

  function applyAnnualVariableFixedTemplatesToYear(yearItem: YearBook): void {
    state.annualVariableFixedTemplates.forEach((template) => {
      applyAnnualVariableFixedTemplateToYear(template, yearItem);
    });
  }

  function normalizeAnnualVariableFixedCostsForYears(years: YearBook[]): void {
    const validTemplateIds = new Set(
      state.annualVariableFixedTemplates.map((template) => template.id),
    );

    years.forEach((yearItem) => {
      yearItem.months.forEach((monthItem) => {
        const hasAutoAnnualEntriesInVariable = monthItem.variablePositions.some(
          (entry) => typeof entry.autoAnnualTemplateId === "string",
        );

        const hasAutoAnnualEntriesInFixed = monthItem.fixedCosts.some(
          (entry) => typeof entry.autoAnnualTemplateId === "string",
        );

        if (hasAutoAnnualEntriesInVariable) {
          monthItem.variablePositions = monthItem.variablePositions.filter(
            (entry) => {
              if (!entry.autoAnnualTemplateId) {
                return true;
              }
              return validTemplateIds.has(entry.autoAnnualTemplateId);
            },
          );
          recalculateVariableBudget(monthItem);
        }

        if (hasAutoAnnualEntriesInFixed) {
          monthItem.fixedCosts = monthItem.fixedCosts.filter(
            (entry) => !entry.autoAnnualTemplateId,
          );
          recalculateFixedBudget(monthItem);
        }
      });

      applyAnnualVariableFixedTemplatesToYear(yearItem);
    });
  }

  function recalculateFixedBudget(month: MonthBook): void {
    month.fixedBudgetCents = month.fixedCosts.reduce(
      (sum, entry) => sum + entry.plannedCents,
      0,
    );
  }

  function recalculateVariableBudget(month: MonthBook): void {
    month.variableBudgetCents = month.variablePositions.reduce(
      (sum, position) => sum + position.budgetCents,
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
            actualCents: 0,
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

    const isUpdate = Boolean(state.editingFixedTemplateId);
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
    await persistAllYears(
      isUpdate
        ? `Fixkosten-Vorlage aktualisiert: ${cleanName} (${centsToEuro(plannedCents)} €)`
        : `Fixkosten-Vorlage hinzugefügt: ${cleanName} (${centsToEuro(plannedCents)} €)`,
    );
    showToast(
      isUpdate
        ? "Fixkosten-Vorlage wurde aktualisiert."
        : "Fixkosten-Vorlage wurde hinzugefügt.",
    );
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

    const removedTemplate = state.fixedTemplates.find(
      (template) => template.id === templateId,
    );
    state.fixedTemplates = state.fixedTemplates.filter(
      (template) => template.id !== templateId,
    );
    removeFixedTemplateFromFutureMonths(templateId, effective);
    if (state.editingFixedTemplateId === templateId) {
      state.editingFixedTemplateId = null;
    }
    state.fixedTemplateVersion = await saveFixedTemplates(state.fixedTemplates);
    await persistAllYears(
      `Fixkosten-Vorlage gelöscht: ${removedTemplate?.name ?? "Unbekannt"}`,
    );
    showToast("Fixkosten-Vorlage wurde gelöscht.");
    render();
  }

  async function addAnnualVariableFixedTemplate(
    name: string,
    dueDateIso: string,
    plannedCents: number,
  ): Promise<void> {
    const cleanName = name.trim();
    if (!cleanName) {
      alert("Bitte Namen für die Variable Fixkosten-Position eingeben.");
      return;
    }

    const dueDate = parseDueDateParts(dueDateIso);
    if (!dueDate) {
      alert("Bitte ein gültiges Datum auswählen.");
      return;
    }

    if (plannedCents <= 0) {
      alert("Bitte einen positiven Betrag eingeben.");
      return;
    }

    const template: AnnualVariableFixedCostTemplate = {
      id: createId("annualtpl"),
      name: cleanName,
      plannedCents,
      dueDateIso,
    };

    state.annualVariableFixedTemplates = [
      ...state.annualVariableFixedTemplates,
      template,
    ];

    state.years.forEach((yearItem) => {
      applyAnnualVariableFixedTemplateToYear(template, yearItem);
    });

    state.annualVariableFixedTemplateVersion =
      await saveAnnualVariableFixedTemplates(
        state.annualVariableFixedTemplates,
      );
    await persistAllYears(
      `Variable Fixkosten-Vorlage hinzugefügt: ${cleanName} (${centsToEuro(plannedCents)} €, jährlich in ${monthLabel(dueDate.month)})`,
    );
    showToast("Variable Fixkosten-Vorlage wurde hinzugefügt.");
    render();
  }

  async function removeAnnualVariableFixedTemplate(
    templateId: string,
  ): Promise<void> {
    const shouldDelete = confirm(
      "Variable Fixkosten-Vorlage wirklich löschen?",
    );
    if (!shouldDelete) {
      return;
    }

    const targetTemplate = state.annualVariableFixedTemplates.find(
      (template) => template.id === templateId,
    );
    if (!targetTemplate) {
      return;
    }

    state.annualVariableFixedTemplates =
      state.annualVariableFixedTemplates.filter(
        (template) => template.id !== templateId,
      );

    state.years.forEach((yearItem) => {
      yearItem.months.forEach((monthItem) => {
        monthItem.variablePositions = monthItem.variablePositions.filter(
          (entry) => entry.autoAnnualTemplateId !== templateId,
        );
        recalculateVariableBudget(monthItem);

        monthItem.fixedCosts = monthItem.fixedCosts.filter(
          (entry) => entry.autoAnnualTemplateId !== templateId,
        );
        recalculateFixedBudget(monthItem);
      });
    });

    state.annualVariableFixedTemplateVersion =
      await saveAnnualVariableFixedTemplates(
        state.annualVariableFixedTemplates,
      );
    await persistAllYears(
      `Variable Fixkosten-Vorlage gelöscht: ${targetTemplate.name}`,
    );
    showToast("Variable Fixkosten-Vorlage wurde gelöscht.");
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
    await persistSelectedYear(
      `${key === "foodCents" ? "Essen" : "Ausgehen"} am ${isoDate} angepasst auf ${centsToEuro(amountCents)} €`,
    );
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
    const targetFixedCost = month.fixedCosts.find(
      (entry) => entry.id === fixedCostId,
    );
    month.fixedCosts = month.fixedCosts.map((entry) =>
      entry.id === fixedCostId ? { ...entry, actualCents: amountCents } : entry,
    );
    await persistSelectedYear(
      `Fixkosten-Ist angepasst: ${targetFixedCost?.name ?? "Unbekannt"} auf ${centsToEuro(amountCents)} €`,
    );
    render();
  }

  async function updateFixedCostPlanned(
    fixedCostId: string,
    plannedCents: number,
  ): Promise<void> {
    const month = getSelectedMonthBook();
    if (!month) {
      return;
    }

    const targetFixedCost = month.fixedCosts.find(
      (entry) => entry.id === fixedCostId,
    );
    if (!targetFixedCost) {
      return;
    }

    month.fixedCosts = month.fixedCosts.map((entry) =>
      entry.id === fixedCostId ? { ...entry, plannedCents } : entry,
    );
    recalculateFixedBudget(month);

    await persistSelectedYear(
      `Fixkosten-Budget angepasst: ${targetFixedCost.name} auf ${centsToEuro(plannedCents)} €`,
    );
    render();
  }

  async function addFixedCost(
    name: string,
    plannedCents: number,
  ): Promise<void> {
    const month = getSelectedMonthBook();
    if (!month) {
      return;
    }

    const cleanName = name.trim();
    if (!cleanName) {
      alert("Bitte Namen für die Fixkosten-Position eingeben.");
      return;
    }

    if (plannedCents <= 0) {
      alert("Bitte einen positiven Betrag eingeben.");
      return;
    }

    const newFixedCost: FixedCostEntry = {
      id: createId("fixed"),
      templateId: createId("fixed-local"),
      name: cleanName,
      plannedCents,
      actualCents: 0,
    };

    month.fixedCosts = [newFixedCost, ...month.fixedCosts];
    recalculateFixedBudget(month);

    await persistSelectedYear(
      `Fixkosten-Position hinzugefügt: ${cleanName} (${centsToEuro(plannedCents)} €)`,
    );
    showToast("Fixkosten-Position wurde hinzugefügt.");
    render();
  }

  async function removeFixedCost(fixedCostId: string): Promise<void> {
    const shouldDelete = confirm("Fixkosten-Position wirklich löschen?");
    if (!shouldDelete) {
      return;
    }

    const month = getSelectedMonthBook();
    if (!month) {
      return;
    }

    const targetFixedCost = month.fixedCosts.find(
      (entry) => entry.id === fixedCostId,
    );
    if (!targetFixedCost) {
      return;
    }

    month.fixedCosts = month.fixedCosts.filter(
      (entry) => entry.id !== fixedCostId,
    );
    recalculateFixedBudget(month);

    await persistSelectedYear(
      `Fixkosten-Position gelöscht: ${targetFixedCost.name}`,
    );
    showToast("Fixkosten-Position wurde gelöscht.");
    render();
  }

  async function updateMonthlyFixedBudget(amountCents: number): Promise<void> {
    await updateMonthlyBudgetWithPrompt(
      "fixedBudgetCents",
      amountCents,
      "Fixkosten",
    );
  }

  async function updateMonthlyFoodBudget(amountCents: number): Promise<void> {
    await updateMonthlyBudgetWithPrompt(
      "foodBudgetCents",
      amountCents,
      "Essen",
    );
  }

  async function updateMonthlyGoingOutBudget(
    amountCents: number,
  ): Promise<void> {
    await updateMonthlyBudgetWithPrompt(
      "goingOutBudgetCents",
      amountCents,
      "Ausgehen",
    );
  }

  async function updateMonthlyMiscBudget(amountCents: number): Promise<void> {
    await updateMonthlyBudgetWithPrompt(
      "miscBudgetCents",
      amountCents,
      "Sonstiges",
    );
  }

  async function updateMonthlyVariableBudget(
    amountCents: number,
  ): Promise<void> {
    await updateMonthlyBudgetWithPrompt(
      "variableBudgetCents",
      amountCents,
      "Variable Kosten",
    );
  }

  async function updateMonthlyBudgetWithPrompt(
    budgetField: BudgetFieldName,
    amountCents: number,
    label: string,
  ): Promise<void> {
    const month = getSelectedMonthBook();
    const selectedYear = state.selectedYear;
    if (!month || !selectedYear) {
      return;
    }

    if (month[budgetField] === amountCents) {
      return;
    }

    month[budgetField] = amountCents;

    const shouldApplyFuture = confirm(
      `Soll das Budget "${label}" auch für zukünftige Monate übernommen werden?`,
    );

    if (shouldApplyFuture) {
      const currentKey = monthKey(selectedYear, state.selectedMonth);
      state.years.forEach((yearItem) => {
        yearItem.months.forEach((monthItem) => {
          if (monthKey(yearItem.year, monthItem.month) <= currentKey) {
            return;
          }
          monthItem[budgetField] = amountCents;
        });
      });

      state.recurringBudgetDefaults[budgetField] = amountCents;
      saveRecurringBudgetDefaults(state.recurringBudgetDefaults);
      await persistAllYears(
        `Budget "${label}" auf ${centsToEuro(amountCents)} € gesetzt (inkl. zukünftiger Monate)`,
      );
      showToast(`Budget "${label}" wurde für zukünftige Monate übernommen.`);
      render();
      return;
    }

    await persistSelectedYear(
      `Budget "${label}" auf ${centsToEuro(amountCents)} € gesetzt`,
    );
    render();
  }

  async function updateMonthlyCarryoverOverride(
    amountCents: number | null,
  ): Promise<void> {
    const month = getSelectedMonthBook();
    if (!month) {
      return;
    }
    if (amountCents === null) {
      month.carryoverOverrideCents = null;
    } else {
      month.carryoverOverrideCents = amountCents;
    }
    await persistSelectedYear(
      amountCents === null
        ? "Übernahme aus Vormonat zurückgesetzt"
        : `Übernahme aus Vormonat auf ${centsToEuro(amountCents)} € gesetzt`,
    );
    render();
  }

  async function addVariablePosition(
    name: string,
    budgetCents: number,
    applyFuture: boolean,
  ): Promise<void> {
    const month = getSelectedMonthBook();
    const selectedYear = state.selectedYear;
    if (!month || !selectedYear) {
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
    recalculateVariableBudget(month);

    if (applyFuture) {
      const currentKey = monthKey(selectedYear, state.selectedMonth);
      state.years.forEach((yearItem) => {
        yearItem.months.forEach((monthItem) => {
          if (monthKey(yearItem.year, monthItem.month) <= currentKey) {
            return;
          }
          monthItem.variablePositions = [
            {
              id: createId("varpos"),
              name: cleanName,
              budgetCents,
              actualCents: 0,
            },
            ...monthItem.variablePositions,
          ];
          recalculateVariableBudget(monthItem);
        });
      });

      await persistAllYears(
        `Variable Position hinzugefügt: ${cleanName} (${centsToEuro(budgetCents)} €) für zukünftige Monate`,
      );
      showToast("Variable Position wurde für zukünftige Monate hinzugefügt.");
      render();
      return;
    }

    await persistSelectedYear(
      `Variable Position hinzugefügt: ${cleanName} (${centsToEuro(budgetCents)} €)`,
    );
    showToast("Variable Position wurde hinzugefügt.");
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

    const targetPosition = month.variablePositions.find(
      (position) => position.id === positionId,
    );
    month.variablePositions = month.variablePositions.map((position) =>
      position.id === positionId ? { ...position, actualCents } : position,
    );

    await persistSelectedYear(
      `Istwert Variable Position angepasst: ${targetPosition?.name ?? "Unbekannt"} auf ${centsToEuro(actualCents)} €`,
    );
    render();
  }

  async function updateVariablePositionBudget(
    positionId: string,
    budgetCents: number,
  ): Promise<void> {
    const month = getSelectedMonthBook();
    if (!month) {
      return;
    }

    const targetPosition = month.variablePositions.find(
      (position) => position.id === positionId,
    );
    month.variablePositions = month.variablePositions.map((position) =>
      position.id === positionId ? { ...position, budgetCents } : position,
    );
    recalculateVariableBudget(month);

    await persistSelectedYear(
      `Budget Variable Position angepasst: ${targetPosition?.name ?? "Unbekannt"} auf ${centsToEuro(budgetCents)} €`,
    );
    render();
  }

  async function removeVariablePosition(positionId: string): Promise<void> {
    const shouldDelete = confirm("Variable Position wirklich löschen?");
    if (!shouldDelete) {
      return;
    }

    const month = getSelectedMonthBook();
    const selectedYear = state.selectedYear;
    if (!month || !selectedYear) {
      return;
    }

    const targetPosition = month.variablePositions.find(
      (position) => position.id === positionId,
    );
    if (!targetPosition) {
      return;
    }

    const currentKey = monthKey(selectedYear, state.selectedMonth);
    const hasRecurringInFuture = state.years.some((yearItem) =>
      yearItem.months.some(
        (monthItem) =>
          monthKey(yearItem.year, monthItem.month) > currentKey &&
          monthItem.variablePositions.some(
            (position) =>
              position.name === targetPosition.name &&
              position.budgetCents === targetPosition.budgetCents,
          ),
      ),
    );

    const shouldApplyFuture = hasRecurringInFuture
      ? confirm("Soll das Löschen auch für zukünftige Monate gelten?")
      : false;

    month.variablePositions = month.variablePositions.filter(
      (position) => position.id !== positionId,
    );
    recalculateVariableBudget(month);

    if (shouldApplyFuture) {
      state.years.forEach((yearItem) => {
        yearItem.months.forEach((monthItem) => {
          if (monthKey(yearItem.year, monthItem.month) <= currentKey) {
            return;
          }
          monthItem.variablePositions = monthItem.variablePositions.filter(
            (position) =>
              !(
                position.name === targetPosition.name &&
                position.budgetCents === targetPosition.budgetCents
              ),
          );
          recalculateVariableBudget(monthItem);
        });
      });

      await persistAllYears(
        `Variable Position gelöscht: ${targetPosition.name} (inkl. zukünftiger Monate)`,
      );
      showToast(
        "Variable Position wurde auch in zukünftigen Monaten gelöscht.",
      );
      render();
      return;
    }

    await persistSelectedYear(
      `Variable Position gelöscht: ${targetPosition.name}`,
    );
    showToast("Variable Position wurde gelöscht.");
    render();
  }

  async function moveVariablePositionToNextMonth(
    positionId: string,
  ): Promise<void> {
    const month = getSelectedMonthBook();
    const selectedYear = state.selectedYear;
    if (!month || !selectedYear) {
      return;
    }

    const targetPosition = month.variablePositions.find(
      (position) => position.id === positionId,
    );
    if (!targetPosition) {
      return;
    }

    const next = {
      year: state.selectedMonth === 12 ? selectedYear + 1 : selectedYear,
      month: state.selectedMonth === 12 ? 1 : state.selectedMonth + 1,
    };

    let targetYearBook = state.years.find((year) => year.year === next.year);
    if (!targetYearBook) {
      const created = createYearWithMonths(
        next.year,
        state.fixedTemplates,
        state.fixedTemplateVersion,
      );
      applyRecurringBudgetDefaultsToYear(created);
      applyAnnualVariableFixedTemplatesToYear(created);
      await saveYear(created);
      state.years = [...state.years, created].sort((a, b) => a.year - b.year);
      targetYearBook = created;
    }

    const targetMonth = targetYearBook.months.find(
      (monthItem) => monthItem.month === next.month,
    );
    if (!targetMonth) {
      return;
    }

    const alreadyExistsInTarget = targetMonth.variablePositions.some(
      (position) =>
        position.id === targetPosition.id ||
        (position.name === targetPosition.name &&
          position.budgetCents === targetPosition.budgetCents),
    );

    month.variablePositions = month.variablePositions.filter(
      (position) => position.id !== positionId,
    );
    recalculateVariableBudget(month);

    if (!alreadyExistsInTarget) {
      const idConflict = targetMonth.variablePositions.some(
        (position) => position.id === targetPosition.id,
      );
      const movedPosition = idConflict
        ? { ...targetPosition, id: createId("varpos") }
        : targetPosition;

      targetMonth.variablePositions = [
        movedPosition,
        ...targetMonth.variablePositions,
      ];
      recalculateVariableBudget(targetMonth);
    }

    const targetMonthLabel = `${monthLabel(next.month)} ${next.year}`;
    const reason = `Variable Position verschoben: ${targetPosition.name} → ${targetMonthLabel}`;

    if (next.year === selectedYear) {
      await persistSelectedYear(reason);
    } else {
      const selectedYearBook = getSelectedYearBook();
      if (!selectedYearBook) {
        return;
      }
      await saveYear(selectedYearBook);
      await saveYear(targetYearBook);
      state.years = await listYears();
      normalizeBudgetsForYears(state.years);
      markDataChanged(reason);
    }

    showToast(
      alreadyExistsInTarget
        ? `Position entfernt (im Folgemonat schon vorhanden: ${targetMonthLabel}).`
        : `Position in den Folgemonat verschoben: ${targetMonthLabel}.`,
    );
    render();
  }

  async function addMiscExpense(
    description: string,
    amountCents: number,
    applyFuture: boolean,
  ): Promise<void> {
    const month = getSelectedMonthBook();
    const selectedYear = state.selectedYear;
    if (!month || !selectedYear) {
      return;
    }
    const cleanDescription = description.trim();
    if (!cleanDescription) {
      alert("Bitte Bezeichnung für Sonstiges eingeben.");
      return;
    }
    if (amountCents <= 0) {
      alert("Bitte einen positiven Betrag eingeben.");
      return;
    }

    const entry: ExpenseEntry = createExpense(cleanDescription, amountCents);
    month.miscCosts = [entry, ...month.miscCosts];

    if (applyFuture) {
      const currentKey = monthKey(selectedYear, state.selectedMonth);
      state.years.forEach((yearItem) => {
        yearItem.months.forEach((monthItem) => {
          if (monthKey(yearItem.year, monthItem.month) <= currentKey) {
            return;
          }
          monthItem.miscCosts = [
            createExpense(cleanDescription, amountCents),
            ...monthItem.miscCosts,
          ];
        });
      });

      await persistAllYears(
        `Sonstige Position hinzugefügt: ${cleanDescription} (${centsToEuro(amountCents)} €) für zukünftige Monate`,
      );
      showToast("Sonstige Position wurde für zukünftige Monate hinzugefügt.");
      render();
      return;
    }

    await persistSelectedYear(
      `Sonstige Position hinzugefügt: ${cleanDescription} (${centsToEuro(amountCents)} €)`,
    );
    showToast("Sonstige Position wurde hinzugefügt.");
    render();
  }

  async function removeMiscExpense(expenseId: string): Promise<void> {
    const shouldDelete = confirm("Sonstiges-Position wirklich löschen?");
    if (!shouldDelete) {
      return;
    }

    const month = getSelectedMonthBook();
    const selectedYear = state.selectedYear;
    if (!month || !selectedYear) {
      return;
    }

    const targetExpense = month.miscCosts.find(
      (entry) => entry.id === expenseId,
    );
    if (!targetExpense) {
      return;
    }

    const currentKey = monthKey(selectedYear, state.selectedMonth);
    const hasRecurringInFuture = state.years.some((yearItem) =>
      yearItem.months.some(
        (monthItem) =>
          monthKey(yearItem.year, monthItem.month) > currentKey &&
          monthItem.miscCosts.some(
            (entry) =>
              entry.description === targetExpense.description &&
              entry.amountCents === targetExpense.amountCents,
          ),
      ),
    );

    const shouldApplyFuture = hasRecurringInFuture
      ? confirm("Soll das Löschen auch für zukünftige Monate gelten?")
      : false;

    month.miscCosts = month.miscCosts.filter((entry) => entry.id !== expenseId);

    if (shouldApplyFuture) {
      state.years.forEach((yearItem) => {
        yearItem.months.forEach((monthItem) => {
          if (monthKey(yearItem.year, monthItem.month) <= currentKey) {
            return;
          }
          monthItem.miscCosts = monthItem.miscCosts.filter(
            (entry) =>
              !(
                entry.description === targetExpense.description &&
                entry.amountCents === targetExpense.amountCents
              ),
          );
        });
      });

      await persistAllYears(
        `Sonstige Position gelöscht: ${targetExpense.description} (${centsToEuro(targetExpense.amountCents)} €) inkl. zukünftiger Monate`,
      );
      showToast(
        "Sonstige Position wurde auch in zukünftigen Monaten gelöscht.",
      );
      render();
      return;
    }

    await persistSelectedYear(
      `Sonstige Position gelöscht: ${targetExpense.description} (${centsToEuro(targetExpense.amountCents)} €)`,
    );
    showToast("Sonstige Position wurde gelöscht.");
    render();
  }

  async function addIncome(
    description: string,
    amountCents: number,
    incomeSource: IncomeSource | undefined,
    applyFuture: boolean,
  ): Promise<void> {
    const month = getSelectedMonthBook();
    const selectedYear = state.selectedYear;
    if (!month || !selectedYear) {
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

    const entry = createIncomeEntry(
      cleanDescription,
      amountCents,
      incomeSource,
    );
    month.incomes = [entry, ...month.incomes];

    if (applyFuture) {
      const currentKey = monthKey(selectedYear, state.selectedMonth);
      state.years.forEach((yearItem) => {
        yearItem.months.forEach((monthItem) => {
          if (monthKey(yearItem.year, monthItem.month) <= currentKey) {
            return;
          }
          monthItem.incomes = [
            createIncomeEntry(cleanDescription, amountCents, incomeSource),
            ...monthItem.incomes,
          ];
        });
      });

      await persistAllYears(
        `Einkommen hinzugefügt: ${cleanDescription} (${centsToEuro(amountCents)} €, ${incomeSourceLabel(incomeSource)}) für zukünftige Monate`,
      );
      showToast("Einkommen wurde für zukünftige Monate hinzugefügt.");
      render();
      return;
    }

    await persistSelectedYear(
      `Einkommen hinzugefügt: ${cleanDescription} (${centsToEuro(amountCents)} €, ${incomeSourceLabel(incomeSource)})`,
    );
    showToast("Einkommen wurde hinzugefügt.");
    render();
  }

  async function updateIncomeSource(
    incomeId: string,
    incomeSource: IncomeSource | undefined,
  ): Promise<void> {
    const month = getSelectedMonthBook();
    if (!month) {
      return;
    }

    const targetIncome = month.incomes.find((entry) => entry.id === incomeId);
    if (!targetIncome) {
      return;
    }

    month.incomes = month.incomes.map((entry) => {
      if (entry.id !== incomeId) {
        return entry;
      }
      if (!incomeSource) {
        const { incomeSource: _unusedIncomeSource, ...rest } = entry;
        return rest;
      }
      return {
        ...entry,
        incomeSource,
      };
    });

    await persistSelectedYear(
      `Einkommensart angepasst: ${targetIncome.description} → ${incomeSourceLabel(incomeSource)}`,
    );
    render();
  }

  async function removeIncome(incomeId: string): Promise<void> {
    const shouldDelete = confirm("Einkommens-Eintrag wirklich löschen?");
    if (!shouldDelete) {
      return;
    }

    const month = getSelectedMonthBook();
    const selectedYear = state.selectedYear;
    if (!month || !selectedYear) {
      return;
    }

    const targetIncome = month.incomes.find((entry) => entry.id === incomeId);
    if (!targetIncome) {
      return;
    }

    const currentKey = monthKey(selectedYear, state.selectedMonth);
    const hasRecurringInFuture = state.years.some((yearItem) =>
      yearItem.months.some(
        (monthItem) =>
          monthKey(yearItem.year, monthItem.month) > currentKey &&
          monthItem.incomes.some(
            (entry) =>
              entry.description === targetIncome.description &&
              entry.amountCents === targetIncome.amountCents,
          ),
      ),
    );

    const shouldApplyFuture = hasRecurringInFuture
      ? confirm("Soll das Löschen auch für zukünftige Monate gelten?")
      : false;

    month.incomes = month.incomes.filter((entry) => entry.id !== incomeId);

    if (shouldApplyFuture) {
      state.years.forEach((yearItem) => {
        yearItem.months.forEach((monthItem) => {
          if (monthKey(yearItem.year, monthItem.month) <= currentKey) {
            return;
          }
          monthItem.incomes = monthItem.incomes.filter(
            (entry) =>
              !(
                entry.description === targetIncome.description &&
                entry.amountCents === targetIncome.amountCents
              ),
          );
        });
      });

      await persistAllYears(
        `Einkommen gelöscht: ${targetIncome.description} (${centsToEuro(targetIncome.amountCents)} €) inkl. zukünftiger Monate`,
      );
      showToast("Einkommen wurde auch in zukünftigen Monaten gelöscht.");
      render();
      return;
    }

    await persistSelectedYear(
      `Einkommen gelöscht: ${targetIncome.description} (${centsToEuro(targetIncome.amountCents)} €)`,
    );
    showToast("Einkommen wurde gelöscht.");
    render();
  }

  async function exportBackup(): Promise<void> {
    const payload = await createBackupPayload();
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const backupFileName = `haushaltsbuch-backup-${getTodayIsoDate()}-${getBackupTimeId()}.json`;
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = backupFileName;
    anchor.click();
    URL.revokeObjectURL(url);
    markBackupCompleted(backupFileName);
    render();
    showToast("Backup wurde exportiert.");
  }

  async function importBackup(file: File): Promise<void> {
    const text = await file.text();
    const parsed = JSON.parse(text) as BackupPayload;
    await restoreFromBackup(parsed);
    const [years, fixed, annualVariableFixed] = await Promise.all([
      listYears(),
      getFixedTemplateState(),
      getAnnualVariableFixedTemplateState(),
    ]);
    state.years = years;
    state.annualVariableFixedTemplates = annualVariableFixed.templates;
    state.annualVariableFixedTemplateVersion = annualVariableFixed.version;
    normalizeBudgetsForYears(state.years);
    normalizeAnnualVariableFixedCostsForYears(state.years);
    state.fixedTemplates = fixed.templates;
    state.fixedTemplateVersion = fixed.version;
    await persistNormalizedYears(state.years);
    state.persistentAuditLog = await listAuditLogEntries();
    state.selectedYear = getDefaultSelectedYear(years);
    state.selectedMonth = getCurrentMonthNumber();
    markBackupCompleted(file.name);
    showToast("Backup wurde importiert.");
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
    const deletedYear = state.selectedYear;
    await deleteYear(deletedYear);
    state.years = await listYears();
    markDataChanged(`Jahr ${deletedYear} wurde gelöscht`);
    state.selectedYear = getDefaultSelectedYear(state.years);
    state.selectedMonth = getCurrentMonthNumber();
    showToast(`Jahr ${deletedYear} wurde gelöscht.`);
    render();
  }

  function render(): void {
    const year = getSelectedYearBook();
    const month = getSelectedMonthBook();
    const todayIsoDate = getTodayIsoDate();
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
    const foodBudgetCents = month ? (month.foodBudgetCents ?? 0) : 0;
    const goingOutBudgetCents = month ? (month.goingOutBudgetCents ?? 0) : 0;
    const fixedBudgetCents = month
      ? (month.fixedBudgetCents ??
        month.fixedCosts.reduce((sum, entry) => sum + entry.plannedCents, 0))
      : 0;
    const variableBudgetCents = month
      ? (month.variableBudgetCents ??
        month.variablePositions.reduce(
          (sum, position) => sum + position.budgetCents,
          0,
        ))
      : 0;
    const miscBudgetCents = month ? (month.miscBudgetCents ?? 0) : 0;

    const yearFoodBudgetCents = year
      ? year.months.reduce(
          (sum, monthItem) => sum + (monthItem.foodBudgetCents ?? 0),
          0,
        )
      : 0;
    const yearGoingOutBudgetCents = year
      ? year.months.reduce(
          (sum, monthItem) => sum + (monthItem.goingOutBudgetCents ?? 0),
          0,
        )
      : 0;
    const yearFixedBudgetCents = year
      ? year.months.reduce(
          (sum, monthItem) =>
            sum +
            (monthItem.fixedBudgetCents ??
              monthItem.fixedCosts.reduce(
                (fixedSum, entry) => fixedSum + entry.plannedCents,
                0,
              )),
          0,
        )
      : 0;
    const yearVariableBudgetCents = year
      ? year.months.reduce(
          (sum, monthItem) =>
            sum +
            (monthItem.variableBudgetCents ??
              monthItem.variablePositions.reduce(
                (positionSum, position) => positionSum + position.budgetCents,
                0,
              )),
          0,
        )
      : 0;
    const yearMiscBudgetCents = year
      ? year.months.reduce(
          (sum, monthItem) => sum + (monthItem.miscBudgetCents ?? 0),
          0,
        )
      : 0;
    const recordedIncomeTotalCents = month
      ? month.incomes.reduce(
          (sum, entry) =>
            sum +
            (isRecordedIncomeSource(entry.incomeSource)
              ? entry.amountCents
              : 0),
          0,
        )
      : 0;
    const monthSalaryIncomeCents = month
      ? month.incomes.reduce(
          (sum, entry) =>
            sum + (entry.incomeSource === "salary" ? entry.amountCents : 0),
          0,
        )
      : 0;
    const monthFreshIncomeCents = month
      ? month.incomes.reduce(
          (sum, entry) =>
            sum + (entry.incomeSource === "fresh" ? entry.amountCents : 0),
          0,
        )
      : 0;
    const incomeFlowByMonth = summarizeIncomeFlowByMonth();
    const selectedIncomeFlow = year
      ? incomeFlowByMonth.get(monthKey(year.year, state.selectedMonth))
      : undefined;
    const firstMonthInYear = year
      ? year.months.slice().sort((left, right) => left.month - right.month)[0]
      : undefined;
    const carryoverCents = selectedIncomeFlow?.carriedFromPreviousCents ?? 0;
    const hasCarryoverFromPreviousMonth =
      selectedIncomeFlow?.hasPreviousMonth ?? false;
    const effectiveIncomeTotalCents =
      selectedIncomeFlow?.effectiveIncomeCents ?? recordedIncomeTotalCents;
    const monthPlannedBudgetCentsForNetFallback = month
      ? summarizePlannedBudgetsCents(month)
      : 0;
    const monthNetCents =
      selectedIncomeFlow?.netCents ??
      recordedIncomeTotalCents - monthPlannedBudgetCentsForNetFallback;
    const monthActualNetCents =
      effectiveIncomeTotalCents - monthSummary.totalCents;
    const monthSalaryMinusExpensesCents =
      monthSalaryIncomeCents - monthSummary.totalCents;
    const monthSalaryVsExpensesPercent =
      monthSummary.totalCents > 0
        ? `${((monthSalaryIncomeCents / monthSummary.totalCents) * 100).toFixed(1)} %`
        : "-";
    const carryoverClass =
      carryoverCents < 0 ? "danger" : carryoverCents > 0 ? "budget-under" : "";
    const monthNetClass =
      monthNetCents < 0 ? "danger" : monthNetCents > 0 ? "budget-under" : "";
    const monthActualNetClass =
      monthActualNetCents < 0
        ? "danger"
        : monthActualNetCents > 0
          ? "budget-under"
          : "";
    const yearRecordedIncomeTotalCents = year
      ? year.months.reduce(
          (sum, monthItem) =>
            sum +
            monthItem.incomes.reduce(
              (monthSum, entry) =>
                monthSum +
                (isRecordedIncomeSource(entry.incomeSource)
                  ? entry.amountCents
                  : 0),
              0,
            ),
          0,
        )
      : 0;
    const yearSalaryIncomeCents = year
      ? year.months.reduce(
          (sum, monthItem) =>
            sum +
            monthItem.incomes.reduce(
              (monthSum, entry) =>
                monthSum +
                (entry.incomeSource === "salary" ? entry.amountCents : 0),
              0,
            ),
          0,
        )
      : 0;
    const yearFreshIncomeCents = year
      ? year.months.reduce(
          (sum, monthItem) =>
            sum +
            monthItem.incomes.reduce(
              (monthSum, entry) =>
                monthSum +
                (entry.incomeSource === "fresh" ? entry.amountCents : 0),
              0,
            ),
          0,
        )
      : 0;
    const yearOpeningCarryoverCents =
      year && firstMonthInYear
        ? (incomeFlowByMonth.get(monthKey(year.year, firstMonthInYear.month))
            ?.carriedFromPreviousCents ?? 0)
        : 0;
    const yearEffectiveIncomeTotalCents =
      yearRecordedIncomeTotalCents + yearOpeningCarryoverCents;
    const yearNetCents = yearEffectiveIncomeTotalCents - yearSummary.totalCents;
    const yearSalaryMinusExpensesCents =
      yearSalaryIncomeCents - yearSummary.totalCents;
    const yearSalaryVsExpensesPercent =
      yearSummary.totalCents > 0
        ? `${((yearSalaryIncomeCents / yearSummary.totalCents) * 100).toFixed(1)} %`
        : "-";
    const yearOpeningCarryoverClass =
      yearOpeningCarryoverCents < 0
        ? "danger"
        : yearOpeningCarryoverCents > 0
          ? "budget-under"
          : "";
    const yearNetClass =
      yearNetCents < 0 ? "danger" : yearNetCents > 0 ? "budget-under" : "";

    const monthPlannedBudgetTotalCents =
      foodBudgetCents +
      goingOutBudgetCents +
      fixedBudgetCents +
      variableBudgetCents +
      miscBudgetCents;
    const foodAndGoingOutBudgetCents = foodBudgetCents + goingOutBudgetCents;
    const foodAndGoingOutActualCents =
      monthSummary.foodCents + monthSummary.goingOutCents;
    const foodAndGoingOutDiffCents =
      foodAndGoingOutBudgetCents - foodAndGoingOutActualCents;
    const foodAndGoingOutStatusClass = budgetStatusClass(
      foodAndGoingOutActualCents,
      foodAndGoingOutBudgetCents,
    );
    const yearPlannedBudgetTotalCents =
      yearFoodBudgetCents +
      yearGoingOutBudgetCents +
      yearFixedBudgetCents +
      yearVariableBudgetCents +
      yearMiscBudgetCents;

    const incomeMinusPlannedBudgetsCents =
      effectiveIncomeTotalCents - monthPlannedBudgetTotalCents;

    const yearIncomeMinusPlannedBudgetsCents =
      yearEffectiveIncomeTotalCents - yearPlannedBudgetTotalCents;

    const monthBudgetRemainingCents =
      monthPlannedBudgetTotalCents - monthSummary.totalCents;
    const yearBudgetRemainingCents =
      yearPlannedBudgetTotalCents - yearSummary.totalCents;

    const incomeBudgetBalanceClass = (value: number): string =>
      value < 0 ? "danger" : value > 0 ? "budget-under" : "";
    const salaryCoverageClass = (
      salaryIncomeCents: number,
      expensesCents: number,
    ): string => {
      if (expensesCents <= 0) {
        return "muted";
      }
      return salaryIncomeCents >= expensesCents ? "budget-under" : "danger";
    };
    const monthSalaryCoverageClass = salaryCoverageClass(
      monthSalaryIncomeCents,
      monthSummary.totalCents,
    );
    const yearSalaryCoverageClass = salaryCoverageClass(
      yearSalaryIncomeCents,
      yearSummary.totalCents,
    );

    const percent = (value: number, max: number): string => {
      if (max <= 0) return "0%";
      const clamped = Math.max(0, value);
      const pct = (clamped / max) * 100;
      return `${Math.min(100, Math.max(0, pct)).toFixed(1)}%`;
    };
    const budgetUsagePercent = (
      actualCents: number,
      budgetCents: number,
    ): number => {
      if (budgetCents <= 0) {
        return actualCents > 0 ? 100 : 0;
      }
      const pct = (Math.max(0, actualCents) / budgetCents) * 100;
      return Math.max(0, pct);
    };
    const budgetVsActualChartRows = [
      {
        label: "Essen",
        budgetCents: foodBudgetCents,
        actualCents: monthSummary.foodCents,
      },
      {
        label: "Ausgehen",
        budgetCents: goingOutBudgetCents,
        actualCents: monthSummary.goingOutCents,
      },
      {
        label: "Fixkosten",
        budgetCents: fixedBudgetCents,
        actualCents: monthSummary.fixedCents,
      },
      {
        label: "Variable",
        budgetCents: variableBudgetCents,
        actualCents: monthSummary.variableCents,
      },
      {
        label: "Sonstige",
        budgetCents: miscBudgetCents,
        actualCents: monthSummary.miscCents,
      },
    ];
    const budgetVsActualMaxCents = Math.max(
      1,
      ...budgetVsActualChartRows.flatMap((row) => [
        row.budgetCents,
        row.actualCents,
      ]),
    );
    const budgetBarClass = (
      budgetCents: number,
      actualCents: number,
    ): string => {
      if (actualCents <= 0) return "bar-positive";
      if (budgetCents <= 0) return "bar-negative";
      return actualCents > budgetCents ? "bar-negative" : "bar-positive";
    };

    const incomeExpenseChartRows = [
      {
        label: "Einkommen gesamt",
        valueCents: effectiveIncomeTotalCents,
        className: "bar-income",
      },
      {
        label: "Budget gesamt",
        valueCents: monthPlannedBudgetTotalCents,
        className: "bar-budget",
      },
      {
        label: "Echte Ausgaben",
        valueCents: monthSummary.totalCents,
        className: "bar-expense",
      },
      {
        label: "Netto",
        valueCents: monthActualNetCents,
        className: monthActualNetCents < 0 ? "bar-negative" : "bar-positive",
      },
    ];
    const incomeExpenseMaxCents = Math.max(
      1,
      ...incomeExpenseChartRows.map((row) => Math.abs(row.valueCents)),
    );

    const yearPlannedByMonth = year
      ? year.months
          .slice()
          .sort((left, right) => left.month - right.month)
          .map((monthItem) => {
            const foodBudgetCents = monthItem.foodBudgetCents ?? 0;
            const goingOutBudgetCents = monthItem.goingOutBudgetCents ?? 0;
            const fixedBudgetCents =
              monthItem.fixedBudgetCents ??
              monthItem.fixedCosts.reduce(
                (sum, entry) => sum + entry.plannedCents,
                0,
              );
            const variableBudgetCents =
              monthItem.variableBudgetCents ??
              monthItem.variablePositions.reduce(
                (sum, position) => sum + position.budgetCents,
                0,
              );
            const miscBudgetCents = monthItem.miscBudgetCents ?? 0;
            const totalBudgetCents =
              foodBudgetCents +
              goingOutBudgetCents +
              fixedBudgetCents +
              variableBudgetCents +
              miscBudgetCents;

            return {
              month: monthItem.month,
              foodBudgetCents,
              goingOutBudgetCents,
              fixedBudgetCents,
              variableBudgetCents,
              miscBudgetCents,
              totalBudgetCents,
            };
          })
      : [];
    const yearPlannedByMonthMap = new Map(
      yearPlannedByMonth.map((row) => [row.month, row] as const),
    );

    const summarizeSeries = (
      values: number[],
    ): { min: number; avg: number; max: number } | null => {
      if (values.length === 0) {
        return null;
      }
      const min = Math.min(...values);
      const max = Math.max(...values);
      const avg = Math.round(
        values.reduce((sum, value) => sum + value, 0) / values.length,
      );
      return { min, avg, max };
    };

    const yearComparisonRowsForStats =
      year && year.year === getCurrentYearNumber()
        ? yearByMonth.filter((row) => row.month <= getCurrentMonthNumber())
        : yearByMonth;

    const yearComparisonFoodValues = yearComparisonRowsForStats.map(
      (row) => row.summary.foodCents,
    );
    const yearComparisonGoingOutValues = yearComparisonRowsForStats.map(
      (row) => row.summary.goingOutCents,
    );
    const yearComparisonFixedValues = yearComparisonRowsForStats.map(
      (row) => row.summary.fixedCents,
    );
    const yearComparisonVariableValues = yearComparisonRowsForStats.map(
      (row) => row.summary.variableCents,
    );
    const yearComparisonMiscValues = yearComparisonRowsForStats.map(
      (row) => row.summary.miscCents,
    );
    const yearComparisonTotalValues = yearComparisonRowsForStats.map(
      (row) => row.summary.totalCents,
    );
    const yearComparisonBudgetValues = yearComparisonRowsForStats.map((row) =>
      year
        ? (incomeFlowByMonth.get(monthKey(year.year, row.month))
            ?.plannedBudgetCents ?? 0)
        : 0,
    );
    const yearComparisonNetValues = yearComparisonRowsForStats.map((row) =>
      year
        ? (incomeFlowByMonth.get(monthKey(year.year, row.month))?.netCents ?? 0)
        : 0,
    );
    const yearSalaryByMonthMap = new Map(
      (year?.months ?? []).map((monthItem) => [
        monthItem.month,
        monthItem.incomes.reduce(
          (sum, entry) =>
            sum + (entry.incomeSource === "salary" ? entry.amountCents : 0),
          0,
        ),
      ]),
    );
    const yearComparisonSalaryValues = yearComparisonRowsForStats.map(
      (row) => yearSalaryByMonthMap.get(row.month) ?? 0,
    );

    const yearComparisonStats = {
      food: summarizeSeries(yearComparisonFoodValues),
      goingOut: summarizeSeries(yearComparisonGoingOutValues),
      fixed: summarizeSeries(yearComparisonFixedValues),
      variable: summarizeSeries(yearComparisonVariableValues),
      misc: summarizeSeries(yearComparisonMiscValues),
      total: summarizeSeries(yearComparisonTotalValues),
      salary: summarizeSeries(yearComparisonSalaryValues),
      budget: summarizeSeries(yearComparisonBudgetValues),
      net: summarizeSeries(yearComparisonNetValues),
    };

    const yearComparisonStatsRows: Array<{
      key: "min" | "avg" | "max";
      label: string;
    }> = [
      { key: "min", label: "Min" },
      { key: "avg", label: "Mittelwert" },
      { key: "max", label: "Max" },
    ];

    const yearComparisonSums = {
      food: yearComparisonFoodValues.reduce((sum, value) => sum + value, 0),
      goingOut: yearComparisonGoingOutValues.reduce(
        (sum, value) => sum + value,
        0,
      ),
      fixed: yearComparisonFixedValues.reduce((sum, value) => sum + value, 0),
      variable: yearComparisonVariableValues.reduce(
        (sum, value) => sum + value,
        0,
      ),
      misc: yearComparisonMiscValues.reduce((sum, value) => sum + value, 0),
      total: yearComparisonTotalValues.reduce((sum, value) => sum + value, 0),
      salary: yearComparisonSalaryValues.reduce((sum, value) => sum + value, 0),
      budget: yearComparisonBudgetValues.reduce((sum, value) => sum + value, 0),
    };

    const yearComparisonStatsRowsHtml = yearComparisonStatsRows
      .map(({ key, label }) => {
        const food = yearComparisonStats.food?.[key] ?? null;
        const goingOut = yearComparisonStats.goingOut?.[key] ?? null;
        const fixed = yearComparisonStats.fixed?.[key] ?? null;
        const variable = yearComparisonStats.variable?.[key] ?? null;
        const misc = yearComparisonStats.misc?.[key] ?? null;
        const total = yearComparisonStats.total?.[key] ?? null;
        const salary = yearComparisonStats.salary?.[key] ?? null;
        const budget = yearComparisonStats.budget?.[key] ?? null;
        const net = yearComparisonStats.net?.[key] ?? null;

        const formatStat = (value: number | null): string =>
          value === null ? "-" : centsToEuro(value);

        return `<tr>
                  <td><strong>${label}</strong></td>
                  <td>${formatStat(food)}</td>
                  <td>${formatStat(goingOut)}</td>
                  <td>${formatStat(fixed)}</td>
                  <td>${formatStat(variable)}</td>
                  <td>${formatStat(misc)}</td>
                  <td>${formatStat(total)}</td>
                  <td>${formatStat(salary)}</td>
                  <td>${formatStat(budget)}</td>
                  <td>${formatStat(net)}</td>
                </tr>`;
      })
      .join("");

    const yearComparisonSumsRowHtml = `<tr>
                  <td><strong>Summe</strong></td>
                  <td>${centsToEuro(yearComparisonSums.food)}</td>
                  <td>${centsToEuro(yearComparisonSums.goingOut)}</td>
                  <td>${centsToEuro(yearComparisonSums.fixed)}</td>
                  <td>${centsToEuro(yearComparisonSums.variable)}</td>
                  <td>${centsToEuro(yearComparisonSums.misc)}</td>
                  <td>${centsToEuro(yearComparisonSums.total)}</td>
                  <td>${centsToEuro(yearComparisonSums.salary)}</td>
                  <td>${centsToEuro(yearComparisonSums.budget)}</td>
                </tr>`;

    const yearTotalMaxCents = Math.max(
      1,
      ...yearByMonth.flatMap((row) => {
        const planned = yearPlannedByMonthMap.get(row.month)?.totalBudgetCents;
        return [row.summary.totalCents, planned ?? 0];
      }),
    );
    const yearFoodAndGoingOutMaxCents = Math.max(
      1,
      ...yearByMonth.flatMap((row) => {
        const plannedRow = yearPlannedByMonthMap.get(row.month);
        const actual = row.summary.foodCents + row.summary.goingOutCents;
        const planned =
          (plannedRow?.foodBudgetCents ?? 0) +
          (plannedRow?.goingOutBudgetCents ?? 0);
        return [actual, planned];
      }),
    );
    const yearFixedMaxCents = Math.max(
      1,
      ...yearByMonth.flatMap((row) => {
        const planned =
          yearPlannedByMonthMap.get(row.month)?.fixedBudgetCents ?? 0;
        return [row.summary.fixedCents, planned];
      }),
    );
    const yearVariableMaxCents = Math.max(
      1,
      ...yearByMonth.flatMap((row) => {
        const planned =
          yearPlannedByMonthMap.get(row.month)?.variableBudgetCents ?? 0;
        return [row.summary.variableCents, planned];
      }),
    );
    const yearMiscMaxCents = Math.max(
      1,
      ...yearByMonth.flatMap((row) => {
        const planned =
          yearPlannedByMonthMap.get(row.month)?.miscBudgetCents ?? 0;
        return [row.summary.miscCents, planned];
      }),
    );
    const fixedSummaryBudgetClass = budgetStatusClass(
      monthSummary.fixedCents,
      fixedBudgetCents,
    );
    const foodSummaryBudgetClass = budgetStatusClass(
      monthSummary.foodCents,
      foodBudgetCents,
    );
    const goingOutSummaryBudgetClass = budgetStatusClass(
      monthSummary.goingOutCents,
      goingOutBudgetCents,
    );
    const variableSummaryBudgetClass = budgetStatusClass(
      monthSummary.variableCents,
      variableBudgetCents,
    );
    const miscSummaryBudgetClass = budgetStatusClass(
      monthSummary.miscCents,
      miscBudgetCents,
    );
    const editingFixedTemplate = state.editingFixedTemplateId
      ? state.fixedTemplates.find(
          (template) => template.id === state.editingFixedTemplateId,
        )
      : null;
    const showUnexportedChangesHint = state.hasUnexportedChanges;
    const unexportedChangeLogForDisplay = state.unexportedChangeLog
      .slice()
      .reverse();
    const persistentAuditLogForDisplay = state.persistentAuditLog
      .slice()
      .sort((left, right) =>
        right.timestampIso.localeCompare(left.timestampIso),
      );
    const lastBackupFileNameLabel = state.lastBackupFileName
      ? escapeHtml(state.lastBackupFileName)
      : "-";
    const emptyCostSummary: CostSummary = {
      foodCents: 0,
      goingOutCents: 0,
      fixedCents: 0,
      variableCents: 0,
      miscCents: 0,
      totalCents: 0,
    };

    const sortedYears = state.years
      .slice()
      .sort((left, right) => left.year - right.year);
    const dashboardYearNumber = sortedYears.some(
      (item) => item.year === state.dashboardYear,
    )
      ? state.dashboardYear
      : (state.selectedYear ??
        sortedYears[sortedYears.length - 1]?.year ??
        null);
    const dashboardYearBook =
      typeof dashboardYearNumber === "number"
        ? sortedYears.find((item) => item.year === dashboardYearNumber)
        : undefined;
    const dashboardYearMonths = dashboardYearBook
      ? dashboardYearBook.months
          .slice()
          .sort((left, right) => left.month - right.month)
      : [];
    const dashboardYearSummary = dashboardYearBook
      ? summarizeYear(dashboardYearBook)
      : emptyCostSummary;
    const dashboardYearBudgetTotals = dashboardYearBook
      ? summarizeYearBudgetByCategory(dashboardYearBook)
      : {
          foodCents: 0,
          goingOutCents: 0,
          fixedCents: 0,
          variableCents: 0,
          miscCents: 0,
          totalCents: 0,
        };
    const dashboardYearRecordedIncomeCents = dashboardYearBook
      ? summarizeRecordedIncomeCents(dashboardYearBook)
      : 0;
    const dashboardYearOpeningCarryoverCents = dashboardYearBook
      ? getYearOpeningCarryoverCents(dashboardYearBook, incomeFlowByMonth)
      : 0;
    const dashboardYearEffectiveIncomeCents =
      dashboardYearRecordedIncomeCents + dashboardYearOpeningCarryoverCents;
    const dashboardYearPlannedBudgetTotalCents = dashboardYearBook
      ? dashboardYearBook.months.reduce(
          (sum, monthItem) => sum + summarizePlannedBudgetsCents(monthItem),
          0,
        )
      : 0;
    const dashboardYearPlannedNetCents =
      dashboardYearEffectiveIncomeCents - dashboardYearPlannedBudgetTotalCents;
    const dashboardYearActualNetCents =
      dashboardYearEffectiveIncomeCents - dashboardYearSummary.totalCents;
    const dashboardYearCategoryRows = [
      {
        label: "Essen",
        budgetCents: dashboardYearBudgetTotals.foodCents,
        actualCents: dashboardYearSummary.foodCents,
      },
      {
        label: "Ausgehen",
        budgetCents: dashboardYearBudgetTotals.goingOutCents,
        actualCents: dashboardYearSummary.goingOutCents,
      },
      {
        label: "Fixkosten",
        budgetCents: dashboardYearBudgetTotals.fixedCents,
        actualCents: dashboardYearSummary.fixedCents,
      },
      {
        label: "Variable",
        budgetCents: dashboardYearBudgetTotals.variableCents,
        actualCents: dashboardYearSummary.variableCents,
      },
      {
        label: "Sonstige",
        budgetCents: dashboardYearBudgetTotals.miscCents,
        actualCents: dashboardYearSummary.miscCents,
      },
    ];
    const dashboardYearMonthlyRows = dashboardYearMonths.map((monthItem) => {
      const monthFlow = dashboardYearBook
        ? incomeFlowByMonth.get(
            monthKey(dashboardYearBook.year, monthItem.month),
          )
        : undefined;
      const monthSummary = summarizeMonth(monthItem);
      const monthRecordedIncomeCents = monthItem.incomes.reduce(
        (sum, entry) => sum + entry.amountCents,
        0,
      );
      const monthEffectiveIncomeCents =
        monthFlow?.effectiveIncomeCents ?? monthRecordedIncomeCents;
      const monthPlannedBudgetCents =
        monthFlow?.plannedBudgetCents ??
        summarizePlannedBudgetsCents(monthItem);
      const monthFoodCents = monthSummary.foodCents;
      const monthGoingOutCents = monthSummary.goingOutCents;
      const monthFoodAndGoingOutCents = monthFoodCents + monthGoingOutCents;
      const monthActualCostCents = monthSummary.totalCents;
      const monthPlannedNetCents =
        monthEffectiveIncomeCents - monthPlannedBudgetCents;
      const monthActualNetCents =
        monthEffectiveIncomeCents - monthActualCostCents;

      return {
        month: monthItem.month,
        foodCents: monthFoodCents,
        goingOutCents: monthGoingOutCents,
        foodAndGoingOutCents: monthFoodAndGoingOutCents,
        effectiveIncomeCents: monthEffectiveIncomeCents,
        plannedBudgetCents: monthPlannedBudgetCents,
        actualCostCents: monthActualCostCents,
        plannedNetCents: monthPlannedNetCents,
        actualNetCents: monthActualNetCents,
      };
    });
    const dashboardYearExpenseMaxCents = Math.max(
      1,
      ...dashboardYearMonthlyRows.map((row) => row.actualCostCents),
    );
    const dashboardYearMonthlyNetMaxCents = Math.max(
      1,
      ...dashboardYearMonthlyRows.flatMap((row) => [
        Math.abs(row.plannedNetCents),
        Math.abs(row.actualNetCents),
      ]),
    );
    const dashboardYearFoodAndGoingOutMaxCents = Math.max(
      1,
      ...dashboardYearMonthlyRows.map((row) => row.foodAndGoingOutCents),
    );
    const dashboardYearFoodMaxCents = Math.max(
      1,
      ...dashboardYearMonthlyRows.map((row) => row.foodCents),
    );
    const dashboardYearGoingOutMaxCents = Math.max(
      1,
      ...dashboardYearMonthlyRows.map((row) => row.goingOutCents),
    );
    const dashboardYearTrendRows = dashboardYearMonthlyRows.map(
      (row, index, rows) => {
        const previousPlannedNetCents =
          index > 0
            ? (rows[index - 1]?.plannedNetCents ?? row.plannedNetCents)
            : row.plannedNetCents;

        return {
          ...row,
          monthLabel: monthLabel(row.month),
          monthShortLabel: monthLabel(row.month).slice(0, 3),
          deltaCents: row.plannedNetCents - previousPlannedNetCents,
        };
      },
    );
    const dashboardYearTrendDefaultRow =
      dashboardYearTrendRows[dashboardYearTrendRows.length - 1] ?? null;
    const dashboardYearTrendMinCents = Math.min(
      0,
      ...dashboardYearTrendRows.map((row) => row.plannedNetCents),
    );
    const dashboardYearTrendMaxCents = Math.max(
      0,
      ...dashboardYearTrendRows.map((row) => row.plannedNetCents),
    );
    const dashboardYearTrendRangeCents = Math.max(
      1,
      dashboardYearTrendMaxCents - dashboardYearTrendMinCents,
    );
    const dashboardYearTrendChartWidth = 720;
    const dashboardYearTrendChartHeight = 320;
    const dashboardYearTrendPaddingTop = 18;
    const dashboardYearTrendPaddingRight = 18;
    const dashboardYearTrendPaddingBottom = 38;
    const dashboardYearTrendPaddingLeft = 56;
    const dashboardYearTrendInnerWidth =
      dashboardYearTrendChartWidth -
      dashboardYearTrendPaddingLeft -
      dashboardYearTrendPaddingRight;
    const dashboardYearTrendInnerHeight =
      dashboardYearTrendChartHeight -
      dashboardYearTrendPaddingTop -
      dashboardYearTrendPaddingBottom;
    const getDashboardYearTrendX = (index: number): number => {
      if (dashboardYearTrendRows.length <= 1) {
        return dashboardYearTrendPaddingLeft + dashboardYearTrendInnerWidth / 2;
      }
      const ratio = index / (dashboardYearTrendRows.length - 1);
      return (
        dashboardYearTrendPaddingLeft + ratio * dashboardYearTrendInnerWidth
      );
    };
    const getDashboardYearTrendY = (valueCents: number): number =>
      dashboardYearTrendPaddingTop +
      ((dashboardYearTrendMaxCents - valueCents) /
        dashboardYearTrendRangeCents) *
        dashboardYearTrendInnerHeight;
    const dashboardYearTrendPoints = dashboardYearTrendRows.map(
      (row, index) => {
        const x = getDashboardYearTrendX(index);
        const y = getDashboardYearTrendY(row.plannedNetCents);

        return {
          ...row,
          x,
          y,
          leftPercent: (x / dashboardYearTrendChartWidth) * 100,
          topPercent: (y / dashboardYearTrendChartHeight) * 100,
        };
      },
    );
    const dashboardYearTrendLinePath = dashboardYearTrendPoints
      .map(
        (point, index) =>
          `${index === 0 ? "M" : "L"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`,
      )
      .join(" ");
    const dashboardYearTrendAreaPath =
      dashboardYearTrendPoints.length > 0
        ? `${dashboardYearTrendLinePath} L ${dashboardYearTrendPoints[dashboardYearTrendPoints.length - 1]?.x.toFixed(1)} ${(dashboardYearTrendPaddingTop + dashboardYearTrendInnerHeight).toFixed(1)} L ${dashboardYearTrendPoints[0]?.x.toFixed(1)} ${(dashboardYearTrendPaddingTop + dashboardYearTrendInnerHeight).toFixed(1)} Z`
        : "";
    const dashboardYearTrendTickCount = 5;
    const dashboardYearTrendTicks = Array.from(
      { length: dashboardYearTrendTickCount },
      (_, index) => {
        const ratio =
          dashboardYearTrendTickCount <= 1
            ? 0
            : index / (dashboardYearTrendTickCount - 1);
        const rawValue =
          dashboardYearTrendMaxCents - ratio * dashboardYearTrendRangeCents;
        const valueCents = Math.round(rawValue / 100) * 100;
        return {
          valueCents,
          y: getDashboardYearTrendY(rawValue),
        };
      },
    );
    const dashboardYearTrendZeroLineY = getDashboardYearTrendY(0);
    const dashboardYearTrendStartCents =
      dashboardYearTrendRows[0]?.plannedNetCents ?? 0;
    const dashboardYearTrendEndCents =
      dashboardYearTrendRows[dashboardYearTrendRows.length - 1]
        ?.plannedNetCents ?? 0;
    const dashboardYearTrendDeltaCents =
      dashboardYearTrendEndCents - dashboardYearTrendStartCents;
    const dashboardYearTrendDirectionClass =
      dashboardYearTrendDeltaCents < 0
        ? "trend-badge-negative"
        : dashboardYearTrendDeltaCents > 0
          ? "trend-badge-positive"
          : "trend-badge-neutral";
    const dashboardYearTrendDirectionSymbol =
      dashboardYearTrendDeltaCents < 0
        ? "↘"
        : dashboardYearTrendDeltaCents > 0
          ? "↗"
          : "→";
    const dashboardYearTrendDirectionLabel =
      dashboardYearTrendDeltaCents < 0
        ? "Abwärtstrend"
        : dashboardYearTrendDeltaCents > 0
          ? "Aufwärtstrend"
          : "Seitwärts";

    const allYearsBudgetTotals = sortedYears.reduce(
      (acc, yearItem) => {
        const budget = summarizeYearBudgetByCategory(yearItem);
        return {
          foodCents: acc.foodCents + budget.foodCents,
          goingOutCents: acc.goingOutCents + budget.goingOutCents,
          fixedCents: acc.fixedCents + budget.fixedCents,
          variableCents: acc.variableCents + budget.variableCents,
          miscCents: acc.miscCents + budget.miscCents,
          totalCents: acc.totalCents + budget.totalCents,
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
    const allYearsActualTotals = sortedYears.reduce(
      (acc, yearItem) => {
        const summary = summarizeYear(yearItem);
        return {
          foodCents: acc.foodCents + summary.foodCents,
          goingOutCents: acc.goingOutCents + summary.goingOutCents,
          fixedCents: acc.fixedCents + summary.fixedCents,
          variableCents: acc.variableCents + summary.variableCents,
          miscCents: acc.miscCents + summary.miscCents,
          totalCents: acc.totalCents + summary.totalCents,
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
    const allYearsRecordedIncomeCents = sortedYears.reduce(
      (sum, yearItem) => sum + summarizeRecordedIncomeCents(yearItem),
      0,
    );
    const allYearsOpeningCarryoverCents = sortedYears[0]
      ? getYearOpeningCarryoverCents(sortedYears[0], incomeFlowByMonth)
      : 0;
    const allYearsEffectiveIncomeCents =
      allYearsRecordedIncomeCents + allYearsOpeningCarryoverCents;
    const allYearsPlannedNetCents =
      allYearsEffectiveIncomeCents - allYearsBudgetTotals.totalCents;
    const allYearsActualNetCents =
      allYearsEffectiveIncomeCents - allYearsActualTotals.totalCents;
    const allYearsCategoryRows = [
      {
        label: "Essen",
        budgetCents: allYearsBudgetTotals.foodCents,
        actualCents: allYearsActualTotals.foodCents,
      },
      {
        label: "Ausgehen",
        budgetCents: allYearsBudgetTotals.goingOutCents,
        actualCents: allYearsActualTotals.goingOutCents,
      },
      {
        label: "Fixkosten",
        budgetCents: allYearsBudgetTotals.fixedCents,
        actualCents: allYearsActualTotals.fixedCents,
      },
      {
        label: "Variable",
        budgetCents: allYearsBudgetTotals.variableCents,
        actualCents: allYearsActualTotals.variableCents,
      },
      {
        label: "Sonstige",
        budgetCents: allYearsBudgetTotals.miscCents,
        actualCents: allYearsActualTotals.miscCents,
      },
    ];
    const allYearsCategoryMaxCents = Math.max(
      1,
      ...allYearsCategoryRows.flatMap((row) => [
        row.budgetCents,
        row.actualCents,
      ]),
    );
    const allYearsRows = sortedYears.map((yearItem) => {
      const summary = summarizeYear(yearItem);
      const budget = summarizeYearBudgetByCategory(yearItem);
      const recordedIncomeCents = summarizeRecordedIncomeCents(yearItem);
      const salaryIncomeCents = yearItem.months.reduce(
        (sum, monthItem) =>
          sum +
          monthItem.incomes.reduce(
            (monthSum, entry) =>
              monthSum +
              (entry.incomeSource === "salary" ? entry.amountCents : 0),
            0,
          ),
        0,
      );
      const openingCarryoverCents = getYearOpeningCarryoverCents(
        yearItem,
        incomeFlowByMonth,
      );
      const effectiveIncomeCents = recordedIncomeCents + openingCarryoverCents;

      return {
        year: yearItem.year,
        salaryIncomeCents,
        budgetTotalCents: budget.totalCents,
        actualTotalCents: summary.totalCents,
        effectiveIncomeCents,
        plannedNetCents: effectiveIncomeCents - budget.totalCents,
        actualNetCents: effectiveIncomeCents - summary.totalCents,
      };
    });
    const allYearsNetMaxCents = Math.max(
      1,
      ...allYearsRows.flatMap((row) => [
        Math.abs(row.plannedNetCents),
        Math.abs(row.actualNetCents),
      ]),
    );
    const allYearsExpenseMaxCents = Math.max(
      1,
      ...allYearsRows.map((row) => row.actualTotalCents),
    );

    const dashboardPanelHtml = `
      <div class="grid">
        <div class="inline" role="tablist" aria-label="Dashboard Ansichten">
          <button class="btn ${state.dashboardTab === "year" ? "btn-primary" : "btn-quiet"}" id="dashboard-tab-year" data-dashboard-tab="year" type="button">Jahr im Detail</button>
          <button class="btn ${state.dashboardTab === "food" ? "btn-primary" : "btn-quiet"}" id="dashboard-tab-food" data-dashboard-tab="food" type="button">Essen & Trinken</button>
          <button class="btn ${state.dashboardTab === "all" ? "btn-primary" : "btn-quiet"}" id="dashboard-tab-all" data-dashboard-tab="all" type="button">Alle Jahre</button>
        </div>

        ${
          sortedYears.length === 0
            ? '<p class="muted">Noch keine Jahre vorhanden. Lege zuerst ein Jahr an.</p>'
            : state.dashboardTab === "year"
              ? `
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${sortedYears
                      .map(
                        (item) =>
                          `<option value="${item.year}" ${item.year === dashboardYearNumber ? "selected" : ""}>${item.year}</option>`,
                      )
                      .join("")}
                  </select>
                </label>
              </div>

              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Kennzahlen ${dashboardYearBook?.year ?? ""}</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row"><div class="eval-label">Einkommen effektiv</div><div class="eval-value">${centsToEuro(dashboardYearEffectiveIncomeCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${centsToEuro(dashboardYearPlannedBudgetTotalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${centsToEuro(dashboardYearSummary.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${incomeBudgetBalanceClass(dashboardYearPlannedNetCents)}">${centsToEuro(dashboardYearPlannedNetCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${incomeBudgetBalanceClass(dashboardYearActualNetCents)}">${centsToEuro(dashboardYearActualNetCents)}</div><div class="eval-value"></div></div>
                  </div>
                </section>
              </div>

              <div class="chart-grid">
                <section class="chart-tile chart-tile-trend">
                  <header class="chart-tile-header">
                    <div>
                      <h4>Kalkulierter Saldo-Trend ${dashboardYearTrendDirectionSymbol}</h4>
                      <div class="muted">Jahresübersicht auf Basis des monatlich kalkulierten Saldos.</div>
                    </div>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-net"></span>Kalkulierter Saldo</span>
                      <span class="trend-badge ${dashboardYearTrendDirectionClass}">${dashboardYearTrendDirectionSymbol} ${dashboardYearTrendDirectionLabel}</span>
                    </div>
                  </header>
                  ${
                    dashboardYearTrendDefaultRow
                      ? `
                        <div class="year-trend-chart" data-year-trend-chart>
                          <div class="year-trend-summary">
                            <div class="year-trend-summary-head">
                              <span class="year-trend-kicker">Aktiver Monat</span>
                              <strong data-year-trend-active-month>${escapeHtml(dashboardYearTrendDefaultRow.monthLabel)}</strong>
                            </div>
                            <div class="year-trend-metrics">
                              <div class="year-trend-metric">
                                <span>Kalkulierter Saldo</span>
                                <strong class="${incomeBudgetBalanceClass(dashboardYearTrendDefaultRow.plannedNetCents)}" data-year-trend-active-net>${centsToEuro(dashboardYearTrendDefaultRow.plannedNetCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Einkommen</span>
                                <strong data-year-trend-active-income>${centsToEuro(dashboardYearTrendDefaultRow.effectiveIncomeCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Ausgaben</span>
                                <strong data-year-trend-active-expense>${centsToEuro(dashboardYearTrendDefaultRow.actualCostCents)}</strong>
                              </div>
                              <div class="year-trend-metric">
                                <span>Δ zum Vormonat</span>
                                <strong class="${incomeBudgetBalanceClass(dashboardYearTrendDefaultRow.deltaCents)}" data-year-trend-active-delta>${dashboardYearTrendDefaultRow.deltaCents >= 0 ? "+" : ""}${centsToEuro(dashboardYearTrendDefaultRow.deltaCents)}</strong>
                              </div>
                            </div>
                          </div>
                          <div class="year-trend-visual">
                            <svg
                              class="year-trend-svg"
                              viewBox="0 0 ${dashboardYearTrendChartWidth} ${dashboardYearTrendChartHeight}"
                              role="img"
                              aria-label="Jahresübersicht des monatlich kalkulierten Saldos für ${dashboardYearBook?.year ?? ""}"
                              preserveAspectRatio="none"
                            >
                              <defs>
                                <linearGradient id="year-trend-fill-gradient" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stop-color="var(--primary-1)" stop-opacity="0.34"></stop>
                                  <stop offset="100%" stop-color="var(--primary-1)" stop-opacity="0"></stop>
                                </linearGradient>
                              </defs>
                              ${dashboardYearTrendTicks
                                .map(
                                  (tick) => `
                                    <g>
                                      <line class="year-trend-grid-line" x1="${dashboardYearTrendPaddingLeft}" y1="${tick.y.toFixed(1)}" x2="${dashboardYearTrendChartWidth - dashboardYearTrendPaddingRight}" y2="${tick.y.toFixed(1)}"></line>
                                      <text class="year-trend-axis-label" x="${dashboardYearTrendPaddingLeft - 10}" y="${(tick.y + 4).toFixed(1)}" text-anchor="end">${centsToEuro(tick.valueCents)}</text>
                                    </g>
                                  `,
                                )
                                .join("")}
                              <line class="year-trend-zero-line" x1="${dashboardYearTrendPaddingLeft}" y1="${dashboardYearTrendZeroLineY.toFixed(1)}" x2="${dashboardYearTrendChartWidth - dashboardYearTrendPaddingRight}" y2="${dashboardYearTrendZeroLineY.toFixed(1)}"></line>
                              ${
                                dashboardYearTrendAreaPath
                                  ? `<path class="year-trend-area" d="${dashboardYearTrendAreaPath}"></path>`
                                  : ""
                              }
                              ${
                                dashboardYearTrendLinePath
                                  ? `<path class="year-trend-line" d="${dashboardYearTrendLinePath}"></path>`
                                  : ""
                              }
                              ${dashboardYearTrendPoints
                                .map(
                                  (point) => `
                                    <circle class="year-trend-node ${point.plannedNetCents < 0 ? "is-negative" : ""}" cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="5"></circle>
                                    <text class="year-trend-month-label" x="${point.x.toFixed(1)}" y="${dashboardYearTrendChartHeight - 12}" text-anchor="middle">${escapeHtml(point.monthShortLabel)}</text>
                                  `,
                                )
                                .join("")}
                            </svg>
                            <div class="year-trend-point-layer" aria-hidden="true">
                              ${dashboardYearTrendPoints
                                .map(
                                  (point, index) => `
                                    <button
                                      class="year-trend-point-hit ${index === dashboardYearTrendPoints.length - 1 ? "is-active" : ""}"
                                      type="button"
                                      style="left:${point.leftPercent.toFixed(2)}%; top:${point.topPercent.toFixed(2)}%;"
                                      data-year-trend-point
                                      data-point-default="${index === dashboardYearTrendPoints.length - 1 ? "1" : "0"}"
                                      data-month-label="${escapeHtml(point.monthLabel)}"
                                      data-net-cents="${point.plannedNetCents}"
                                      data-actual-net-cents="${point.actualNetCents}"
                                      data-income-cents="${point.effectiveIncomeCents}"
                                      data-expense-cents="${point.actualCostCents}"
                                      data-delta-cents="${point.deltaCents}"
                                      aria-label="${escapeHtml(point.monthLabel)}: Kalkulierter Saldo ${centsToEuro(point.plannedNetCents)}, Einkommen ${centsToEuro(point.effectiveIncomeCents)}, Ausgaben ${centsToEuro(point.actualCostCents)}"
                                      aria-pressed="${index === dashboardYearTrendPoints.length - 1 ? "true" : "false"}"
                                    ></button>
                                  `,
                                )
                                .join("")}
                            </div>
                          </div>
                          <div class="year-trend-footer muted">Hover oder Tippen zeigt den kalkulierten Monatswert direkt im Chart an.</div>
                          <div class="year-trend-live" aria-live="polite" data-year-trend-live></div>
                        </div>
                      `
                      : '<p class="muted">Keine Monatsdaten vorhanden.</p>'
                  }
                </section>

                <section class="chart-tile">
                  <header class="chart-tile-header">
                    <h4>Budget vs. Ist nach Kategorie (Jahr)</h4>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-budget"></span>Budget</span>
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-actual"></span>Ist</span>
                    </div>
                  </header>
                  <div class="circle-chart-container" aria-label="Budgetnutzung je Kategorie (Jahr)">
                    ${dashboardYearCategoryRows
                      .map((row) => {
                        const usagePercentRaw = budgetUsagePercent(
                          row.actualCents,
                          row.budgetCents,
                        );
                        const ringPercent = Math.min(100, usagePercentRaw);
                        const usageText = `${usagePercentRaw.toFixed(0)}%`;
                        const diffCents = row.budgetCents - row.actualCents;
                        const diffClass =
                          diffCents < 0
                            ? "danger"
                            : diffCents > 0
                              ? "budget-under"
                              : "";
                        const ringClass =
                          budgetBarClass(row.budgetCents, row.actualCents) ===
                          "bar-negative"
                            ? "circle-negative"
                            : "circle-positive";

                        return `
                          <div class="circle-chart-item">
                            <div class="circle-chart-ring ${ringClass}" style="--circle-pct:${ringPercent.toFixed(1)}%" title="${row.label}: ${centsToEuro(row.actualCents)} von ${centsToEuro(row.budgetCents)}">
                              <span class="circle-chart-value">${usageText}</span>
                            </div>
                            <div class="circle-chart-label">${row.label}</div>
                            <div class="circle-chart-meta muted">B ${centsToEuro(row.budgetCents)} / I ${centsToEuro(row.actualCents)}</div>
                            <div class="circle-chart-meta ${diffClass}">${diffCents >= 0 ? "+" : ""}${centsToEuro(diffCents)}</div>
                          </div>
                        `;
                      })
                      .join("")}
                  </div>
                </section>

                <section class="chart-tile">
                  <header class="chart-tile-header">
                    <h4>Monatliche Ausgaben (Jahr)</h4>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-expense"></span>Ist-Kosten</span>
                    </div>
                  </header>
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(dashboardYearMonthlyRows.length, 1)}, minmax(0, 1fr));">
                    ${dashboardYearMonthlyRows
                      .map((row) => {
                        const height = percent(
                          row.actualCostCents,
                          dashboardYearExpenseMaxCents,
                        );
                        return `
                          <div class="spark-bar" title="${monthLabel(row.month)}: ${centsToEuro(row.actualCostCents)}">
                            <div class="spark-bar-fill" style="height:${height}"></div>
                            <div class="spark-bar-label">${monthLabel(row.month).slice(0, 3)}</div>
                          </div>
                        `;
                      })
                      .join("")}
                  </div>
                </section>

                <section class="chart-tile">
                  <header class="chart-tile-header">
                    <h4>Saldo pro Monat (Budget vs. Ist)</h4>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-budget"></span>Budget-Saldo</span>
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-net"></span>Ist-Saldo</span>
                    </div>
                  </header>
                  <div class="bar-chart">
                    ${dashboardYearMonthlyRows
                      .map((row) => {
                        const plannedWidth = percent(
                          Math.abs(row.plannedNetCents),
                          dashboardYearMonthlyNetMaxCents,
                        );
                        const actualWidth = percent(
                          Math.abs(row.actualNetCents),
                          dashboardYearMonthlyNetMaxCents,
                        );
                        const plannedClass =
                          row.plannedNetCents < 0
                            ? "bar-negative"
                            : "bar-positive";
                        const actualClass =
                          row.actualNetCents < 0
                            ? "bar-negative"
                            : "bar-positive";

                        return `
                          <div class="bar-row">
                            <div class="bar-label">${monthLabel(row.month)}</div>
                            <div class="bar-track" title="Budget-Saldo: ${centsToEuro(row.plannedNetCents)} | Ist-Saldo: ${centsToEuro(row.actualNetCents)}">
                              <div class="bar ${plannedClass}" style="width:${plannedWidth}; opacity: 0.35;"></div>
                              <div class="bar ${actualClass}" style="width:${actualWidth}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${incomeBudgetBalanceClass(row.plannedNetCents)}">B ${centsToEuro(row.plannedNetCents)}</span>
                              <span class="${incomeBudgetBalanceClass(row.actualNetCents)}">I ${centsToEuro(row.actualNetCents)}</span>
                            </div>
                          </div>
                        `;
                      })
                      .join("")}
                  </div>
                </section>
              </div>

              <table>
                <thead>
                  <tr>
                    <th>Monat</th>
                    <th>Einkommen effektiv (€)</th>
                    <th>Budget gesamt (€)</th>
                    <th>Ist-Kosten (€)</th>
                    <th>Saldo Budget (€)</th>
                    <th>Saldo Ist (€)</th>
                  </tr>
                </thead>
                <tbody>
                  ${dashboardYearMonthlyRows
                    .map(
                      (row) => `<tr>
                        <td>${monthLabel(row.month)}</td>
                        <td>${centsToEuro(row.effectiveIncomeCents)}</td>
                        <td>${centsToEuro(row.plannedBudgetCents)}</td>
                        <td>${centsToEuro(row.actualCostCents)}</td>
                        <td class="${incomeBudgetBalanceClass(row.plannedNetCents)}">${centsToEuro(row.plannedNetCents)}</td>
                        <td class="${incomeBudgetBalanceClass(row.actualNetCents)}">${centsToEuro(row.actualNetCents)}</td>
                      </tr>`,
                    )
                    .join("")}
                </tbody>
              </table>
            `
              : state.dashboardTab === "food"
                ? `
              <div class="inline">
                <label>
                  Jahr
                  <select id="dashboard-year-select">
                    ${sortedYears
                      .map(
                        (item) =>
                          `<option value="${item.year}" ${item.year === dashboardYearNumber ? "selected" : ""}>${item.year}</option>`,
                      )
                      .join("")}
                  </select>
                </label>
              </div>

              <div class="chart-grid">
                <section class="chart-tile">
                  <header class="chart-tile-header">
                    <h4>Essen + Ausgehen Gesamt</h4>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-expense"></span>Ist-Kosten</span>
                    </div>
                  </header>
                  <div class="spark-bars">
                    ${dashboardYearMonthlyRows
                      .map((row) => {
                        const height = percent(
                          row.foodAndGoingOutCents,
                          dashboardYearFoodAndGoingOutMaxCents,
                        );

                        return `
                          <div class="spark-bar" title="${monthLabel(row.month)}: ${centsToEuro(row.foodAndGoingOutCents)}">
                            <div class="spark-bar-fill" style="height:${height}"></div>
                            <div class="spark-bar-label">${monthLabel(row.month).slice(0, 3)}</div>
                          </div>
                        `;
                      })
                      .join("")}
                  </div>
                </section>

                <section class="chart-tile">
                  <header class="chart-tile-header">
                    <h4>Essen & Trinken</h4>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-expense"></span>Ist-Kosten</span>
                    </div>
                  </header>
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(dashboardYearMonthlyRows.length, 1)}, minmax(0, 1fr));">
                    ${dashboardYearMonthlyRows
                      .map((row) => {
                        const height = percent(
                          row.foodCents,
                          dashboardYearFoodMaxCents,
                        );

                        return `
                          <div class="spark-bar" title="${monthLabel(row.month)}: ${centsToEuro(row.foodCents)}">
                            <div class="spark-bar-fill" style="height:${height}"></div>
                            <div class="spark-bar-label">${monthLabel(row.month).slice(0, 3)}</div>
                          </div>
                        `;
                      })
                      .join("")}
                  </div>
                </section>

                <section class="chart-tile">
                  <header class="chart-tile-header">
                    <h4>Ausgehen</h4>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-expense"></span>Ist-Kosten</span>
                    </div>
                  </header>
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(dashboardYearMonthlyRows.length, 1)}, minmax(0, 1fr));">
                    ${dashboardYearMonthlyRows
                      .map((row) => {
                        const height = percent(
                          row.goingOutCents,
                          dashboardYearGoingOutMaxCents,
                        );

                        return `
                          <div class="spark-bar" title="${monthLabel(row.month)}: ${centsToEuro(row.goingOutCents)}">
                            <div class="spark-bar-fill" style="height:${height}"></div>
                            <div class="spark-bar-label">${monthLabel(row.month).slice(0, 3)}</div>
                          </div>
                        `;
                      })
                      .join("")}
                  </div>
                </section>
              </div>
            `
                : `
              <div class="eval-grid">
                <section class="eval-tile">
                  <header class="eval-tile-header">
                    <h4>Kennzahlen über alle Jahre</h4>
                    <div class="eval-tile-columns"><span>Wert</span><span></span></div>
                  </header>
                  <div class="eval-rows">
                    <div class="eval-row"><div class="eval-label">Einkommen effektiv</div><div class="eval-value">${centsToEuro(allYearsEffectiveIncomeCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Budget gesamt</div><div class="eval-value">${centsToEuro(allYearsBudgetTotals.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row"><div class="eval-label">Ausgaben gesamt</div><div class="eval-value">${centsToEuro(allYearsActualTotals.totalCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Budget)</div><div class="eval-value ${incomeBudgetBalanceClass(allYearsPlannedNetCents)}">${centsToEuro(allYearsPlannedNetCents)}</div><div class="eval-value"></div></div>
                    <div class="eval-row eval-strong"><div class="eval-label">Saldo (gegen Ist)</div><div class="eval-value ${incomeBudgetBalanceClass(allYearsActualNetCents)}">${centsToEuro(allYearsActualNetCents)}</div><div class="eval-value"></div></div>
                  </div>
                </section>
              </div>

              <div class="chart-grid">
                <section class="chart-tile">
                  <header class="chart-tile-header">
                    <h4>Kategorien über alle Jahre</h4>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-budget"></span>Budget</span>
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-actual"></span>Ist</span>
                    </div>
                  </header>
                  <div class="bar-chart">
                    ${allYearsCategoryRows
                      .map((row) => {
                        const budgetWidth = percent(
                          row.budgetCents,
                          allYearsCategoryMaxCents,
                        );
                        const actualWidth = percent(
                          row.actualCents,
                          allYearsCategoryMaxCents,
                        );
                        const actualClass = budgetBarClass(
                          row.budgetCents,
                          row.actualCents,
                        );

                        return `
                          <div class="bar-row">
                            <div class="bar-label">${row.label}</div>
                            <div class="bar-track" title="Budget: ${centsToEuro(row.budgetCents)} | Ist: ${centsToEuro(row.actualCents)}">
                              <div class="bar bar-budget" style="width:${budgetWidth}"></div>
                              <div class="bar-marker" style="left:${budgetWidth}" aria-hidden="true"></div>
                              <div class="bar bar-actual ${actualClass}" style="width:${actualWidth}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="muted">B ${centsToEuro(row.budgetCents)}</span>
                              <span class="muted">I ${centsToEuro(row.actualCents)}</span>
                            </div>
                          </div>
                        `;
                      })
                      .join("")}
                  </div>
                </section>

                <section class="chart-tile">
                  <header class="chart-tile-header">
                    <h4>Ist-Kosten pro Jahr</h4>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-expense"></span>Ist-Kosten</span>
                    </div>
                  </header>
                  <div class="spark-bars" style="grid-template-columns: repeat(${Math.max(allYearsRows.length, 1)}, minmax(0, 1fr));">
                    ${allYearsRows
                      .map((row) => {
                        const height = percent(
                          row.actualTotalCents,
                          allYearsExpenseMaxCents,
                        );
                        return `
                          <div class="spark-bar" title="${row.year}: ${centsToEuro(row.actualTotalCents)}">
                            <div class="spark-bar-fill" style="height:${height}"></div>
                            <div class="spark-bar-label">${row.year}</div>
                          </div>
                        `;
                      })
                      .join("")}
                  </div>
                </section>

                <section class="chart-tile">
                  <header class="chart-tile-header">
                    <h4>Saldo pro Jahr (Budget vs. Ist)</h4>
                    <div class="chart-legend">
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-budget"></span>Budget-Saldo</span>
                      <span class="chart-legend-item"><span class="chart-dot chart-dot-net"></span>Ist-Saldo</span>
                    </div>
                  </header>
                  <div class="bar-chart">
                    ${allYearsRows
                      .map((row) => {
                        const plannedWidth = percent(
                          Math.abs(row.plannedNetCents),
                          allYearsNetMaxCents,
                        );
                        const actualWidth = percent(
                          Math.abs(row.actualNetCents),
                          allYearsNetMaxCents,
                        );
                        const plannedClass =
                          row.plannedNetCents < 0
                            ? "bar-negative"
                            : "bar-positive";
                        const actualClass =
                          row.actualNetCents < 0
                            ? "bar-negative"
                            : "bar-positive";

                        return `
                          <div class="bar-row">
                            <div class="bar-label">${row.year}</div>
                            <div class="bar-track" title="Budget-Saldo: ${centsToEuro(row.plannedNetCents)} | Ist-Saldo: ${centsToEuro(row.actualNetCents)}">
                              <div class="bar ${plannedClass}" style="width:${plannedWidth}; opacity: 0.35;"></div>
                              <div class="bar ${actualClass}" style="width:${actualWidth}"></div>
                            </div>
                            <div class="bar-meta">
                              <span class="${incomeBudgetBalanceClass(row.plannedNetCents)}">B ${centsToEuro(row.plannedNetCents)}</span>
                              <span class="${incomeBudgetBalanceClass(row.actualNetCents)}">I ${centsToEuro(row.actualNetCents)}</span>
                            </div>
                          </div>
                        `;
                      })
                      .join("")}
                  </div>
                </section>
              </div>

              <table>
                <thead>
                  <tr>
                    <th>Jahr</th>
                    <th>Gehalt (€)</th>
                    <th>Einkommen effektiv (€)</th>
                    <th>Budget gesamt (€)</th>
                    <th>Ist-Kosten (€)</th>
                    <th>Saldo Budget (€)</th>
                    <th>Saldo Ist (€)</th>
                  </tr>
                </thead>
                <tbody>
                  ${allYearsRows
                    .map(
                      (row) => `<tr>
                        <td>${row.year}</td>
                        <td>${centsToEuro(row.salaryIncomeCents)}</td>
                        <td>${centsToEuro(row.effectiveIncomeCents)}</td>
                        <td>${centsToEuro(row.budgetTotalCents)}</td>
                        <td>${centsToEuro(row.actualTotalCents)}</td>
                        <td class="${incomeBudgetBalanceClass(row.plannedNetCents)}">${centsToEuro(row.plannedNetCents)}</td>
                        <td class="${incomeBudgetBalanceClass(row.actualNetCents)}">${centsToEuro(row.actualNetCents)}</td>
                      </tr>`,
                    )
                    .join("")}
                </tbody>
              </table>
            `
        }
      </div>
    `;

    const yearsPanelHtml = `
      <div class="grid">
        <div class="inline">
          <label>
            Neues Jahr
            <input id="new-year" type="number" min="2000" max="2100" value="${new Date().getFullYear()}" />
          </label>
          <button class="btn btn-primary" id="create-year">Jahr anlegen (12 Monate automatisch)</button>
        </div>
      </div>
    `;

    const fixedTemplatesPanelHtml = `
      <div class="grid">
        <div class="inline">
          <label>
            Name
            <input id="fixed-template-name" type="text" placeholder="z.B. Miete" value="${editingFixedTemplate?.name ?? ""}" />
          </label>
          <label>
            Betrag (€)
            <input class="amount-input" id="fixed-template-amount" type="number" min="0" step="0.01" value="${editingFixedTemplate ? centsToEuroInput(editingFixedTemplate.plannedCents) : ""}" />
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
      </div>
    `;

    const annualVariableFixedTotalCents =
      state.annualVariableFixedTemplates.reduce(
        (sum, template) => sum + template.plannedCents,
        0,
      );
    const annualVariableFixedMonthlyAverageCents = Math.round(
      annualVariableFixedTotalCents / 12,
    );

    const annualVariableFixedTemplatesPanelHtml = `
      <div class="grid">
        <div class="inline">
          <label>
            Name
            <input id="annual-variable-fixed-name" type="text" placeholder="z.B. Versicherungsnachzahlung" />
          </label>
          <label>
            Datum
            <input id="annual-variable-fixed-date" type="date" />
          </label>
          <label>
            Betrag (€)
            <input class="amount-input" id="annual-variable-fixed-amount" type="number" min="0" step="0.01" placeholder="0.00" />
          </label>
          <button class="btn btn-primary" id="add-annual-variable-fixed-template">Vorlage speichern</button>
        </div>

        <div class="eval-grid">
          <section class="eval-tile">
            <header class="eval-tile-header">
              <h4>Summenübersicht</h4>
              <div class="eval-tile-columns"><span>Wert</span><span></span></div>
            </header>
            <div class="eval-rows">
              <div class="eval-row eval-strong">
                <div class="eval-label">Gesamtsumme Variable Fixkosten (jährlich)</div>
                <div class="eval-value budget-under">${centsToEuro(annualVariableFixedTotalCents)}</div>
                <div class="eval-value"></div>
              </div>
              <div class="eval-row eval-strong">
                <div class="eval-label">Durchschnitt pro Monat (12 Monate)</div>
                <div class="eval-value">${centsToEuro(annualVariableFixedMonthlyAverageCents)}</div>
                <div class="eval-value"></div>
              </div>
            </div>
          </section>
        </div>

        <table>
          <thead>
            <tr><th>Name</th><th>Datum</th><th>Monat (jährlich)</th><th>Betrag (€)</th><th></th></tr>
          </thead>
          <tbody>
            ${state.annualVariableFixedTemplates
              .map((template) => {
                const parsedDate = parseDueDateParts(template.dueDateIso);
                const monthText = parsedDate
                  ? monthLabel(parsedDate.month)
                  : "-";
                return `<tr>
                    <td>${template.name}</td>
                    <td>${template.dueDateIso}</td>
                    <td>${monthText}</td>
                    <td>${centsToEuro(template.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-annual-variable-fixed-template="${template.id}">Löschen</button></td>
                  </tr>`;
              })
              .join("")}
          </tbody>
        </table>
      </div>
    `;

    const modalTitle =
      state.topModal === "years"
        ? "Jahr hinzufügen"
        : state.topModal === "fixed"
          ? "Fixe Kosten (zentral)"
          : state.topModal === "variable-fixed"
            ? "Variable Fixkosten"
            : state.topModal === "dashboard"
              ? "Dashboard"
              : "";

    const modalBody =
      state.topModal === "years"
        ? yearsPanelHtml
        : state.topModal === "fixed"
          ? fixedTemplatesPanelHtml
          : state.topModal === "variable-fixed"
            ? annualVariableFixedTemplatesPanelHtml
            : state.topModal === "dashboard"
              ? dashboardPanelHtml
              : "";

    root.innerHTML = `
      <div class="app grid">
        <div class="app-header inline">
          <h1 class="app-title">Haushaltsbuch (HaBu)</h1>
          <div class="header-actions inline">
            ${showUnexportedChangesHint ? `<button class="export-warning export-warning-button" id="open-unexported-change-log" type="button">Änderungen noch nicht gesichert (${state.unexportedChangeLog.length})</button>` : ""}
            <label>
              Theme
              <select id="theme-select">
                ${AVAILABLE_THEMES.map(
                  (theme) =>
                    `<option value="${theme}" ${state.theme === theme ? "selected" : ""}>${themeLabel(theme)}</option>`,
                ).join("")}
              </select>
            </label>
          </div>
        </div>

        <div class="top-shortcuts" role="navigation" aria-label="Schnellzugriff">
          <button class="btn" id="open-years-modal" type="button">Jahr hinzufügen</button>
          <button class="btn" id="open-fixed-modal" type="button">Fixe Kosten (zentral)</button>
          <button class="btn" id="open-variable-fixed-modal" type="button">Variable Fixkosten</button>
          <button class="btn" id="open-dashboard-modal" type="button">Dashboard</button>
          <a class="btn" href="#section-food-costs">Essen</a>
          <a class="btn" href="#section-fixed-costs">Fixe</a>
          <a class="btn" href="#section-variable-costs">Variable</a>
          <a class="btn" href="#section-misc-costs">Sonstige</a>
        </div>

        ${
          state.topModal
            ? `
            <div class="panel-modal-backdrop" id="panel-modal-backdrop" role="dialog" aria-modal="true" aria-label="${modalTitle}">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>${modalTitle}</h2>
                  <button class="btn btn-quiet" id="panel-modal-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${modalBody}
                </div>
              </div>
            </div>
          `
            : ""
        }

        ${
          state.showUnexportedChangeLogModal
            ? `
            <div class="panel-modal-backdrop" id="unexported-change-log-backdrop" role="dialog" aria-modal="true" aria-label="Ungesicherte Änderungen">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>Ungesicherte Änderungen</h2>
                  <button class="btn btn-quiet" id="unexported-change-log-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${
                    unexportedChangeLogForDisplay.length === 0
                      ? '<p class="muted">Keine ungesicherten Änderungen vorhanden.</p>'
                      : `<ol class="change-log-list">${unexportedChangeLogForDisplay
                          .map(
                            (entry) =>
                              `<li><strong>${new Date(entry.timestampIso).toLocaleString("de-DE")}</strong><span>${escapeHtml(entry.message)}</span></li>`,
                          )
                          .join("")}</ol>`
                  }
                  <div class="inline">
                    <button class="btn btn-primary" id="unexported-change-log-backup" type="button">Backup jetzt erstellen</button>
                  </div>
                </div>
              </div>
            </div>
          `
            : ""
        }

        ${
          state.showPersistentAuditLogModal
            ? `
            <div class="panel-modal-backdrop" id="persistent-audit-log-backdrop" role="dialog" aria-modal="true" aria-label="Chronik aller Erfassungen">
              <div class="panel-modal card">
                <div class="panel-modal-header inline">
                  <h2>Chronik aller Erfassungen</h2>
                  <button class="btn btn-quiet" id="persistent-audit-log-close" type="button">Schließen</button>
                </div>
                <div class="panel-modal-body">
                  ${
                    persistentAuditLogForDisplay.length === 0
                      ? '<p class="muted">Noch keine Einträge in der Chronik vorhanden.</p>'
                      : `<ol class="change-log-list">${persistentAuditLogForDisplay
                          .map(
                            (entry) =>
                              `<li><strong>${new Date(entry.timestampIso).toLocaleString("de-DE")}</strong><span>${escapeHtml(entry.message)}</span></li>`,
                          )
                          .join("")}</ol>`
                  }
                </div>
              </div>
            </div>
          `
            : ""
        }

        <section class="card grid">
          <div class="month-year-sticky">
            <h2>Monat: ${year ? `${monthLabel(state.selectedMonth)} ${year.year}` : "-"}</h2>
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
          </div>

          <article class="card">
            <h3>Auswertung (Monat & Jahr)</h3>
            <div class="chart-grid chart-grid-wide">
              <section class="chart-tile">
                <header class="chart-tile-header">
                  <h4>Budget vs. Ist (Monat)</h4>
                  <div class="chart-legend">
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-budget"></span>Budget</span>
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-actual"></span>Ist</span>
                  </div>
                </header>
                <div class="budget-canvas-grid">
                  ${budgetVsActualChartRows
                    .map((row) => {
                      return `
                        <div class="budget-canvas-card">
                          <canvas
                            class="budget-vs-canvas"
                            data-budget-vs-canvas="1"
                            data-label="${row.label}"
                            data-budget-cents="${row.budgetCents}"
                            data-actual-cents="${row.actualCents}"
                            role="img"
                            aria-label="${row.label}: Budget ${centsToEuro(row.budgetCents)} €, Ist ${centsToEuro(row.actualCents)} €"
                          ></canvas>
                        </div>
                      `;
                    })
                    .join("")}
                </div>
              </section>

              <section class="chart-tile">
                <header class="chart-tile-header">
                  <h4>Einkommen / Ausgaben / Netto (Monat)</h4>
                  <div class="chart-legend">
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-income"></span>Einkommen</span>
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-budget"></span>Budget</span>
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-expense"></span>Ausgaben</span>
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-net"></span>Netto</span>
                  </div>
                </header>
                <div class="bar-chart">
                  ${incomeExpenseChartRows
                    .map((row) => {
                      const width = percent(
                        Math.abs(row.valueCents),
                        incomeExpenseMaxCents,
                      );
                      const sign = row.valueCents >= 0 ? "+" : "";
                      const valueClass =
                        row.label === "Netto"
                          ? row.valueCents < 0
                            ? "danger"
                            : row.valueCents > 0
                              ? "budget-under"
                              : ""
                          : "";

                      return `
                        <div class="bar-row">
                          <div class="bar-label">${row.label}</div>
                          <div class="bar-track" title="${centsToEuro(row.valueCents)}">
                            <div class="bar ${row.className}" style="width:${width}"></div>
                          </div>
                          <div class="bar-meta"><span class="${valueClass}">${sign}${centsToEuro(row.valueCents)}</span></div>
                        </div>
                      `;
                    })
                    .join("")}
                </div>
              </section>

              <section class="chart-tile">
                <header class="chart-tile-header">
                  <h4>Jahresverlauf Gesamtausgaben</h4>
                  <div class="chart-legend">
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-budget"></span>Budget</span>
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-expense"></span>Ist</span>
                  </div>
                </header>
                ${
                  year
                    ? `
                    <div class="spark-bars" aria-label="Jahresverlauf Gesamtausgaben (Budget vs. Ist)">
                      ${yearByMonth
                        .map((row) => {
                          const plannedCents =
                            yearPlannedByMonthMap.get(row.month)
                              ?.totalBudgetCents ?? 0;
                          const plannedHeight = percent(
                            plannedCents,
                            yearTotalMaxCents,
                          );
                          const actualHeight = percent(
                            row.summary.totalCents,
                            yearTotalMaxCents,
                          );
                          return `
                            <div class="spark-bar" title="${monthLabel(row.month)}: Ist ${centsToEuro(row.summary.totalCents)} € | Budget ${centsToEuro(plannedCents)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${plannedHeight}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${actualHeight}"><span class="spark-bar-fill-value">${centsToEuro(row.summary.totalCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${monthLabel(row.month).slice(0, 3)}</div>
                            </div>
                          `;
                        })
                        .join("")}
                    </div>
                  `
                    : `<p class="muted">Kein Jahr gewählt.</p>`
                }
              </section>

              <section class="chart-tile">
                <header class="chart-tile-header">
                  <h4>Essen + Ausgehen (Jahr)</h4>
                  <div class="chart-legend">
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-budget"></span>Budget</span>
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-expense"></span>Ist</span>
                  </div>
                </header>
                ${
                  year
                    ? `
                    <div class="spark-bars" aria-label="Jahresverlauf Essen und Ausgehen (Budget vs. Ist)">
                      ${yearByMonth
                        .map((row) => {
                          const plannedRow = yearPlannedByMonthMap.get(
                            row.month,
                          );
                          const plannedCents =
                            (plannedRow?.foodBudgetCents ?? 0) +
                            (plannedRow?.goingOutBudgetCents ?? 0);
                          const actualCents =
                            row.summary.foodCents + row.summary.goingOutCents;
                          const plannedHeight = percent(
                            plannedCents,
                            yearFoodAndGoingOutMaxCents,
                          );
                          const actualHeight = percent(
                            actualCents,
                            yearFoodAndGoingOutMaxCents,
                          );
                          return `
                            <div class="spark-bar" title="${monthLabel(row.month)}: Ist ${centsToEuro(actualCents)} € | Budget ${centsToEuro(plannedCents)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${plannedHeight}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${actualHeight}"><span class="spark-bar-fill-value">${centsToEuro(actualCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${monthLabel(row.month).slice(0, 3)}</div>
                            </div>
                          `;
                        })
                        .join("")}
                    </div>
                  `
                    : `<p class="muted">Kein Jahr gewählt.</p>`
                }
              </section>

              <section class="chart-tile">
                <header class="chart-tile-header">
                  <h4>Fixe Kosten (Jahr)</h4>
                  <div class="chart-legend">
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-budget"></span>Budget</span>
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-expense"></span>Ist</span>
                  </div>
                </header>
                ${
                  year
                    ? `
                    <div class="spark-bars" aria-label="Jahresverlauf Fixkosten (Budget vs. Ist)">
                      ${yearByMonth
                        .map((row) => {
                          const plannedCents =
                            yearPlannedByMonthMap.get(row.month)
                              ?.fixedBudgetCents ?? 0;
                          const plannedHeight = percent(
                            plannedCents,
                            yearFixedMaxCents,
                          );
                          const actualHeight = percent(
                            row.summary.fixedCents,
                            yearFixedMaxCents,
                          );
                          return `
                            <div class="spark-bar" title="${monthLabel(row.month)}: Ist ${centsToEuro(row.summary.fixedCents)} € | Budget ${centsToEuro(plannedCents)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${plannedHeight}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${actualHeight}"><span class="spark-bar-fill-value">${centsToEuro(row.summary.fixedCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${monthLabel(row.month).slice(0, 3)}</div>
                            </div>
                          `;
                        })
                        .join("")}
                    </div>
                  `
                    : `<p class="muted">Kein Jahr gewählt.</p>`
                }
              </section>

              <section class="chart-tile">
                <header class="chart-tile-header">
                  <h4>Variable Kosten (Jahr)</h4>
                  <div class="chart-legend">
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-budget"></span>Budget</span>
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-expense"></span>Ist</span>
                  </div>
                </header>
                ${
                  year
                    ? `
                    <div class="spark-bars" aria-label="Jahresverlauf Variable Kosten (Budget vs. Ist)">
                      ${yearByMonth
                        .map((row) => {
                          const plannedCents =
                            yearPlannedByMonthMap.get(row.month)
                              ?.variableBudgetCents ?? 0;
                          const plannedHeight = percent(
                            plannedCents,
                            yearVariableMaxCents,
                          );
                          const actualHeight = percent(
                            row.summary.variableCents,
                            yearVariableMaxCents,
                          );
                          return `
                            <div class="spark-bar" title="${monthLabel(row.month)}: Ist ${centsToEuro(row.summary.variableCents)} € | Budget ${centsToEuro(plannedCents)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${plannedHeight}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${actualHeight}"><span class="spark-bar-fill-value">${centsToEuro(row.summary.variableCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${monthLabel(row.month).slice(0, 3)}</div>
                            </div>
                          `;
                        })
                        .join("")}
                    </div>
                  `
                    : `<p class="muted">Kein Jahr gewählt.</p>`
                }
              </section>

              <section class="chart-tile">
                <header class="chart-tile-header">
                  <h4>Sonstige (Jahr)</h4>
                  <div class="chart-legend">
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-budget"></span>Budget</span>
                    <span class="chart-legend-item"><span class="chart-dot chart-dot-expense"></span>Ist</span>
                  </div>
                </header>
                ${
                  year
                    ? `
                    <div class="spark-bars" aria-label="Jahresverlauf Sonstige (Budget vs. Ist)">
                      ${yearByMonth
                        .map((row) => {
                          const plannedCents =
                            yearPlannedByMonthMap.get(row.month)
                              ?.miscBudgetCents ?? 0;
                          const plannedHeight = percent(
                            plannedCents,
                            yearMiscMaxCents,
                          );
                          const actualHeight = percent(
                            row.summary.miscCents,
                            yearMiscMaxCents,
                          );
                          return `
                            <div class="spark-bar" title="${monthLabel(row.month)}: Ist ${centsToEuro(row.summary.miscCents)} € | Budget ${centsToEuro(plannedCents)} €">
                              <div class="spark-bar-stack">
                                <div class="spark-bar-track" aria-hidden="true">
                                  <div class="spark-bar-fill spark-bar-fill-budget spark-bar-fill-layered" style="height:${plannedHeight}"></div>
                                  <div class="spark-bar-fill spark-bar-fill-layered spark-bar-fill-actual" style="height:${actualHeight}"><span class="spark-bar-fill-value">${centsToEuro(row.summary.miscCents)} €</span></div>
                                </div>
                              </div>
                              <div class="spark-bar-label">${monthLabel(row.month).slice(0, 3)}</div>
                            </div>
                          `;
                        })
                        .join("")}
                    </div>
                  `
                    : `<p class="muted">Kein Jahr gewählt.</p>`
                }
              </section>
            </div>
            <div class="eval-grid">
              <section class="eval-tile">
                <header class="eval-tile-header">
                  <h4>Einkommen</h4>
                  <div class="eval-tile-columns"><span>Monat</span><span>Jahr</span></div>
                </header>
                <div class="eval-rows">
                  <div class="eval-row">
                    <div class="eval-label">Einkommen (erfasst)</div>
                    <div class="eval-value">${centsToEuro(recordedIncomeTotalCents)}</div>
                    <div class="eval-value">${centsToEuro(yearRecordedIncomeTotalCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon Gehalt</div>
                    <div class="eval-value">${centsToEuro(monthSalaryIncomeCents)}</div>
                    <div class="eval-value">${centsToEuro(yearSalaryIncomeCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Davon frisches Einkommen (ohne Gehalt)</div>
                    <div class="eval-value">${centsToEuro(monthFreshIncomeCents)}</div>
                    <div class="eval-value">${centsToEuro(yearFreshIncomeCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Übernahme aus Vormonat</div>
                    <div class="eval-value ${carryoverClass}">${hasCarryoverFromPreviousMonth ? centsToEuro(carryoverCents) : "-"}</div>
                    <div class="eval-value ${yearOpeningCarryoverClass}">${year ? centsToEuro(yearOpeningCarryoverCents) : "-"}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen gesamt</div>
                    <div class="eval-value">${centsToEuro(effectiveIncomeTotalCents)}</div>
                    <div class="eval-value">${centsToEuro(yearEffectiveIncomeTotalCents)}</div>
                  </div>
                </div>
              </section>

              <section class="eval-tile">
                <header class="eval-tile-header">
                  <h4>Budgets (geplant)</h4>
                  <div class="eval-tile-columns"><span>Monat</span><span>Jahr</span></div>
                </header>
                <div class="eval-rows">
                  <div class="eval-row">
                    <div class="eval-label">Essen</div>
                    <div class="eval-value">${renderPlannedWithDiff(foodBudgetCents, monthSummary.foodCents)}</div>
                    <div class="eval-value">${centsToEuro(yearFoodBudgetCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value">${renderPlannedWithDiff(goingOutBudgetCents, monthSummary.goingOutCents)}</div>
                    <div class="eval-value">${centsToEuro(yearGoingOutBudgetCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value">${renderPlannedWithDiff(fixedBudgetCents, monthSummary.fixedCents)}</div>
                    <div class="eval-value">${centsToEuro(yearFixedBudgetCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value">${renderPlannedWithDiff(variableBudgetCents, monthSummary.variableCents)}</div>
                    <div class="eval-value">${centsToEuro(yearVariableBudgetCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value">${renderPlannedWithDiff(miscBudgetCents, monthSummary.miscCents)}</div>
                    <div class="eval-value">${centsToEuro(yearMiscBudgetCents)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budgets gesamt</div>
                    <div class="eval-value">${renderPlannedWithDiff(monthPlannedBudgetTotalCents, monthSummary.totalCents)}</div>
                    <div class="eval-value">${centsToEuro(yearPlannedBudgetTotalCents)}</div>
                  </div>
                </div>
              </section>

              <section class="eval-tile">
                <header class="eval-tile-header">
                  <h4>Realkosten (Ist)</h4>
                  <div class="eval-tile-columns"><span>Monat</span><span>Jahr</span></div>
                </header>
                <div class="eval-rows">
                  <div class="eval-row">
                    <div class="eval-label">Essen</div>
                    <div class="eval-value ${foodSummaryBudgetClass}">${centsToEuro(monthSummary.foodCents)}</div>
                    <div class="eval-value">${centsToEuro(yearSummary.foodCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Ausgehen</div>
                    <div class="eval-value ${goingOutSummaryBudgetClass}">${centsToEuro(monthSummary.goingOutCents)}</div>
                    <div class="eval-value">${centsToEuro(yearSummary.goingOutCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Fixkosten</div>
                    <div class="eval-value ${fixedSummaryBudgetClass}">${centsToEuro(monthSummary.fixedCents)}</div>
                    <div class="eval-value">${centsToEuro(yearSummary.fixedCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Variable</div>
                    <div class="eval-value ${variableSummaryBudgetClass}">${centsToEuro(monthSummary.variableCents)}</div>
                    <div class="eval-value">${centsToEuro(yearSummary.variableCents)}</div>
                  </div>
                  <div class="eval-row">
                    <div class="eval-label">Sonstige</div>
                    <div class="eval-value ${miscSummaryBudgetClass}">${centsToEuro(monthSummary.miscCents)}</div>
                    <div class="eval-value">${centsToEuro(yearSummary.miscCents)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gesamt</div>
                    <div class="eval-value">${centsToEuro(monthSummary.totalCents)}</div>
                    <div class="eval-value">${centsToEuro(yearSummary.totalCents)}</div>
                  </div>
                </div>
              </section>

              <section class="eval-tile">
                <header class="eval-tile-header">
                  <h4>Salden</h4>
                  <div class="eval-tile-columns"><span>Monat</span><span>Jahr</span></div>
                </header>
                <div class="eval-rows">
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Budget übrig</div>
                    <div class="eval-value ${incomeBudgetBalanceClass(monthBudgetRemainingCents)}">${centsToEuro(monthBudgetRemainingCents)}</div>
                    <div class="eval-value ${incomeBudgetBalanceClass(yearBudgetRemainingCents)}">${centsToEuro(yearBudgetRemainingCents)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einkommen - Budgets gesamt</div>
                    <div class="eval-value ${incomeBudgetBalanceClass(incomeMinusPlannedBudgetsCents)}">${centsToEuro(incomeMinusPlannedBudgetsCents)}</div>
                    <div class="eval-value ${incomeBudgetBalanceClass(yearIncomeMinusPlannedBudgetsCents)}">${centsToEuro(yearIncomeMinusPlannedBudgetsCents)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Einnahmen - echte Ausgaben</div>
                    <div class="eval-value ${monthActualNetClass}">${centsToEuro(monthActualNetCents)}</div>
                    <div class="eval-value ${yearNetClass}">${centsToEuro(yearNetCents)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt - Ausgaben</div>
                    <div class="eval-value ${incomeBudgetBalanceClass(monthSalaryMinusExpensesCents)}">${centsToEuro(monthSalaryMinusExpensesCents)}</div>
                    <div class="eval-value ${incomeBudgetBalanceClass(yearSalaryMinusExpensesCents)}">${centsToEuro(yearSalaryMinusExpensesCents)}</div>
                  </div>
                  <div class="eval-row eval-strong">
                    <div class="eval-label">Gehalt vs. Ausgaben (%)</div>
                    <div class="eval-value ${monthSalaryCoverageClass}">${monthSalaryVsExpensesPercent}</div>
                    <div class="eval-value ${yearSalaryCoverageClass}">${yearSalaryVsExpensesPercent}</div>
                  </div>
                </div>
              </section>
            </div>

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
                  <th>Gehalt (€)</th>
                  <th>Budget gesamt (€)</th>
                  <th>Kalkulierter Saldo (€)</th>
                </tr>
              </thead>
              <tbody>
                ${yearByMonth
                  .map((row, index, rows) => {
                    const rowIncomeFlow = year
                      ? incomeFlowByMonth.get(monthKey(year.year, row.month))
                      : undefined;
                    const rowPlannedBudgetCents =
                      rowIncomeFlow?.plannedBudgetCents ?? 0;
                    const rowNetCents = rowIncomeFlow?.netCents ?? 0;
                    const rowSalaryCents =
                      yearSalaryByMonthMap.get(row.month) ?? 0;
                    const rowNetClass =
                      rowNetCents < 0
                        ? "danger"
                        : rowNetCents > 0
                          ? "budget-under"
                          : "";
                    const previousRow = rows[index - 1];

                    const previousFoodCents =
                      previousRow?.summary.foodCents ?? null;
                    const previousGoingOutCents =
                      previousRow?.summary.goingOutCents ?? null;
                    const previousFixedCents =
                      previousRow?.summary.fixedCents ?? null;
                    const previousVariableCents =
                      previousRow?.summary.variableCents ?? null;
                    const previousMiscCents =
                      previousRow?.summary.miscCents ?? null;
                    const previousTotalCents =
                      previousRow?.summary.totalCents ?? null;
                    const previousSalaryCents =
                      previousRow !== undefined
                        ? (yearSalaryByMonthMap.get(previousRow.month) ?? 0)
                        : null;
                    const previousBudgetCents =
                      year && previousRow
                        ? (incomeFlowByMonth.get(
                            monthKey(year.year, previousRow.month),
                          )?.plannedBudgetCents ?? 0)
                        : null;

                    const foodDiffCents =
                      previousFoodCents === null
                        ? null
                        : row.summary.foodCents - previousFoodCents;
                    const goingOutDiffCents =
                      previousGoingOutCents === null
                        ? null
                        : row.summary.goingOutCents - previousGoingOutCents;
                    const fixedDiffCents =
                      previousFixedCents === null
                        ? null
                        : row.summary.fixedCents - previousFixedCents;
                    const variableDiffCents =
                      previousVariableCents === null
                        ? null
                        : row.summary.variableCents - previousVariableCents;
                    const miscDiffCents =
                      previousMiscCents === null
                        ? null
                        : row.summary.miscCents - previousMiscCents;
                    const totalDiffCents =
                      previousTotalCents === null
                        ? null
                        : row.summary.totalCents - previousTotalCents;
                    const salaryDiffCents =
                      previousSalaryCents === null
                        ? null
                        : rowSalaryCents - previousSalaryCents;
                    const budgetDiffCents =
                      previousBudgetCents === null
                        ? null
                        : rowPlannedBudgetCents - previousBudgetCents;

                    const costDiffClass = (value: number | null): string =>
                      value === null
                        ? "muted"
                        : value > 0
                          ? "danger"
                          : value < 0
                            ? "budget-under"
                            : "muted";
                    const incomeDiffClass = (value: number | null): string =>
                      value === null
                        ? "muted"
                        : value > 0
                          ? "budget-under"
                          : value < 0
                            ? "danger"
                            : "muted";
                    const budgetDiffClass = (value: number | null): string =>
                      value === null
                        ? "muted"
                        : value > 0
                          ? "danger"
                          : value < 0
                            ? "budget-under"
                            : "muted";
                    const diffLabel = (value: number | null): string =>
                      value === null
                        ? "(Δ -)"
                        : `(Δ ${value > 0 ? "+" : ""}${centsToEuro(value)})`;

                    const previousNetCents =
                      year && previousRow
                        ? (incomeFlowByMonth.get(
                            monthKey(year.year, previousRow.month),
                          )?.netCents ?? 0)
                        : null;
                    const monthDiffCents =
                      previousNetCents === null
                        ? null
                        : rowNetCents - previousNetCents;
                    const monthDiffLabel =
                      monthDiffCents === null
                        ? "(Δ -)"
                        : `(Δ ${monthDiffCents > 0 ? "+" : ""}${centsToEuro(monthDiffCents)})`;
                    const monthDiffClass =
                      monthDiffCents === null
                        ? "muted"
                        : monthDiffCents < 0
                          ? "danger"
                          : monthDiffCents > 0
                            ? "budget-under"
                            : "muted";

                    return `<tr>
                  <td>${monthLabel(row.month)}</td>
                  <td>${centsToEuro(row.summary.foodCents)} <span class="${costDiffClass(foodDiffCents)}">${diffLabel(foodDiffCents)}</span></td>
                  <td>${centsToEuro(row.summary.goingOutCents)} <span class="${costDiffClass(goingOutDiffCents)}">${diffLabel(goingOutDiffCents)}</span></td>
                  <td>${centsToEuro(row.summary.fixedCents)} <span class="${costDiffClass(fixedDiffCents)}">${diffLabel(fixedDiffCents)}</span></td>
                  <td>${centsToEuro(row.summary.variableCents)} <span class="${costDiffClass(variableDiffCents)}">${diffLabel(variableDiffCents)}</span></td>
                  <td>${centsToEuro(row.summary.miscCents)} <span class="${costDiffClass(miscDiffCents)}">${diffLabel(miscDiffCents)}</span></td>
                  <td>${centsToEuro(row.summary.totalCents)} <span class="${costDiffClass(totalDiffCents)}">${diffLabel(totalDiffCents)}</span></td>
                  <td>${centsToEuro(rowSalaryCents)} <span class="${incomeDiffClass(salaryDiffCents)}">${diffLabel(salaryDiffCents)}</span></td>
                  <td>${centsToEuro(rowPlannedBudgetCents)} <span class="${budgetDiffClass(budgetDiffCents)}">${diffLabel(budgetDiffCents)}</span></td>
                  <td class="${rowNetClass}">${centsToEuro(rowNetCents)} <span class="${monthDiffClass}">${monthDiffLabel}</span></td>
                </tr>`;
                  })
                  .join("")}
                ${yearComparisonStatsRowsHtml}
                ${yearComparisonSumsRowHtml}
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
                Herkunft
                <select id="income-source" ${month ? "" : "disabled"}>
                  <option value="salary">Gehalt</option>
                  <option value="fresh">Neues Einkommen</option>
                  <option value="balance">Bestandsguthaben</option>
                </select>
              </label>
              <label>
                Betrag (€)
                <input class="amount-input" id="income-amount" type="number" min="0" step="0.01" placeholder="0.00" ${month ? "" : "disabled"} />
              </label>
              <button class="btn btn-primary" id="add-income" ${month ? "" : "disabled"}>Einkommen erfassen</button>
                <button class="btn" id="add-income-recurring" ${month ? "" : "disabled"}>Wiederkehrend erfassen</button>
            </div>
            <table>
              <thead>
                <tr><th>Beschreibung</th><th>Herkunft</th><th>Betrag (€)</th><th></th></tr>
              </thead>
              <tbody>
                ${
                  month
                    ? `<tr>
                    <td>Übernahme aus Vormonat</td>
                    <td>-</td>
                    <td class="${carryoverClass}">
                      <input class="amount-input" id="carryover-override" type="number" step="0.01" value="${centsToEuroInput(carryoverCents)}" />
                    </td>
                    <td>-</td>
                  </tr>${month.incomes
                    .map(
                      (entry) => `<tr>
                    <td>${entry.description}</td>
                    <td>
                      <select data-income-source="${entry.id}">
                        <option value="" ${!entry.incomeSource ? "selected" : ""}>Nicht zugeordnet</option>
                        <option value="salary" ${entry.incomeSource === "salary" ? "selected" : ""}>Gehalt</option>
                        <option value="fresh" ${entry.incomeSource === "fresh" ? "selected" : ""}>Neues Einkommen</option>
                        <option value="balance" ${entry.incomeSource === "balance" ? "selected" : ""}>Bestandsguthaben</option>
                      </select>
                    </td>
                    <td>${centsToEuro(entry.amountCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-income="${entry.id}">Löschen</button></td>
                  </tr>`,
                    )
                    .join("")}`
                    : ""
                }
              </tbody>
            </table>
            <div class="column-overview income-flow-overview">
              <div class="column-overview-grid">
                <div class="column-overview-row">
                  <span>Erfasstes Einkommen</span>
                  <strong>${centsToEuro(recordedIncomeTotalCents)} €</strong>
                </div>
                <div class="column-overview-row">
                  <span>Davon Gehalt</span>
                  <strong>${centsToEuro(monthSalaryIncomeCents)} €</strong>
                </div>
                <div class="column-overview-row ${carryoverClass}">
                  <span>Übernahme Vormonat</span>
                  <strong>${month ? `${centsToEuro(carryoverCents)} €` : "-"}</strong>
                </div>
                <div class="column-overview-row">
                  <span>Einkommen gesamt (inkl. Übernahme)</span>
                  <strong>${centsToEuro(effectiveIncomeTotalCents)} €</strong>
                </div>
                <div class="column-overview-row ${monthNetClass}">
                  <span>Monatsergebnis (Übernahme Folgemonat)</span>
                  <strong>${centsToEuro(monthNetCents)} €</strong>
                </div>
              </div>
            </div>
          </article>

          <div class="grid grid-4">
            <article class="card" id="section-food-costs">
              <h3>1) Essen, Trinken und Ausgehen (Tage)</h3>
              <div class="column-overview-grid">
                ${renderColumnOverview(foodBudgetCents, monthSummary.foodCents)}
                ${renderColumnOverview(goingOutBudgetCents, monthSummary.goingOutCents)}
                <div class="column-overview">
                  <div class="column-overview-row">
                    <span>Gesamt (Essen + Ausgehen)</span>
                    <strong>${centsToEuro(foodAndGoingOutBudgetCents)} €</strong>
                  </div>
                  <div class="column-overview-row">
                    <span>Gesamtausgaben</span>
                    <strong>${centsToEuro(foodAndGoingOutActualCents)} €</strong>
                  </div>
                  <div class="column-overview-row ${foodAndGoingOutStatusClass}">
                    <span>Diff</span>
                    <strong>${centsToEuro(foodAndGoingOutDiffCents)} €</strong>
                  </div>
                </div>
              </div>
              <div class="inline">
                <label>
                  Budget Essen (€)
                  <input class="amount-input" id="food-budget" type="number" min="0" step="0.01" value="${centsToEuroInput(foodBudgetCents)}" ${month ? "" : "disabled"} />
                </label>
                <label>
                  Budget Ausgehen (€)
                  <input class="amount-input" id="going-out-budget" type="number" min="0" step="0.01" value="${centsToEuroInput(goingOutBudgetCents)}" ${month ? "" : "disabled"} />
                </label>
                <button class="btn" id="open-weekly-shopping-planner" type="button" ${month ? "" : "disabled"}>Wocheneinkauf Rechner</button>
              </div>
              <table class="daily-table">
                <thead>
                  <tr><th>Datum</th><th>Essen (€)</th><th>Ausgehen (€)</th></tr>
                </thead>
                <tbody>
                  ${
                    month
                      ? month.days
                          .map((day) => {
                            const hasFoodAmount = day.foodCents > 0;
                            const hasGoingOutAmount = day.goingOutCents > 0;
                            const rowClass =
                              `${day.isoDate === todayIsoDate ? "today-row" : ""} ${hasFoodAmount || hasGoingOutAmount ? "day-has-entry" : ""}`.trim();
                            const foodInputClass =
                              `amount-input ${hasFoodAmount ? "day-input-has-value" : ""}`.trim();
                            const goingInputClass =
                              `amount-input ${hasGoingOutAmount ? "day-input-has-value" : ""}`.trim();

                            return `<tr class="${rowClass}">
                      <td>${new Date(day.isoDate).toLocaleDateString("de-DE", { weekday: "short", year: "numeric", month: "2-digit", day: "2-digit" })}</td>
                      <td><input class="${foodInputClass}" data-day-food="${day.isoDate}" type="number" min="0" step="0.01" value="${centsToEuroInput(day.foodCents)}" /></td>
                      <td><input class="${goingInputClass}" data-day-going="${day.isoDate}" type="number" min="0" step="0.01" value="${centsToEuroInput(day.goingOutCents)}" /></td>
                    </tr>`;
                          })
                          .join("")
                      : ""
                  }
                </tbody>
              </table>
            </article>

            <article class="card" id="section-fixed-costs">
              <h3>2) Fixe Kosten (Monatssnapshot)</h3>
              ${renderColumnOverview(fixedBudgetCents, monthSummary.fixedCents)}
              <div class="inline">
                <label>
                  Budget Fixkosten (€)
                  <input class="amount-input" id="fixed-budget" type="number" min="0" step="0.01" value="${centsToEuroInput(fixedBudgetCents)}" ${month ? "" : "disabled"} />
                </label>
              </div>
              <div class="inline">
                <label>
                  Neue Position
                  <input id="fixed-cost-name" type="text" placeholder="z.B. Miete" ${month ? "" : "disabled"} />
                </label>
                <label>
                  Positionsbudget (€)
                  <input class="amount-input" id="fixed-cost-budget" type="number" min="0" step="0.01" placeholder="0.00" ${month ? "" : "disabled"} />
                </label>
                <button class="btn btn-primary" id="add-fixed-cost" ${month ? "" : "disabled"}>Position anlegen</button>
              </div>
              <table>
                <thead>
                  <tr><th>Name</th><th>Budget (€)</th><th>Ist (€)</th><th>Abweichung (€)</th><th></th></tr>
                </thead>
                <tbody>
                ${
                  month
                    ? month.fixedCosts
                        .map(
                          (cost) => `<tr>
                    <td>${cost.name}</td>
                    <td><input class="amount-input" data-fixed-planned="${cost.id}" type="number" min="0" step="0.01" value="${centsToEuroInput(cost.plannedCents)}" /></td>
                    <td class="${budgetStatusClass(cost.actualCents, cost.plannedCents)}"><input class="amount-input" data-fixed-actual="${cost.id}" type="number" min="0" step="0.01" value="${centsToEuroInput(cost.actualCents)}" /></td>
                    <td class="${budgetStatusClass(cost.actualCents, cost.plannedCents)}">${centsToEuro(cost.actualCents - cost.plannedCents)}</td>
                    <td><button class="btn btn-quiet" data-remove-fixed="${cost.id}">Löschen</button></td>
                  </tr>`,
                        )
                        .join("")
                    : ""
                }
                </tbody>
              </table>
            </article>

            <article class="card" id="section-variable-costs">
              <h3>3) Variable Kosten (>= 30€)</h3>
              ${renderColumnOverview(variableBudgetCents, monthSummary.variableCents)}
              <div class="inline">
                <label>
                  Planbudget Variable (€)
                  <input class="amount-input" id="variable-budget" type="number" min="0" step="0.01" value="${centsToEuroInput(variableBudgetCents)}" ${month ? "" : "disabled"} />
                </label>
              </div>
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
                <button class="btn" id="add-variable-position-recurring" ${month ? "" : "disabled"}>Wiederkehrend erfassen</button>
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
                    <td>${position.name}${position.autoAnnualTemplateId ? ' <span class="danger">(A)</span>' : ""}</td>
                    <td><input class="amount-input" data-variable-position-budget="${position.id}" type="number" min="0" step="0.01" value="${centsToEuroInput(position.budgetCents)}" /></td>
                    <td class="${budgetStatusClass(position.actualCents, position.budgetCents)}"><input class="amount-input" data-variable-position-actual="${position.id}" type="number" min="0" step="0.01" value="${centsToEuroInput(position.actualCents)}" /></td>
                    <td class="${budgetStatusClass(position.actualCents, position.budgetCents)}">${centsToEuro(position.actualCents - position.budgetCents)}</td>
                    <td>
                      <button class="btn" data-move-variable-position-next="${position.id}">Nächster Monat</button>
                      <button class="btn btn-quiet" data-remove-variable-position="${position.id}">Löschen</button>
                    </td>
                  </tr>`,
                        )
                        .join("")
                    : ""
                }
                </tbody>
              </table>
            </article>

            <article class="card" id="section-misc-costs">
              <h3>4) Sonstige (unter 30€)</h3>
              ${renderColumnOverview(miscBudgetCents, monthSummary.miscCents)}
              <div class="inline">
                <label>
                  Planbudget Sonstige (€)
                  <input class="amount-input" id="misc-budget" type="number" min="0" step="0.01" value="${centsToEuroInput(miscBudgetCents)}" ${month ? "" : "disabled"} />
                </label>
              </div>
              <div class="inline">
                <label>
                  Neue Position
                  <input id="misc-description" type="text" placeholder="z.B. Kleinkram" ${month ? "" : "disabled"} />
                </label>
                <label>
                  Betrag (€)
                  <input class="amount-input" id="misc-amount" type="number" min="0" step="0.01" placeholder="0.00" ${month ? "" : "disabled"} />
                </label>
                <button class="btn btn-primary" id="add-misc" ${month ? "" : "disabled"}>Position anlegen</button>
                <button class="btn" id="add-misc-recurring" ${month ? "" : "disabled"}>Wiederkehrend erfassen</button>
              </div>
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
                    <td><button class="btn btn-quiet" data-remove-misc="${entry.id}">Löschen</button></td>
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
          <p class="muted">Letztes verwendetes Backup: ${lastBackupFileNameLabel}</p>
          <p class="muted">Die Daten bleiben lokal im Browser (IndexedDB). Zusätzlich kannst du Backups als Datei sichern und später importieren.</p>
          <div class="inline">
            <button class="btn" id="open-persistent-audit-log" type="button">Chronik öffnen</button>
          </div>
        </section>

        <button
          id="scroll-up-btn"
          class="scroll-up-btn"
          type="button"
          aria-label="Nach oben scrollen"
          title="Nach oben"
        >
          ↑
        </button>
      </div>
    `;

    document.body.classList.toggle(
      "panel-modal-open",
      Boolean(
        state.topModal ||
        state.showUnexportedChangeLogModal ||
        state.showPersistentAuditLogModal,
      ),
    );

    bindEvents();
    bindDashboardTrendInteractions();
    renderBudgetVsActualCanvases();
    updateScrollUpButtonVisibility();
  }

  function bindEvents(): void {
    const themeSelect = root.querySelector<HTMLSelectElement>("#theme-select");

    const openYearsModalButton =
      root.querySelector<HTMLButtonElement>("#open-years-modal");
    const openFixedModalButton =
      root.querySelector<HTMLButtonElement>("#open-fixed-modal");
    const openVariableFixedModalButton = root.querySelector<HTMLButtonElement>(
      "#open-variable-fixed-modal",
    );
    const openDashboardModalButton = root.querySelector<HTMLButtonElement>(
      "#open-dashboard-modal",
    );
    const panelModalCloseButton =
      root.querySelector<HTMLButtonElement>("#panel-modal-close");
    const panelModalBackdrop = root.querySelector<HTMLDivElement>(
      "#panel-modal-backdrop",
    );
    const openUnexportedChangeLogButton = root.querySelector<HTMLButtonElement>(
      "#open-unexported-change-log",
    );
    const openPersistentAuditLogButton = root.querySelector<HTMLButtonElement>(
      "#open-persistent-audit-log",
    );
    const unexportedChangeLogCloseButton =
      root.querySelector<HTMLButtonElement>("#unexported-change-log-close");
    const unexportedChangeLogBackupButton =
      root.querySelector<HTMLButtonElement>("#unexported-change-log-backup");
    const unexportedChangeLogBackdrop = root.querySelector<HTMLDivElement>(
      "#unexported-change-log-backdrop",
    );
    const persistentAuditLogCloseButton = root.querySelector<HTMLButtonElement>(
      "#persistent-audit-log-close",
    );
    const persistentAuditLogBackdrop = root.querySelector<HTMLDivElement>(
      "#persistent-audit-log-backdrop",
    );
    const newYearInput = root.querySelector<HTMLInputElement>("#new-year");
    const createYearButton =
      root.querySelector<HTMLButtonElement>("#create-year");
    const yearSelect = root.querySelector<HTMLSelectElement>("#year-select");
    const monthSelect = root.querySelector<HTMLSelectElement>("#month-select");

    themeSelect?.addEventListener("change", () => {
      const selectedTheme = themeSelect.value;
      if (isThemeName(selectedTheme)) {
        applyTheme(selectedTheme);
      }
    });

    openYearsModalButton?.addEventListener("click", () => {
      openTopModal("years");
    });

    openFixedModalButton?.addEventListener("click", () => {
      openTopModal("fixed");
    });

    openVariableFixedModalButton?.addEventListener("click", () => {
      openTopModal("variable-fixed");
    });

    openDashboardModalButton?.addEventListener("click", () => {
      openTopModal("dashboard");
    });

    openUnexportedChangeLogButton?.addEventListener("click", () => {
      openUnexportedChangeLogModal();
    });

    openPersistentAuditLogButton?.addEventListener("click", () => {
      openPersistentAuditLogModal();
    });

    unexportedChangeLogCloseButton?.addEventListener("click", () => {
      closeUnexportedChangeLogModal();
    });

    unexportedChangeLogBackupButton?.addEventListener("click", async () => {
      try {
        await exportBackup();
      } catch (error) {
        console.error("Backup-Export fehlgeschlagen", error);
        showToast("Backup konnte nicht exportiert werden.", "error");
      }
    });

    unexportedChangeLogBackdrop?.addEventListener("click", (event) => {
      if (event.target === unexportedChangeLogBackdrop) {
        closeUnexportedChangeLogModal();
      }
    });

    persistentAuditLogCloseButton?.addEventListener("click", () => {
      closePersistentAuditLogModal();
    });

    persistentAuditLogBackdrop?.addEventListener("click", (event) => {
      if (event.target === persistentAuditLogBackdrop) {
        closePersistentAuditLogModal();
      }
    });

    root
      .querySelectorAll<HTMLButtonElement>("[data-dashboard-tab]")
      .forEach((button) => {
        button.addEventListener("click", () => {
          const tab = button.dataset.dashboardTab;
          if (tab !== "year" && tab !== "food" && tab !== "all") {
            return;
          }
          state.dashboardTab = tab;
          render();
        });
      });

    const dashboardYearSelect = root.querySelector<HTMLSelectElement>(
      "#dashboard-year-select",
    );
    dashboardYearSelect?.addEventListener("change", () => {
      const selectedYearValue = Number.parseInt(dashboardYearSelect.value, 10);
      if (!Number.isInteger(selectedYearValue)) {
        return;
      }
      state.dashboardYear = selectedYearValue;
      render();
    });

    panelModalCloseButton?.addEventListener("click", () => {
      closeTopModal();
    });

    panelModalBackdrop?.addEventListener("click", (event) => {
      if (event.target === panelModalBackdrop) {
        closeTopModal();
      }
    });

    if (state.topModal) {
      window.setTimeout(() => {
        panelModalCloseButton?.focus();
      }, 0);
    }

    if (state.showUnexportedChangeLogModal) {
      window.setTimeout(() => {
        unexportedChangeLogCloseButton?.focus();
      }, 0);
    }

    if (state.showPersistentAuditLogModal) {
      window.setTimeout(() => {
        persistentAuditLogCloseButton?.focus();
      }, 0);
    }

    createYearButton?.addEventListener("click", async () => {
      const yearValue = Number.parseInt(newYearInput?.value ?? "", 10);
      if (!Number.isInteger(yearValue)) {
        alert("Bitte gültiges Jahr eingeben.");
        return;
      }
      await createYear(yearValue);
    });

    yearSelect?.addEventListener("change", () => {
      state.selectedYear = Number.parseInt(yearSelect.value, 10);
      state.selectedMonth = getCurrentMonthNumber();
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
    const annualVariableFixedNameInput = root.querySelector<HTMLInputElement>(
      "#annual-variable-fixed-name",
    );
    const annualVariableFixedDateInput = root.querySelector<HTMLInputElement>(
      "#annual-variable-fixed-date",
    );
    const annualVariableFixedAmountInput = root.querySelector<HTMLInputElement>(
      "#annual-variable-fixed-amount",
    );
    const addAnnualVariableFixedTemplateButton =
      root.querySelector<HTMLButtonElement>(
        "#add-annual-variable-fixed-template",
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

    addAnnualVariableFixedTemplateButton?.addEventListener(
      "click",
      async () => {
        const name = annualVariableFixedNameInput?.value ?? "";
        const dueDateIso = annualVariableFixedDateInput?.value ?? "";
        const amountCents = euroToCents(
          annualVariableFixedAmountInput?.value ?? "0",
        );
        await addAnnualVariableFixedTemplate(name, dueDateIso, amountCents);
        if (annualVariableFixedNameInput)
          annualVariableFixedNameInput.value = "";
        if (annualVariableFixedDateInput)
          annualVariableFixedDateInput.value = "";
        if (annualVariableFixedAmountInput) {
          annualVariableFixedAmountInput.value = "";
        }
      },
    );

    root
      .querySelectorAll<HTMLButtonElement>(
        "[data-remove-annual-variable-fixed-template]",
      )
      .forEach((button) => {
        button.addEventListener("click", async () => {
          const templateId = button.dataset.removeAnnualVariableFixedTemplate;
          if (!templateId) {
            return;
          }
          await removeAnnualVariableFixedTemplate(templateId);
        });
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
        input.addEventListener("click", (event) => {
          event.preventDefault();
          input.blur();
          openAmountDeltaModal(input);
        });
        input.addEventListener("change", async () => {
          const date = input.dataset.dayFood;
          if (!date) return;
          await updateDayAmount(date, "foodCents", euroToCents(input.value));
        });
      });

    root
      .querySelectorAll<HTMLInputElement>("[data-day-going]")
      .forEach((input) => {
        input.addEventListener("click", (event) => {
          event.preventDefault();
          input.blur();
          openAmountDeltaModal(input);
        });
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
        input.addEventListener("click", (event) => {
          event.preventDefault();
          input.blur();
          openAmountDeltaModal(input);
        });
        input.addEventListener("change", async () => {
          const fixedCostId = input.dataset.fixedActual;
          if (!fixedCostId) return;
          await updateFixedCostActual(fixedCostId, euroToCents(input.value));
        });
      });

    root
      .querySelectorAll<HTMLInputElement>("[data-fixed-planned]")
      .forEach((input) => {
        input.addEventListener("click", (event) => {
          event.preventDefault();
          input.blur();
          openAmountDeltaModal(input);
        });
        input.addEventListener("change", async () => {
          const fixedCostId = input.dataset.fixedPlanned;
          if (!fixedCostId) return;
          await updateFixedCostPlanned(fixedCostId, euroToCents(input.value));
        });
      });

    const fixedBudgetInput =
      root.querySelector<HTMLInputElement>("#fixed-budget");
    fixedBudgetInput?.addEventListener("click", (event) => {
      event.preventDefault();
      fixedBudgetInput.blur();
      openAmountDeltaModal(fixedBudgetInput);
    });
    fixedBudgetInput?.addEventListener("change", async () => {
      await updateMonthlyFixedBudget(euroToCents(fixedBudgetInput.value));
    });

    const foodBudgetInput =
      root.querySelector<HTMLInputElement>("#food-budget");
    foodBudgetInput?.addEventListener("click", (event) => {
      event.preventDefault();
      foodBudgetInput.blur();
      openAmountDeltaModal(foodBudgetInput);
    });
    foodBudgetInput?.addEventListener("change", async () => {
      await updateMonthlyFoodBudget(euroToCents(foodBudgetInput.value));
    });

    const goingOutBudgetInput =
      root.querySelector<HTMLInputElement>("#going-out-budget");
    goingOutBudgetInput?.addEventListener("click", (event) => {
      event.preventDefault();
      goingOutBudgetInput.blur();
      openAmountDeltaModal(goingOutBudgetInput);
    });
    goingOutBudgetInput?.addEventListener("change", async () => {
      await updateMonthlyGoingOutBudget(euroToCents(goingOutBudgetInput.value));
    });

    const weeklyShoppingPlannerButton = root.querySelector<HTMLButtonElement>(
      "#open-weekly-shopping-planner",
    );
    weeklyShoppingPlannerButton?.addEventListener("click", () => {
      openWeeklyShoppingPlanModal();
    });

    const miscBudgetInput =
      root.querySelector<HTMLInputElement>("#misc-budget");
    miscBudgetInput?.addEventListener("click", (event) => {
      event.preventDefault();
      miscBudgetInput.blur();
      openAmountDeltaModal(miscBudgetInput);
    });
    miscBudgetInput?.addEventListener("change", async () => {
      await updateMonthlyMiscBudget(euroToCents(miscBudgetInput.value));
    });

    const variableBudgetInput =
      root.querySelector<HTMLInputElement>("#variable-budget");
    variableBudgetInput?.addEventListener("click", (event) => {
      event.preventDefault();
      variableBudgetInput.blur();
      openAmountDeltaModal(variableBudgetInput);
    });
    variableBudgetInput?.addEventListener("change", async () => {
      await updateMonthlyVariableBudget(euroToCents(variableBudgetInput.value));
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
    const addVariablePositionRecurringButton =
      root.querySelector<HTMLButtonElement>("#add-variable-position-recurring");
    const miscDescriptionInput =
      root.querySelector<HTMLInputElement>("#misc-description");
    const miscAmountInput =
      root.querySelector<HTMLInputElement>("#misc-amount");
    const addMiscButton = root.querySelector<HTMLButtonElement>("#add-misc");
    const addMiscRecurringButton = root.querySelector<HTMLButtonElement>(
      "#add-misc-recurring",
    );
    const incomeDescriptionInput = root.querySelector<HTMLInputElement>(
      "#income-description",
    );
    const incomeSourceInput =
      root.querySelector<HTMLSelectElement>("#income-source");
    const incomeAmountInput =
      root.querySelector<HTMLInputElement>("#income-amount");
    const addIncomeButton =
      root.querySelector<HTMLButtonElement>("#add-income");
    const addIncomeRecurringButton = root.querySelector<HTMLButtonElement>(
      "#add-income-recurring",
    );
    const fixedCostNameInput =
      root.querySelector<HTMLInputElement>("#fixed-cost-name");
    const fixedCostBudgetInput =
      root.querySelector<HTMLInputElement>("#fixed-cost-budget");
    const addFixedCostButton =
      root.querySelector<HTMLButtonElement>("#add-fixed-cost");

    const carryoverOverrideInput = root.querySelector<HTMLInputElement>(
      "#carryover-override",
    );
    carryoverOverrideInput?.addEventListener("click", (event) => {
      event.preventDefault();
      carryoverOverrideInput.blur();
      openAmountDeltaModal(carryoverOverrideInput);
    });
    carryoverOverrideInput?.addEventListener("change", async () => {
      const raw = carryoverOverrideInput.value;
      if (!raw.trim()) {
        await updateMonthlyCarryoverOverride(null);
        return;
      }
      await updateMonthlyCarryoverOverride(euroToCents(raw));
    });

    addFixedCostButton?.addEventListener("click", async () => {
      const plannedCents = euroToCents(fixedCostBudgetInput?.value ?? "0");
      await addFixedCost(fixedCostNameInput?.value ?? "", plannedCents);
      if (fixedCostNameInput) fixedCostNameInput.value = "";
      if (fixedCostBudgetInput) fixedCostBudgetInput.value = "";
    });

    addVariablePositionButton?.addEventListener("click", async () => {
      const budgetCents = euroToCents(
        variablePositionBudgetInput?.value ?? "0",
      );
      await addVariablePosition(
        variablePositionNameInput?.value ?? "",
        budgetCents,
        false,
      );
      if (variablePositionNameInput) variablePositionNameInput.value = "";
      if (variablePositionBudgetInput) variablePositionBudgetInput.value = "";
    });

    addVariablePositionRecurringButton?.addEventListener("click", async () => {
      const budgetCents = euroToCents(
        variablePositionBudgetInput?.value ?? "0",
      );
      await addVariablePosition(
        variablePositionNameInput?.value ?? "",
        budgetCents,
        true,
      );
      if (variablePositionNameInput) variablePositionNameInput.value = "";
      if (variablePositionBudgetInput) variablePositionBudgetInput.value = "";
    });

    addMiscButton?.addEventListener("click", async () => {
      const amountCents = euroToCents(miscAmountInput?.value ?? "0");
      await addMiscExpense(
        miscDescriptionInput?.value ?? "",
        amountCents,
        false,
      );
      if (miscDescriptionInput) miscDescriptionInput.value = "";
      if (miscAmountInput) miscAmountInput.value = "";
    });

    addMiscRecurringButton?.addEventListener("click", async () => {
      const amountCents = euroToCents(miscAmountInput?.value ?? "0");
      await addMiscExpense(
        miscDescriptionInput?.value ?? "",
        amountCents,
        true,
      );
      if (miscDescriptionInput) miscDescriptionInput.value = "";
      if (miscAmountInput) miscAmountInput.value = "";
    });

    addIncomeButton?.addEventListener("click", async () => {
      const amountCents = euroToCents(incomeAmountInput?.value ?? "0");
      const selectedSource = incomeSourceInput?.value;
      const incomeSource =
        selectedSource === "balance" ||
        selectedSource === "fresh" ||
        selectedSource === "salary"
          ? selectedSource
          : undefined;
      await addIncome(
        incomeDescriptionInput?.value ?? "",
        amountCents,
        incomeSource,
        false,
      );
      if (incomeDescriptionInput) incomeDescriptionInput.value = "";
      if (incomeAmountInput) incomeAmountInput.value = "";
      if (incomeSourceInput) incomeSourceInput.value = "salary";
    });

    addIncomeRecurringButton?.addEventListener("click", async () => {
      const amountCents = euroToCents(incomeAmountInput?.value ?? "0");
      const selectedSource = incomeSourceInput?.value;
      const incomeSource =
        selectedSource === "balance" ||
        selectedSource === "fresh" ||
        selectedSource === "salary"
          ? selectedSource
          : undefined;
      await addIncome(
        incomeDescriptionInput?.value ?? "",
        amountCents,
        incomeSource,
        true,
      );
      if (incomeDescriptionInput) incomeDescriptionInput.value = "";
      if (incomeAmountInput) incomeAmountInput.value = "";
      if (incomeSourceInput) incomeSourceInput.value = "salary";
    });

    root
      .querySelectorAll<HTMLSelectElement>("[data-income-source]")
      .forEach((select) => {
        select.addEventListener("change", async () => {
          const incomeId = select.dataset.incomeSource;
          if (!incomeId) {
            return;
          }
          const value = select.value;
          const incomeSource =
            value === "balance" || value === "fresh" || value === "salary"
              ? value
              : undefined;
          await updateIncomeSource(incomeId, incomeSource);
        });
      });

    root
      .querySelectorAll<HTMLInputElement>("[data-variable-position-budget]")
      .forEach((input) => {
        input.addEventListener("click", (event) => {
          event.preventDefault();
          input.blur();
          openAmountDeltaModal(input);
        });
        input.addEventListener("change", async () => {
          const positionId = input.dataset.variablePositionBudget;
          if (!positionId) return;
          await updateVariablePositionBudget(
            positionId,
            euroToCents(input.value),
          );
        });
      });

    root
      .querySelectorAll<HTMLInputElement>("[data-variable-position-actual]")
      .forEach((input) => {
        input.addEventListener("click", (event) => {
          event.preventDefault();
          input.blur();
          openAmountDeltaModal(input);
        });
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
      .querySelectorAll<HTMLButtonElement>("[data-move-variable-position-next]")
      .forEach((button) => {
        button.addEventListener("click", async () => {
          const positionId = button.dataset.moveVariablePositionNext;
          if (!positionId) return;
          await moveVariablePositionToNextMonth(positionId);
        });
      });

    root
      .querySelectorAll<HTMLButtonElement>("[data-remove-fixed]")
      .forEach((button) => {
        button.addEventListener("click", async () => {
          const fixedCostId = button.dataset.removeFixed;
          if (!fixedCostId) return;
          await removeFixedCost(fixedCostId);
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

    root
      .querySelectorAll<HTMLButtonElement>("[data-remove-misc]")
      .forEach((button) => {
        button.addEventListener("click", async () => {
          const expenseId = button.dataset.removeMisc;
          if (!expenseId) return;
          await removeMiscExpense(expenseId);
        });
      });

    const backupExport =
      root.querySelector<HTMLButtonElement>("#backup-export");
    const backupImport = root.querySelector<HTMLInputElement>("#backup-import");
    const scrollUpButton =
      root.querySelector<HTMLButtonElement>("#scroll-up-btn");

    scrollUpButton?.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    backupExport?.addEventListener("click", async () => {
      await exportBackup();
    });

    backupImport?.addEventListener("change", async () => {
      const file = backupImport.files?.[0];
      if (!file) {
        return;
      }
      try {
        await importBackup(file);
      } catch (error) {
        console.error("Backup-Import fehlgeschlagen", error);
        showToast("Backup konnte nicht importiert werden.", "error");
      }
      backupImport.value = "";
    });
  }

  return {
    init,
  };
}
