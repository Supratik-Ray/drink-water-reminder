import { getDb } from "./database";

export type WaterIntakeRow = {
  id: string;
  container_id: string;
  timestamp: number;
};

export async function initDb() {
  const db = await getDb();
  await db.execAsync(`
      CREATE TABLE IF NOT EXISTS water_intake (
        id TEXT PRIMARY KEY NOT NULL,
        container_id TEXT NOT NULL,
        timestamp INTEGER NOT NULL
      );
    `);
}

export async function insertWaterRecord({
  id,
  container_id,
  timestamp,
}: WaterIntakeRow) {
  const db = await getDb();
  await db.runAsync(
    "INSERT INTO water_intake (id, container_id, timestamp) VALUES (?, ?, ?)",
    [id, container_id, timestamp],
  );
}

export async function getTodayRecords() {
  const db = await getDb();
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);
  const records = await db.getAllAsync<WaterIntakeRow>(
    "SELECT * FROM water_intake WHERE timestamp >= ? ORDER BY timestamp DESC",
    [startOfToday.getTime()],
  );
  return records;
}

export async function deleteWaterRecord(id: string) {
  const db = await getDb();
  await db.runAsync("DELETE FROM water_intake WHERE id = ?", [id]);
}

export async function updateWaterRecord(
  id: string,
  container_id: string,
  timestamp: number,
) {
  const db = await getDb();
  await db.runAsync(
    "UPDATE water_intake SET container_id = ? , timestamp = ? WHERE id = ?",
    [container_id, timestamp, id],
  );
}
