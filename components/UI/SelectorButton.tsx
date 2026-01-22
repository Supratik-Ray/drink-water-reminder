import { cn } from "@/utils/cn";
import React from "react";
import { Pressable, Text } from "react-native";

type ButtonProps = {
  children: React.ReactNode;
  onPress?: () => void;
  selected: boolean;
  className?: string;
};

export default function SelectorButton({
  children,
  onPress,
  selected,
  className,
}: ButtonProps) {
  return (
    <Pressable
      className={cn(
        "border border-primary rounded-full py-2 px-8 elevation-md",
        className,
        selected && "border-accent border-none",
      )}
      onPress={onPress}
    >
      <Text className={cn("text-muted", selected && "text-accent")}>
        {children}
      </Text>
    </Pressable>
  );
}
