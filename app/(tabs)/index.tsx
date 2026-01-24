import CircularProgress from "@/components/home/CircularProgressBar";
import FloatingActionButton from "@/components/UI/FloatingActionButton";
import PrimaryButton from "@/components/UI/PrimaryButton";
import Screen from "@/components/UI/Screen";
import { waterContainers } from "@/utils/icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useCallback, useRef, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function index() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [current, setCurrent] = useState(500);
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    if (index >= 0) {
      setIsSheetOpen(true);
    } else {
      setIsSheetOpen(false);
    }
  }, []);

  return (
    <Screen>
      <GestureHandlerRootView className="flex-1">
        <View className="items-center mb-10 relative mt-20">
          <View className="mb-8">
            <CircularProgress
              current={current}
              goal={2500}
              unit="ml"
              size={300}
              strokeWidth={25}
              color="#3B82F6"
              unitTextSize={20}
              valueTextSize={30}
            />
          </View>

          <PrimaryButton>Drink water</PrimaryButton>
          <FloatingActionButton
            icon="swap-horizontal"
            color="white"
            size={20}
            onPress={() => {
              if (!isSheetOpen) {
                bottomSheetRef.current?.snapToIndex(0);
                return;
              } else {
                bottomSheetRef.current?.close();
              }
            }}
          />
        </View>
        <Text className="text-muted text-lg">Water logs</Text>
        <View className="flex-1">
          <ScrollView>
            <View className="flex-row justify-between"></View>
          </ScrollView>
        </View>
        <BottomSheet
          ref={bottomSheetRef}
          onChange={handleSheetChanges}
          index={-1}
          enablePanDownToClose
          detached
          snapPoints={["50%", "60%"]}
          enableDynamicSizing={false}
          bottomInset={1}
          backgroundStyle={{
            backgroundColor: "#1E293B",
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
          }}
          handleIndicatorStyle={{
            backgroundColor: "#94A3B8",
          }}
        >
          <BottomSheetView className="flex-1 p-10 items-center">
            <View className="flex-row flex-wrap gap-10 justify-start w-[300px]">
              {waterContainers.map((container) => (
                <View
                  key={container.id}
                  className="items-center p-3 w-50  gap-2"
                >
                  <container.Icon
                    fill={"#3B82F6"}
                    height={40}
                    width={40}
                    color={"#3B82F6"}
                  />
                  <Text className="text-white">{container.ml} ml</Text>
                </View>
              ))}
              <View className="gap-2 items-center p-3">
                <Ionicons name="add-circle" size={40} color={"#3B82F6"} />
                <Text className="text-white">Custom</Text>
              </View>
            </View>
          </BottomSheetView>
        </BottomSheet>
      </GestureHandlerRootView>
    </Screen>
  );
}
