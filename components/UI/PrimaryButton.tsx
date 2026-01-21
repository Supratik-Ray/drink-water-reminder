import { cn } from "@/utils/cn";
import { Pressable, Text } from "react-native";

type PrimaryButtonProp = {
  children: string;
  onPress?: () => void;
  className?: string;
};

export default function PrimaryButton({
  children,
  onPress,
  className,
}: PrimaryButtonProp) {
  return (
    <Pressable
      onPress={onPress}
      className={cn(
        "bg-primary px-8 py-4 rounded-full items-center elevation-md",
        className,
      )}
    >
      <Text className="text-white text-lg">{children}</Text>
    </Pressable>
  );
}
