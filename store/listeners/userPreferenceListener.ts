import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";

import {
  addWaterIntakeAmount,
  changeSchedule,
  changeUnits,
  changeWaterContainer,
  changeWeight,
} from "../features/user-preference";
import type { RootState } from "../store";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const userPreferenceListener = createListenerMiddleware();

userPreferenceListener.startListening({
  matcher: isAnyOf(
    addWaterIntakeAmount,
    changeSchedule,
    changeUnits,
    changeWaterContainer,
    changeWeight,
  ),
  effect: async (_, api) => {
    const state = (api.getState() as RootState).userPreference;
    if (!state.isOnboarded) return;
    const jsonData = JSON.stringify(state);
    await AsyncStorage.setItem("user-preferences", jsonData);
  },
});
