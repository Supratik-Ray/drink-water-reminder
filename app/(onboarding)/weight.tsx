import OnboardingSubtitle from "@/components/onboarding/OnboardingSubtitle";
import OnboardingTitle from "@/components/onboarding/OnboardingTitle";
import PrimaryButton from "@/components/UI/PrimaryButton";
import Screen from "@/components/UI/Screen";

export default function Weight() {
  return (
    <Screen>
      <OnboardingTitle>What’s your weight?</OnboardingTitle>
      <OnboardingSubtitle>
        This helps us calculate how much water your body needs each day.
      </OnboardingSubtitle>
      <PrimaryButton>Next</PrimaryButton>
    </Screen>
  );
}
