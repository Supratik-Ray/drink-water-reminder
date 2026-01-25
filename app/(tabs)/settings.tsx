import PrimaryButton from "@/components/UI/PrimaryButton";
import Screen from "@/components/UI/Screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Alert, StyleSheet, Text } from "react-native";

export default function settings() {
  async function onReset() {
    await AsyncStorage.clear();
    Alert.alert("Success!", "App completely reset!");
  }
  return (
    <Screen className="p-10">
      <Text>settings</Text>
      <PrimaryButton onPress={onReset}>Reset App</PrimaryButton>
    </Screen>
  );
}

const styles = StyleSheet.create({});
