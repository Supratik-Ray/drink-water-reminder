import MascotImage from "@/components/onboarding/MascotImage";
import OnboardingScreenLayout from "@/components/onboarding/OnboardingScreenLayout";
import OnboardingSubtitle from "@/components/onboarding/OnboardingSubtitle";
import OnboardingTitle from "@/components/onboarding/OnboardingTitle";

const mascotImage = require("../../assets/images/mascot/first.png");

export default function index() {
  return (
    <OnboardingScreenLayout
      nextScreen={"/(onboarding)/units"}
      buttonText="Start setup →"
    >
      <MascotImage path={mascotImage} />
      <OnboardingTitle className="mb-4">
        Stay hydrated, effortlessly.
      </OnboardingTitle>
      <OnboardingSubtitle className="mb-8">
        We’ll set up a simple plan based on your body and daily routine. It
        takes less than a minute.
      </OnboardingSubtitle>
    </OnboardingScreenLayout>
  );
}
