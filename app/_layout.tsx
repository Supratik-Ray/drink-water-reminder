import { initDb } from "@/db/databaseUtils";
import { setNotificationHandler } from "@/lib/notifications";
import { initState } from "@/store/features/user-preference";
import { store } from "@/store/store";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SplashScreen, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function init() {
      try {
        setNotificationHandler();
        await initDb();
        const jsonData = await AsyncStorage.getItem("user-preferences");
        if (!jsonData) return;
        const userPreferences = JSON.parse(jsonData);
        store.dispatch(initState(userPreferences));
      } catch (error) {
        console.warn("error initializing app!");
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
      <GestureHandlerRootView className="flex-1">
        <BottomSheetModalProvider>
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: {
                backgroundColor: "#0F172A",
              },
            }}
          >
            <Stack.Screen name="index" />
            <Stack.Screen name="(onboarding)" />
            <Stack.Screen name="(tabs)" />
          </Stack>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}
