import OnboardingSubtitle from "@/components/onboarding/OnboardingSubtitle";
import OnboardingTitle from "@/components/onboarding/OnboardingTitle";
import PrimaryButton from "@/components/UI/PrimaryButton";
import Screen from "@/components/UI/Screen";

export default function Last() {
  return (
    <Screen>
      <OnboardingTitle>You’re all set 💧</OnboardingTitle>
      <OnboardingSubtitle>
        We’ll gently remind you to drink water throughout the day — no pressure,
        no spam.
      </OnboardingSubtitle>
      <PrimaryButton>Start tracking →</PrimaryButton>
    </Screen>
  );
}
