import Screen from "@/components/UI/Screen";
import { Href, router } from "expo-router";
import { View } from "react-native";
import PrimaryButton from "../UI/PrimaryButton";

export default function OnboardingScreenLayout({
  nextScreen,
  children,
  buttonText = "Next",
}: {
  children: React.ReactNode;
  nextScreen: Href;
  buttonText?: string;
}) {
  return (
    <Screen className="flex-1 relative">
      <View className="flex-1 justify-center items-center relative p-10">
        {children}
      </View>

      <View className="mb-5 p-10">
        <PrimaryButton
          onPress={() => router.push(nextScreen)}
          className="w-full"
        >
          {buttonText}
        </PrimaryButton>
      </View>
    </Screen>
  );
}
