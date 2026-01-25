import { waterContainers } from "@/utils/icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, View } from "react-native";
import WaterContainerIcon from "./WaterContainerIcon";

export default function WaterContainerList() {
  return (
    <View className="flex-row flex-wrap gap-10 justify-start w-[300px]">
      {waterContainers.map((container) => (
        <WaterContainerIcon container={container} key={container.id} />
      ))}
      <View className="gap-2 items-center p-3">
        <Ionicons name="add-circle" size={40} color={"#3B82F6"} />
        <Text className="text-white">Custom</Text>
      </View>
    </View>
  );
}
