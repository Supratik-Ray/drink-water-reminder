import { cn } from "@/utils/cn";
import React from "react";
import { Pressable, Text, View } from "react-native";

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
    <View className="relative">
      {/* Glow ring */}
      {selected && (
        <View
          className="absolute inset-0 rounded-full"
          style={{
            shadowColor: "#22C55E",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.8,
            shadowRadius: 20,
            elevation: 12, // Android fallback
          }}
        />
      )}

      <Pressable
        onPress={onPress}
        className={cn(
          "border rounded-full py-2 px-8 bg-background",
          selected ? "border-accent" : "border-muted",
          className,
        )}
      >
        <Text className={cn("text-muted", selected && "text-accent")}>
          {children}
        </Text>
      </Pressable>
    </View>
  );
}
