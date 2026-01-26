import Ionicons from "@expo/vector-icons/Ionicons";
import React, { ComponentProps } from "react";
import { Text, View } from "react-native";

type IoniconsName = ComponentProps<typeof Ionicons>["name"];

export default function SettingHeader({
  icon,
  children,
}: {
  children: React.ReactNode;
  icon: IoniconsName;
}) {
  return (
    <View className="flex-row gap-1.5 items-center">
      <Ionicons name={icon} size={18} color={"white"} />
      <Text className="text-muted font-bold my-4">{children}</Text>
    </View>
  );
}
