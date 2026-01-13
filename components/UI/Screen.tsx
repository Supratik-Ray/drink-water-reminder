import { cn } from "@/utils/cn";
import { View } from "react-native";

type ScreenProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Screen({ children, className }: ScreenProps) {
  return (
    <View className={cn("flex-1 bg-background p-16", className)}>
      {children}
    </View>
  );
}
