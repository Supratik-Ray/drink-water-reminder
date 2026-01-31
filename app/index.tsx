import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

export default function index() {
  const [hasUserPreferences, setHasUserPreference] = useState<boolean | null>(
    null,
  );

  useEffect(() => {
    (async () => {
      const userPreferences = await AsyncStorage.getItem("user-preferences");
      setHasUserPreference(!!userPreferences);
    })();
  }, []);

  if (hasUserPreferences === null) {
    return null;
  }

  return hasUserPreferences ? (
    <Redirect href={"/(tabs)"} />
  ) : (
    <Redirect href={"/(onboarding)"} />
  );
}

const styles = StyleSheet.create({});
