import SettingHeader from "@/components/settings/SettingHeader";
import SettingItem from "@/components/settings/SettingItem";
import SettingsContainer from "@/components/settings/SettingsContainer";
import Screen from "@/components/UI/Screen";
import { removeAllReminders } from "@/lib/notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Alert, StyleSheet } from "react-native";

export default function settings() {
  async function onReset() {
    console.log("woekinf");
    await AsyncStorage.clear();
    await removeAllReminders();
    Alert.alert("Success!", "App completely reset!");
  }
  return (
    <Screen className="mt-6">
      {/*general settings*/}
      <SettingsContainer>
        <SettingHeader icon="settings-outline">General</SettingHeader>
        <SettingItem label="Water unit" value={"ml"} onPress={() => {}} />
        <SettingItem label="Weight unit" value={"kg"} onPress={() => {}} />
        <SettingItem label="Intake goal" value={2500} onPress={() => {}} />
      </SettingsContainer>

      {/*personal info*/}
      <SettingsContainer>
        <SettingHeader icon="person-outline">Personal Info</SettingHeader>
        <SettingItem label="Gender" value={"male"} onPress={() => {}} />
        <SettingItem label="Weight" value={"75 kg"} onPress={() => {}} />
        <SettingItem
          label="Wake-up time"
          value={"06:00 am"}
          onPress={() => {}}
        />
        <SettingItem label="Bedtime" value={"11:00 pm"} onPress={() => {}} />
      </SettingsContainer>

      {/*other*/}
      <SettingsContainer border={false}>
        <SettingHeader icon="ellipsis-horizontal-outline">Other</SettingHeader>
        <SettingItem label="Reset data" onPress={onReset} />
        <SettingItem label="Feedback" onPress={() => {}} />
        {/* <SettingItem label="Share" onPress={() => {}} /> */}
        <SettingItem label="Privacy policy" onPress={() => {}} />
      </SettingsContainer>
    </Screen>
  );
}

const styles = StyleSheet.create({});
