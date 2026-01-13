import { cn } from "@/utils/cn";
import { Text } from "react-native";

type OnboardingSubtitleProp = {
  children: React.ReactNode;
  className?: string;
};

export default function OnboardingSubtitle({
  children,
  className,
}: OnboardingSubtitleProp) {
  return (
    <Text className={cn("text-lg text-muted", className)}>{children}</Text>
  );
}
