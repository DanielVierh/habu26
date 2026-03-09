import Dexie, { type EntityTable } from "dexie";
import type {
  AnnualVariableFixedCostTemplate,
  FixedCostTemplate,
  YearBook,
} from "../domain/model";

interface FixedTemplateState {
  id: "singleton";
  templates: FixedCostTemplate[];
  version: string;
  updatedAt: string;
}

interface AnnualVariableFixedTemplateState {
  id: "singleton";
  templates: AnnualVariableFixedCostTemplate[];
  version: string;
  updatedAt: string;
}

export interface AppDb extends Dexie {
  years: EntityTable<YearBook, "year">;
  fixedTemplateState: EntityTable<FixedTemplateState, "id">;
  annualVariableFixedTemplateState: EntityTable<
    AnnualVariableFixedTemplateState,
    "id"
  >;
}

export const db = new Dexie("haushaltsbuch-db") as AppDb;

db.version(1).stores({
  years: "year",
  fixedTemplateState: "id",
});

db.version(2).stores({
  years: "year",
  fixedTemplateState: "id",
  annualVariableFixedTemplateState: "id",
});

export type { AnnualVariableFixedTemplateState, FixedTemplateState };
