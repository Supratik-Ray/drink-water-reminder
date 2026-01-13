import { Pressable, Text } from "react-native";

type PrimaryButtonProp = {
  children: string;
  onPress?: () => void;
};

export default function PrimaryButton({
  children,
  onPress,
}: PrimaryButtonProp) {
  return (
    <Pressable
      onPress={onPress}
      className="bg-primary px-8 py-4 rounded-full w-full items-center"
    >
      <Text className="text-white text-lg">{children}</Text>
    </Pressable>
  );
}
