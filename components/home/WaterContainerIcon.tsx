import { changeWaterContainer } from "@/store/features/user-preference";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { cn } from "@/utils/cn";
import { WaterContainer } from "@/utils/icons";
import React from "react";
import { Pressable, Text } from "react-native";

const glowStyle = {
  backgroundColor: "rgba(34, 197, 94, 0.12)", // subtle green glow fill
  shadowColor: "#22C55E",
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.7,
  shadowRadius: 12,
  elevation: 8, // Android glow
};

export default function WaterContainerIcon({
  container,
}: {
  container: WaterContainer;
}) {
  const dispatch = useAppDispatch();
  const { units, waterContainerId } = useAppSelector(
    (state) => state.userPreference,
  );

  function handleChangeContainer(containerId: string) {
    dispatch(changeWaterContainer(containerId));
  }

  const isSelected = container.id === waterContainerId;

  return (
    <Pressable
      onPress={() => handleChangeContainer(container.id)}
      android_ripple={{ color: "rgba(34,197,94,0.15)" }}
      style={({ pressed }) => [
        isSelected && glowStyle,
        pressed && { transform: [{ scale: 0.97 }] },
      ]}
      className={cn(
        "items-center p-3 w-50 rounded-md gap-2 border",
        isSelected ? "border-accent" : "border-muted bg-background",
      )}
    >
      <container.Icon
        height={40}
        width={40}
        color={isSelected ? "#22C55E" : "#3B82F6"}
        fill={isSelected ? "#22C55E" : "#3B82F6"}
      />

      <Text className={isSelected ? "text-accent font-medium" : "text-muted"}>
        {container[units.water]} {units.water}
      </Text>
    </Pressable>
  );
}
