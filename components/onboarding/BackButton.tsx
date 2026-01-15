import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React from "react";
import { Pressable } from "react-native";

export default function BackButton() {
  return (
    <Pressable
      onPress={() => router.back()}
      className="absolute top-20 left-10 bg-surface px-8 py-4 rounded-full"
    >
      <Ionicons name="chevron-back" size={20} color="white" />
    </Pressable>
  );
}
