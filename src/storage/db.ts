import Dexie, { type EntityTable } from "dexie";
import type { FixedCostTemplate, YearBook } from "../domain/model";

interface FixedTemplateState {
  id: "singleton";
  templates: FixedCostTemplate[];
  version: string;
  updatedAt: string;
}

export interface AppDb extends Dexie {
  years: EntityTable<YearBook, "year">;
  fixedTemplateState: EntityTable<FixedTemplateState, "id">;
}

export const db = new Dexie("haushaltsbuch-db") as AppDb;

db.version(1).stores({
  years: "year",
  fixedTemplateState: "id",
});

export type { FixedTemplateState };
