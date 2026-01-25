import { WaterIntakeRow } from "@/db/databaseUtils";
import { waterContainers } from "./icons";
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

export function totalWaterIntake(
  records: WaterIntakeRow[],
  waterUnit: "ml" | "oz",
) {
  const totalIntake = records.reduce((sum, record) => {
    const containerId = record["container_id"];
    const container = waterContainers.find(
      (container) => container.id === containerId,
    );
    return container![waterUnit] + sum;
  }, 0);
  return totalIntake;
}
