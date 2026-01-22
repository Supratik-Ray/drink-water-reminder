import { cn } from "@/utils/cn";
import { KeyboardAvoidingView, Platform, View } from "react-native";

type ScreenProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Screen({ children, className }: ScreenProps) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "padding" : "height"}
      className="flex-1 bg-background"
    >
      <View className={cn("flex-1", className)}>{children}</View>
    </KeyboardAvoidingView>
  );
}
