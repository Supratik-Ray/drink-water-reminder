import { cn } from "@/utils/cn";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";

type ScreenProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Screen({ children, className }: ScreenProps) {
  return (
    <ScrollView className="bg-background" contentContainerClassName="flex-1">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <View className={cn("flex-1 p-16", className)}>{children}</View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
