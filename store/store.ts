import { configureStore } from "@reduxjs/toolkit";
import userPreferenceReducer from "./features/user-preference";

export const store = configureStore({
  reducer: {
    userPreference: userPreferenceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
