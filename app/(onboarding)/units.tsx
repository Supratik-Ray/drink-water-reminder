import OnboardingSubtitle from "@/components/onboarding/OnboardingSubtitle";
import OnboardingTitle from "@/components/onboarding/OnboardingTitle";
import PrimaryButton from "@/components/UI/PrimaryButton";
import Screen from "@/components/UI/Screen";

export default function Units() {
  return (
    <Screen>
      <OnboardingTitle>Choose your units</OnboardingTitle>
      <OnboardingSubtitle>
        Pick what feels natural to you. You can change this later.
      </OnboardingSubtitle>
      <PrimaryButton>Next</PrimaryButton>
    </Screen>
  );
}
