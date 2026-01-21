import BackButton from "@/components/onboarding/BackButton";
import MascotImage from "@/components/onboarding/MascotImage";
import OnboardingSubtitle from "@/components/onboarding/OnboardingSubtitle";
import OnboardingTitle from "@/components/onboarding/OnboardingTitle";
import PrimaryButton from "@/components/UI/PrimaryButton";
import Screen from "@/components/UI/Screen";
import { router } from "expo-router";
import { TextInput } from "react-native";

const mascotImage = require("../../assets/images/mascot/weight.png");

export default function Weight() {
  return (
    <Screen className="justify-center items-center relative">
      <BackButton />
      <MascotImage path={mascotImage} />
      <OnboardingTitle className="mb-4">
        What’s your weight in Kg?
      </OnboardingTitle>
      <OnboardingSubtitle className="mb-4">
        This helps us calculate how much water your body needs each day.
      </OnboardingSubtitle>
      <TextInput
        keyboardType="decimal-pad"
        placeholder="Enter weight"
        placeholderTextColor="#94A3B8"
        className="bg-surface text-white p-4 rounded-md border border-primary/50 w-full mb-8"
      />
      <PrimaryButton
        onPress={() => router.push("/(onboarding)/schedule")}
        className="w-full absolute bottom-20"
      >
        Next
      </PrimaryButton>
    </Screen>
  );
}
