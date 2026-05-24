import Dexie, { type EntityTable } from "dexie";
import type {
  AnnualVariableFixedCostTemplate,
  AuditLogEntry,
  FixedCostTemplate,
  SearchEvaluationResult,
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

interface SearchEvaluationState {
  id: "singleton";
  results: SearchEvaluationResult[];
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
  auditLog: EntityTable<AuditLogEntry, "id">;
  searchEvaluationState: EntityTable<SearchEvaluationState, "id">;
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

db.version(3).stores({
  years: "year",
  fixedTemplateState: "id",
  annualVariableFixedTemplateState: "id",
  auditLog: "id,timestampIso",
});

db.version(4).stores({
  years: "year",
  fixedTemplateState: "id",
  annualVariableFixedTemplateState: "id",
  auditLog: "id,timestampIso",
  searchEvaluationState: "id",
});

export type {
  AnnualVariableFixedTemplateState,
  FixedTemplateState,
  SearchEvaluationState,
};
