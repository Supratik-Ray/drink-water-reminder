import React from "react";
import { Pressable, Text, View } from "react-native";

type SettingItemProp = {
  label: string;
  value?: string | number;
  onPress: () => void;
};

export default function SettingItem({
  label,
  value,
  onPress,
}: SettingItemProp) {
  if (!value) {
    <View className="flex-row justify-between my-6">
      <Pressable onPress={onPress}>
        <Text className="text-white">{label}</Text>
      </Pressable>
    </View>;
  }

  return (
    <View className="flex-row justify-between my-6">
      <Text className="text-white">{label}</Text>
      <Pressable onPress={onPress}>
        <Text className="text-primary font-semibold">{value}</Text>
      </Pressable>
    </View>
  );
}
