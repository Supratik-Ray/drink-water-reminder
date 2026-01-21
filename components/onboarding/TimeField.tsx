import React from "react";
import { Pressable, Text } from "react-native";

export default function TimeField({
  label,
  time,
  onPress,
}: {
  label: string;
  time: Date;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      className="px-8 py-4 mb-12 rounded-full w-3/4 flex-row justify-between items-center border border-primary elevation-md"
    >
      <Text className="text-md text-muted font-bold">{label}:</Text>
      <Text className="text-xl text-primary">
        {time.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </Text>
    </Pressable>
  );
}
