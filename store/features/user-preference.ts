import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type userPreferenceState = {
  isOnboarded: boolean;
  units: { water: "ml" | "oz"; weight: "kg" | "lb" };
  weight: string;
  schedule: { wakeUpTime: string; sleepTime: string };
  dailyWaterIntakeAmount: number | null;
  waterContainerId: string;
};

const initialState: userPreferenceState = {
  isOnboarded: false,
  units: { water: "ml", weight: "kg" },
  weight: "",
  schedule: { wakeUpTime: "09:00", sleepTime: "23:00" },
  dailyWaterIntakeAmount: 0,
  waterContainerId: "small-cup",
};

const userPreferenceSlice = createSlice({
  name: "userPreference",
  initialState,
  reducers: {
    completeOnboarding: (state) => {
      state.isOnboarded = true;
    },
    initState: (state, action: PayloadAction<userPreferenceState>) => {
      return { ...state, ...action.payload };
    },
    changeUnits: (
      state,
      action: PayloadAction<{
        field: "water" | "weight";
        unit: "kg" | "lb" | "ml" | "oz";
      }>,
    ) => {
      const { field, unit } = action.payload;
      if (field === "water" && (unit === "ml" || unit === "oz")) {
        state.units["water"] = unit;
      }
      if (field === "weight" && (unit === "kg" || unit === "lb")) {
        state.units["weight"] = unit;
      }
    },
    changeSchedule: (
      state,
      action: PayloadAction<{
        field: "wakeUpTime" | "sleepTime";
        time: string;
      }>,
    ) => {
      const { field, time } = action.payload;
      state.schedule[field] = time;
    },
    changeWeight: (state, action: PayloadAction<string>) => {
      state.weight = action.payload;
    },
    addWaterIntakeAmount: (state, action: PayloadAction<number>) => {
      state.dailyWaterIntakeAmount = action.payload;
    },
    changeWaterContainer: (state, action: PayloadAction<string>) => {
      state.waterContainerId = action.payload;
    },
  },
});

export const {
  initState,
  changeUnits,
  changeSchedule,
  changeWeight,
  addWaterIntakeAmount,
  changeWaterContainer,
  completeOnboarding,
} = userPreferenceSlice.actions;

export default userPreferenceSlice.reducer;
