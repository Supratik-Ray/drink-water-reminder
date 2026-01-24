import BackButton from "@/components/onboarding/BackButton";
import MascotImage from "@/components/onboarding/MascotImage";
import OnboardingScreenLayout from "@/components/onboarding/OnboardingScreenLayout";
import OnboardingSubtitle from "@/components/onboarding/OnboardingSubtitle";
import OnboardingTitle from "@/components/onboarding/OnboardingTitle";
import { changeWeight } from "@/store/features/user-preference";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { TextInput } from "react-native";

const mascotImage = require("../../assets/images/mascot/weight.png");

export default function Weight() {
  const { weight } = useAppSelector((state) => state.userPreference);
  const dispatch = useAppDispatch();

  const onChangeWeight = (text: string) => {
    dispatch(changeWeight(text));
  };

  return (
    <OnboardingScreenLayout nextScreen={"/(onboarding)/schedule"}>
      <BackButton />
      <MascotImage path={mascotImage} />
      <OnboardingTitle className="mb-4">What’s your weight?</OnboardingTitle>
      <OnboardingSubtitle className="mb-8 text-center">
        This helps us calculate how much water your body needs each day.
      </OnboardingSubtitle>
      <TextInput
        onChangeText={onChangeWeight}
        value={weight}
        keyboardType="decimal-pad"
        placeholder="Enter weight"
        placeholderTextColor="#94A3B8"
        className="bg-surface text-white p-4 rounded-md border border-primary/50 w-full mb-8"
      />
    </OnboardingScreenLayout>
  );
}
