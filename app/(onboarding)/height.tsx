import MascotImage from "@/components/onboarding/MascotImage";
import OnboardingSubtitle from "@/components/onboarding/OnboardingSubtitle";
import OnboardingTitle from "@/components/onboarding/OnboardingTitle";
import PrimaryButton from "@/components/UI/PrimaryButton";
import Screen from "@/components/UI/Screen";

const mascotImage = require("../../assets/images/mascot/height.png");

export default function Height() {
  return (
    <Screen>
      <MascotImage path={mascotImage} />
      <OnboardingTitle>Your height</OnboardingTitle>
      <OnboardingSubtitle>
        Height slightly affects how your body distributes water.
      </OnboardingSubtitle>
      <PrimaryButton>Next</PrimaryButton>
    </Screen>
  );
}
