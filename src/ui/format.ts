export function euroToCents(value: string): number {
  const normalized = value.replace(",", ".").trim();
  if (!normalized) {
    return 0;
  }
  const asNumber = Number.parseFloat(normalized);
  if (Number.isNaN(asNumber)) {
    return 0;
  }
  return Math.round(asNumber * 100);
}

export function centsToEuro(cents: number): string {
  return (cents / 100).toFixed(2);
}

export function monthLabel(month: number): string {
  return new Date(2026, month - 1, 1).toLocaleDateString("de-DE", {
    month: "long",
  });
}
