import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type userPreferenceState = {
  units: { water: "ml" | "oz"; weight: "kg" | "lb" };
  weight: string;
  schedule: { wakeUpTime: string; sleepTime: string };
  dailyWaterIntakeAmount: number | null;
};

const initialState: userPreferenceState = {
  units: { water: "ml", weight: "kg" },
  weight: "",
  schedule: { wakeUpTime: "09:00", sleepTime: "23:00" },
  dailyWaterIntakeAmount: 0,
};

const userPreferenceSlice = createSlice({
  name: "userPreference",
  initialState,
  reducers: {
    initState: (state, action: PayloadAction<userPreferenceState>) => {
      state = action.payload;
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
  },
});

export const {
  initState,
  changeUnits,
  changeSchedule,
  changeWeight,
  addWaterIntakeAmount,
} = userPreferenceSlice.actions;

export default userPreferenceSlice.reducer;
