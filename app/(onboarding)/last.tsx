import BackButton from "@/components/onboarding/BackButton";
import MascotImage from "@/components/onboarding/MascotImage";
import OnboardingScreenLayout from "@/components/onboarding/OnboardingScreenLayout";
import OnboardingSubtitle from "@/components/onboarding/OnboardingSubtitle";
import OnboardingTitle from "@/components/onboarding/OnboardingTitle";
import {
  addWaterIntakeAmount,
  completeOnboarding,
} from "@/store/features/user-preference";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { calculateDailyWaterIntake } from "@/utils/water-intake";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";

const mascotImage = require("../../assets/images/mascot/last.png");

export default function Last() {
  const { units, weight, schedule } = useAppSelector(
    (state) => state.userPreference,
  );
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const dailyWaterIntakeAmount = calculateDailyWaterIntake({
    waterUnit: units.water,
    weightUnit: units.weight,
    weight: Number(weight),
  });

  useEffect(() => {
    new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
      setLoading(false);
      dispatch(addWaterIntakeAmount(dailyWaterIntakeAmount));
    });
  }, []);

  async function handleCompleteOnboarding() {
    dispatch(completeOnboarding());
  }

  return (
    <OnboardingScreenLayout
      nextScreen={"/(tabs)"}
      buttonText="Finish"
      last={true}
      onNext={handleCompleteOnboarding}
    >
      <BackButton />
      <MascotImage path={mascotImage} />
      <OnboardingTitle className="mb-4">You’re all set 💧</OnboardingTitle>

      <View className="border border-primary p-10 items-center mb-8 rounded-md">
        <Text className="text-muted text-lg mb-4">
          your Daily water intake amount is
        </Text>
        {loading ? (
          <ActivityIndicator size={30} />
        ) : (
          <Text className="text-accent text-4xl font-bold">
            {dailyWaterIntakeAmount} {units.water}
          </Text>
        )}
      </View>
      <OnboardingSubtitle className="mb-4 text-center">
        We’ll gently remind you to drink water throughout the day — no pressure,
        no spam.
      </OnboardingSubtitle>
    </OnboardingScreenLayout>
  );
}
