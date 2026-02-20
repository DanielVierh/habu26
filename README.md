# Haushaltsbuch (Local First)

Diese App ist ein lokales Haushaltsbuch als PWA.

## Kernfunktionen

- Jahre anlegen, automatisch mit 12 Monaten
- Einheitliche Monatsstruktur
- 4 Rechnungskreise:
  1. Essen, Trinken und Ausgehen (pro Tag, 2 Spalten: Essen/Ausgehen)
  2. Fixe Kosten (zentral verwaltete Vorlagen, neue Monate werden daraus gespeist)
  3. Variable Kosten (>= 30,00 €)
  4. Sonstige (< 30,00 €)
- Local-first Speicherung in IndexedDB
- Datensicherung per Export/Import (JSON)

## Tech Stack

- TypeScript
- Vite
- Dexie (IndexedDB)
- vite-plugin-pwa
- Vitest

## Start

```bash
npm install
npm run dev
```

## Build & Test

```bash
npm run test
npm run build
```

## Datenhaltung

- Alle Daten bleiben lokal im Browser (IndexedDB, DB-Name: `haushaltsbuch-db`)
- Export erzeugt eine JSON-Datei mit Jahren + zentralen Fixkosten
- Import stellt den Stand aus einer JSON-Sicherung wieder her
