import Screen from "@/components/UI/Screen";
import React from "react";
import { StyleSheet, Text } from "react-native";

export default function index() {
  return (
    <Screen className="p-10">
      <Text className="text-4xl text-primary">Hello world</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({});
