type WeightUnit = "kg" | "lb";
type WaterUnit = "ml" | "oz";

export function calculateDailyWaterIntake({
  weight,
  weightUnit,
  waterUnit,
}: {
  weight: number;
  weightUnit: WeightUnit;
  waterUnit: WaterUnit;
}) {
  const weightKg = weightUnit === "kg" ? weight : weight * 0.453592;

  const dailyWaterMl = weightKg * 35;

  if (waterUnit === "ml") {
    return Math.round(dailyWaterMl);
  }

  return Number((dailyWaterMl * 0.033814).toFixed(1));
}
