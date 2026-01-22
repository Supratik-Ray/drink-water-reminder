import { store } from "@/store/store";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import "../global.css";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          contentStyle: {
            backgroundColor: "#0F172A",
          },
        }}
      >
        <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}
