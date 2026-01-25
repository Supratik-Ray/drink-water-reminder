import { WaterIntakeRow } from "@/db/databaseUtils";
import { useAppSelector } from "@/store/hooks";
import { waterContainers } from "@/utils/icons";
import { timestampToTimeString } from "@/utils/time";
import React from "react";
import { Text, View } from "react-native";

export default function WaterRecord({ record }: { record: WaterIntakeRow }) {
  const { units } = useAppSelector((state) => state.userPreference);
  const selectedContainer = waterContainers.find(
    (container) => container.id === record["container_id"],
  );

  const IconComponent = selectedContainer!.Icon;
  return (
    <View className="flex-row items-center justify-between mb-8 bg-surface p-5 rounded-md">
      <View>
        <IconComponent
          color={"#3B82F6"}
          height={30}
          width={30}
          fill={"#3B82F6"}
        />
      </View>
      <Text className="text-muted">
        {selectedContainer![units.water]} {units.water}
      </Text>
      <Text className="text-muted">
        {timestampToTimeString(record.timestamp)}
      </Text>
    </View>
  );
}
