import BottomSheetContainer from "@/components/home/BottomSheetContainer";
import CircularProgress from "@/components/home/CircularProgressBar";
import WaterContainerList from "@/components/home/WaterContainerList";
import WaterRecordList from "@/components/home/WaterRecordList";
import PrimaryButton from "@/components/UI/PrimaryButton";
import Screen from "@/components/UI/Screen";
import SwitchContainerButton from "@/components/UI/SwitchContainerButton";
import { useTodayWaterRecords } from "@/hooks/useTodayWaterRecords";
import { useAppSelector } from "@/store/hooks";
import { totalWaterIntake } from "@/utils/water-intake";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRef, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function index() {
  const {
    records: todayRecords,
    isFetching,
    addRecord,
  } = useTodayWaterRecords();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const { units, waterContainerId, dailyWaterIntakeAmount } = useAppSelector(
    (state) => state.userPreference,
  );

  // bottomsheet-ref
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  if (isFetching) {
    return (
      <Screen className="justify-center items-center">
        <ActivityIndicator size={24} />
      </Screen>
    );
  }
  return (
    <Screen>
      <GestureHandlerRootView className="flex-1">
        <View className="items-center mb-10 relative mt-20">
          <View className="mb-8">
            <CircularProgress
              current={totalWaterIntake(todayRecords, units.water)}
              goal={dailyWaterIntakeAmount!}
              unit="ml"
              size={300}
              strokeWidth={25}
              color="#3B82F6"
              unitTextSize={20}
              valueTextSize={30}
            />
          </View>

          <PrimaryButton onPress={() => addRecord(waterContainerId)}>
            Drink water
          </PrimaryButton>

          <SwitchContainerButton
            onPress={() => bottomSheetRef.current?.present()}
          />
        </View>
        <View className="px-10 flex-1 mb-15">
          <Text className="text-muted font-bold text-lg mb-8">
            Today's Records
          </Text>
          <WaterRecordList todayRecords={todayRecords} />
        </View>
        <BottomSheetContainer bottomSheetRef={bottomSheetRef}>
          <Text className="text-lg mb-8 text-white font-bold">
            Switch Container
          </Text>
          <WaterContainerList />
        </BottomSheetContainer>
      </GestureHandlerRootView>
    </Screen>
  );
}
