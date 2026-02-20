import type {
  BackupPayload,
  FixedCostTemplate,
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

export async function createBackupPayload(): Promise<BackupPayload> {
  const years = await listYears();
  const fixed = await getFixedTemplateState();

  return {
    exportedAt: new Date().toISOString(),
    years,
    fixedTemplates: fixed.templates,
  };
}

export async function restoreFromBackup(payload: BackupPayload): Promise<void> {
  await db.transaction("rw", [db.years, db.fixedTemplateState], async () => {
    await db.years.clear();
    await db.years.bulkPut(payload.years);
    await saveFixedTemplates(payload.fixedTemplates);
  });
}
