import Ionicons from "@expo/vector-icons/Ionicons";
import React, { ComponentProps } from "react";
import { Pressable, View } from "react-native";

type IoniconName = ComponentProps<typeof Ionicons>["name"];

export default function FloatingActionButton({
  icon,
  color,
  size,
  onPress,
}: {
  icon: IoniconName;
  color: string;
  size: number;
  onPress: () => void;
}) {
  return (
    <View className="rounded-full border border-muted bg-surface justify-center items-center absolute bottom-20 w-30 h-30 right-10 overflow-hidden">
      <Pressable className="p-5" onPress={onPress}>
        <Ionicons name={icon} color={color} size={size} />
      </Pressable>
    </View>
  );
}
