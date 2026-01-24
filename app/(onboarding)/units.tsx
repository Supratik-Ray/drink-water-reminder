import BackButton from "@/components/onboarding/BackButton";
import MascotImage from "@/components/onboarding/MascotImage";
import OnboardingScreenLayout from "@/components/onboarding/OnboardingScreenLayout";
import OnboardingSubtitle from "@/components/onboarding/OnboardingSubtitle";
import OnboardingTitle from "@/components/onboarding/OnboardingTitle";
import SelectorButton from "@/components/UI/SelectorButton";
import { changeUnits } from "@/store/features/user-preference";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { View } from "react-native";

const mascotImage = require("../../assets/images/mascot/units.png");

export default function Units() {
  const { units } = useAppSelector((state) => state.userPreference);
  const dispatch = useAppDispatch();

  const onUnitChange = (
    field: "water" | "weight",
    unit: "ml" | "oz" | "kg" | "lb",
  ) => {
    dispatch(changeUnits({ field, unit }));
  };

  return (
    <OnboardingScreenLayout nextScreen={"/(onboarding)/weight"}>
      <BackButton />
      <MascotImage path={mascotImage} />
      <OnboardingTitle className="mb-4">Choose your units</OnboardingTitle>
      <OnboardingSubtitle className="mb-12 text-center">
        Pick what feels natural to you. You can change this later.
      </OnboardingSubtitle>

      <View className="flex-row gap-10 mb-8">
        <SelectorButton
          selected={units.water === "ml"}
          onPress={() => onUnitChange("water", "ml")}
        >
          ml
        </SelectorButton>
        <SelectorButton
          selected={units.water === "oz"}
          onPress={() => onUnitChange("water", "oz")}
        >
          oz
        </SelectorButton>
      </View>

      <View className="flex-row gap-10">
        <SelectorButton
          selected={units.weight === "kg"}
          onPress={() => onUnitChange("weight", "kg")}
        >
          kg
        </SelectorButton>
        <SelectorButton
          selected={units.weight === "lb"}
          onPress={() => onUnitChange("weight", "lb")}
        >
          lb
        </SelectorButton>
      </View>
    </OnboardingScreenLayout>
  );
}
