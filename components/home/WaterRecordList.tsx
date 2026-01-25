import { WaterIntakeRow } from "@/db/databaseUtils";
import React from "react";
import { FlatList } from "react-native";
import WaterRecord from "./WaterRecord";

export default function WaterRecordList({
  todayRecords,
  pressItemHandler,
}: {
  todayRecords: WaterIntakeRow[];
  pressItemHandler: (id: string) => void;
}) {
  return (
    <FlatList
      data={todayRecords}
      renderItem={(data) => {
        const record = data.item;

        return (
          <WaterRecord
            record={record}
            onPress={() => pressItemHandler(record.id)}
          />
        );
      }}
    />
  );
}
