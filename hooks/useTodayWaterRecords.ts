import {
  deleteWaterRecord,
  getTodayRecords,
  insertWaterRecord,
  WaterIntakeRow,
} from "@/db/databaseUtils";
import { useEffect, useState } from "react";
import uuid from "react-native-uuid";

export function useTodayWaterRecords() {
  const [records, setRecords] = useState<WaterIntakeRow[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    async function fetchRecords() {
      try {
        const records = await getTodayRecords();
        setRecords(records);
      } catch (error) {
        console.warn("error fetching today's records");
      } finally {
        setIsFetching(false);
      }
    }
    fetchRecords();
  }, []);

  function addRecord(waterContainerId: string) {
    const newRecord: WaterIntakeRow = {
      id: uuid.v4(),
      container_id: waterContainerId,
      timestamp: Date.now(),
    };
    setRecords((records) => [newRecord, ...records]);
    insertWaterRecord({
      id: newRecord.id,
      container_id: newRecord.container_id,
      timestamp: newRecord.timestamp,
    });
  }

  function deleteRecord(recordId: string) {
    setRecords((records) => records.filter((record) => record.id !== recordId));
    deleteWaterRecord(recordId);
  }

  return { records, isFetching, addRecord, deleteRecord };
}
