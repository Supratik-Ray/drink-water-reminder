import { WaterIntakeRow } from "@/db/databaseUtils";
import { waterContainers } from "@/utils/icons";
import { timestampToTimeString } from "@/utils/time";
import React from "react";
import { FlatList, Text, View } from "react-native";
import WaterRecord from "./WaterRecord";

export default function WaterRecordList({
  todayRecords,
}: {
  todayRecords: WaterIntakeRow[];
}) {
  return (
    <FlatList
      data={todayRecords}
      renderItem={(data) => {
        const record = data.item;

        return <WaterRecord record={record} />;
      }}
    />
  );
}
