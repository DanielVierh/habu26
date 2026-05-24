import type {
  AnnualVariableFixedCostTemplate,
  AuditLogEntry,
  BackupPayload,
  FixedCostTemplate,
  SearchEvaluationResult,
  YearBook,
} from "../domain/model";
import { db } from "./db";

const SINGLETON_ID = "singleton" as const;

function versionToken(): string {
  return new Date().toISOString();
}

export async function listYears(): Promise<YearBook[]> {
  return db.years.orderBy("year").toArray();
}

export async function getYear(year: number): Promise<YearBook | undefined> {
  return db.years.get(year);
}

export async function saveYear(year: YearBook): Promise<void> {
  await db.years.put(year);
}

export async function deleteYear(year: number): Promise<void> {
  await db.years.delete(year);
}

export async function getFixedTemplateState(): Promise<{
  templates: FixedCostTemplate[];
  version: string;
}> {
  const existing = await db.fixedTemplateState.get(SINGLETON_ID);
  if (!existing) {
    const initial = {
      id: SINGLETON_ID,
      templates: [],
      version: versionToken(),
      updatedAt: new Date().toISOString(),
    };
    await db.fixedTemplateState.put(initial);
    return { templates: [], version: initial.version };
  }
  return { templates: existing.templates, version: existing.version };
}

export async function saveFixedTemplates(
  templates: FixedCostTemplate[],
): Promise<string> {
  const version = versionToken();
  await db.fixedTemplateState.put({
    id: SINGLETON_ID,
    templates,
    version,
    updatedAt: new Date().toISOString(),
  });
  return version;
}

export async function getAnnualVariableFixedTemplateState(): Promise<{
  templates: AnnualVariableFixedCostTemplate[];
  version: string;
}> {
  const existing = await db.annualVariableFixedTemplateState.get(SINGLETON_ID);
  if (!existing) {
    const initial = {
      id: SINGLETON_ID,
      templates: [],
      version: versionToken(),
      updatedAt: new Date().toISOString(),
    };
    await db.annualVariableFixedTemplateState.put(initial);
    return { templates: [], version: initial.version };
  }
  return { templates: existing.templates, version: existing.version };
}

export async function saveAnnualVariableFixedTemplates(
  templates: AnnualVariableFixedCostTemplate[],
): Promise<string> {
  const version = versionToken();
  await db.annualVariableFixedTemplateState.put({
    id: SINGLETON_ID,
    templates,
    version,
    updatedAt: new Date().toISOString(),
  });
  return version;
}

export async function appendAuditLogEntry(entry: AuditLogEntry): Promise<void> {
  await db.auditLog.put(entry);
}

export async function getSearchEvaluationState(): Promise<{
  results: SearchEvaluationResult[];
  version: string;
}> {
  const existing = await db.searchEvaluationState.get(SINGLETON_ID);
  if (!existing) {
    const initial = {
      id: SINGLETON_ID,
      results: [],
      version: versionToken(),
      updatedAt: new Date().toISOString(),
    };
    await db.searchEvaluationState.put(initial);
    return { results: [], version: initial.version };
  }
  return { results: existing.results, version: existing.version };
}

export async function saveSearchEvaluations(
  results: SearchEvaluationResult[],
): Promise<string> {
  const version = versionToken();
  await db.searchEvaluationState.put({
    id: SINGLETON_ID,
    results,
    version,
    updatedAt: new Date().toISOString(),
  });
  return version;
}

export async function listAuditLogEntries(): Promise<AuditLogEntry[]> {
  return db.auditLog.orderBy("timestampIso").toArray();
}

export async function replaceAuditLogEntries(
  entries: AuditLogEntry[],
): Promise<void> {
  await db.auditLog.clear();
  if (entries.length === 0) {
    return;
  }
  await db.auditLog.bulkPut(entries);
}

export async function createBackupPayload(): Promise<BackupPayload> {
  const years = await listYears();
  const [fixed, annualVariableFixed, auditLogEntries, searchEvaluations] =
    await Promise.all([
      getFixedTemplateState(),
      getAnnualVariableFixedTemplateState(),
      listAuditLogEntries(),
      getSearchEvaluationState(),
    ]);

  return {
    exportedAt: new Date().toISOString(),
    years,
    fixedTemplates: fixed.templates,
    annualVariableFixedTemplates: annualVariableFixed.templates,
    auditLogEntries,
    savedSearchEvaluations: searchEvaluations.results,
  };
}

export async function restoreFromBackup(payload: BackupPayload): Promise<void> {
  await db.transaction(
    "rw",
    [
      db.years,
      db.fixedTemplateState,
      db.annualVariableFixedTemplateState,
      db.auditLog,
      db.searchEvaluationState,
    ],
    async () => {
      await db.years.clear();
      await db.years.bulkPut(payload.years);
      await saveFixedTemplates(payload.fixedTemplates);
      await saveAnnualVariableFixedTemplates(
        payload.annualVariableFixedTemplates ?? [],
      );
      await replaceAuditLogEntries(payload.auditLogEntries ?? []);
      await saveSearchEvaluations(payload.savedSearchEvaluations ?? []);
    },
  );
}
