import { useAppSelector } from "@/store/hooks";
import { waterContainers } from "@/utils/icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { ComponentProps } from "react";
import { Pressable, View } from "react-native";

type IoniconName = ComponentProps<typeof Ionicons>["name"];

export default function SwitchContainerButton({
  onPress,
}: {
  onPress: () => void;
}) {
  const { waterContainerId } = useAppSelector((state) => state.userPreference);
  const SelectedContainerIcon = waterContainers.find(
    (container) => container.id === waterContainerId,
  )!.Icon;
  return (
    <View className="rounded-full border border-muted bg-surface justify-center items-center absolute bottom-10 w-30 h-30 right-10 overflow-hidden">
      <Pressable className="p-4 flex-row items-center gap-1" onPress={onPress}>
        <Ionicons name="swap-horizontal" color="white" size={20} />
        <SelectedContainerIcon
          height={25}
          width={25}
          color={"#3B82F6"}
          fill={"#3B82F6"}
        />
      </Pressable>
    </View>
  );
}
