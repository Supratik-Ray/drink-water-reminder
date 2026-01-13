import OnboardingSubtitle from "@/components/onboarding/OnboardingSubtitle";
import OnboardingTitle from "@/components/onboarding/OnboardingTitle";
import PrimaryButton from "@/components/UI/PrimaryButton";
import Screen from "@/components/UI/Screen";
import { router } from "expo-router";
import { Image } from "react-native";

const mascotImage = require("../../assets/images/mascot/first.png");

export default function index() {
  return (
    <Screen className="justify-center items-center">
      <Image source={mascotImage} className="w-[150px] h-[300px]" />
      <OnboardingTitle className="mb-4">
        Stay hydrated, effortlessly.
      </OnboardingTitle>
      <OnboardingSubtitle className="mb-8">
        We’ll set up a simple plan based on your body and daily routine. It
        takes less than a minute.
      </OnboardingSubtitle>
      <PrimaryButton onPress={() => router.push("/(onboarding)/weight")}>
        Start setup →
      </PrimaryButton>
    </Screen>
  );
}
