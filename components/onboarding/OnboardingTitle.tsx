import { cn } from "@/utils/cn";
import { Text } from "react-native";

type OnboardingTitleProp = {
  children: React.ReactNode;
  className?: string;
};

export default function OnboardingTitle({
  children,
  className,
}: OnboardingTitleProp) {
  return (
    <Text className={cn("text-4xl  text-primary font-bold", className)}>
      {children}
    </Text>
  );
}
