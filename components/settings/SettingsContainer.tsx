import { cn } from "@/utils/cn";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function SettingsContainer({
  children,
  border = true,
}: {
  children: React.ReactNode;
  border?: boolean;
}) {
  return (
    <View className={cn("px-10 py-2 border-muted/10", border && "border-b")}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({});
