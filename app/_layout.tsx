import { initState } from "@/store/features/user-preference";
import { store } from "@/store/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SplashScreen, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);
  const [hasSavedPreferences, setHasSavedPreferences] = useState(false);

  useEffect(() => {
    async function init() {
      try {
        const jsonData = await AsyncStorage.getItem("user-preferences");
        if (!jsonData) return;
        const userPreferences = JSON.parse(jsonData);
        store.dispatch(initState(userPreferences));
        setHasSavedPreferences(true);
      } catch (error) {
        console.warn("error getting user preferences!");
      } finally {
        setIsReady(true);
      }
    }
    init();
  }, []);

  useEffect(() => {
    if (isReady) {
      SplashScreen.hide();
    }
  }, [isReady]);

  if (!isReady) return null;

  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          contentStyle: {
            backgroundColor: "#0F172A",
          },
        }}
      >
        {!hasSavedPreferences && (
          <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
        )}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}
