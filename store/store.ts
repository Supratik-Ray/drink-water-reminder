import { configureStore } from "@reduxjs/toolkit";
import userPreferenceReducer from "./features/user-preference";
import { userPreferenceListener } from "./listeners/userPreferenceListener";

export const store = configureStore({
  reducer: {
    userPreference: userPreferenceReducer,
  },
  middleware: (getDefault) =>
    getDefault().prepend(userPreferenceListener.middleware),
});

//TODO: understand between prepend() and concat() and the execution order of middlewares in RTK

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
