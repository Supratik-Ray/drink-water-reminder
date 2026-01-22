import BackButton from "@/components/onboarding/BackButton";
import MascotImage from "@/components/onboarding/MascotImage";
import OnboardingScreenLayout from "@/components/onboarding/OnboardingScreenLayout";
import OnboardingSubtitle from "@/components/onboarding/OnboardingSubtitle";
import OnboardingTitle from "@/components/onboarding/OnboardingTitle";
import { useAppSelector } from "@/store/hooks";
import { calculateDailyWaterIntake } from "@/utils/daily-intake-amount";
import { Text, View } from "react-native";

const mascotImage = require("../../assets/images/mascot/last.png");

export default function Last() {
  const { units, weight } = useAppSelector((state) => state.userPreference);
  const dailyIntakeAmount = calculateDailyWaterIntake({
    waterUnit: units.water,
    weightUnit: units.weight,
    weight: Number(weight),
  });
  return (
    <OnboardingScreenLayout nextScreen={"/"} buttonText="Finish">
      <BackButton />
      <MascotImage path={mascotImage} />
      <OnboardingTitle className="mb-4">You’re all set 💧</OnboardingTitle>

      <View className="border border-primary p-10 items-center mb-8 rounded-md">
        <Text className="text-muted text-lg mb-4">
          your Daily water intake amount is
        </Text>
        <Text className="text-accent text-4xl font-bold">
          {dailyIntakeAmount} {units.water}
        </Text>
      </View>
      <OnboardingSubtitle className="mb-4">
        We’ll gently remind you to drink water throughout the day — no pressure,
        no spam.
      </OnboardingSubtitle>
    </OnboardingScreenLayout>
  );
}
