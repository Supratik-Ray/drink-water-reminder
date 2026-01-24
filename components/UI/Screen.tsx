import { cn } from "@/utils/cn";
import { KeyboardAvoidingView, Platform, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
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
      <SafeAreaView className="flex-1">
        <View className={cn("flex-1", className)}>{children}</View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
