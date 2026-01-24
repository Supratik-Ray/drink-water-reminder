import Screen from "@/components/UI/Screen";
import { Href, router } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import PrimaryButton from "../UI/PrimaryButton";

export default function OnboardingScreenLayout({
  nextScreen,
  children,
  buttonText = "Next",
  last,
  onNext,
}: {
  children: React.ReactNode;
  nextScreen: Href;
  buttonText?: string;
  last?: boolean;
  onNext?: (() => Promise<void>) | (() => void);
}) {
  const [loading, setLoading] = useState(false);
  return (
    <Screen className="flex-1 relative">
      <View className="flex-1 justify-center items-center relative p-10">
        {children}
      </View>

      <View className="mb-5 p-10">
        <PrimaryButton
          onPress={async () => {
            if (onNext) {
              setLoading(true);
              await onNext();
              setLoading(false);
            }
            last ? router.replace(nextScreen) : router.push(nextScreen);
          }}
          className="w-full"
        >
          {loading ? <ActivityIndicator size={24} /> : buttonText}
        </PrimaryButton>
      </View>
    </Screen>
  );
}
