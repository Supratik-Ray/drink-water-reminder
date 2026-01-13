import OnboardingSubtitle from "@/components/onboarding/OnboardingSubtitle";
import OnboardingTitle from "@/components/onboarding/OnboardingTitle";
import PrimaryButton from "@/components/UI/PrimaryButton";
import Screen from "@/components/UI/Screen";

export default function Schedule() {
  return (
    <Screen>
      <OnboardingTitle>When are you awake?</OnboardingTitle>
      <OnboardingSubtitle>
        We’ll send reminders only while you’re active.
      </OnboardingSubtitle>
      <PrimaryButton>Next</PrimaryButton>
    </Screen>
  );
}
