import ActionModal from "@/components/home/ActionModal";
import BottomSheetContainer from "@/components/home/BottomSheetContainer";
import CircularProgress from "@/components/home/CircularProgressBar";
import WaterContainerList from "@/components/home/WaterContainerList";
import WaterRecordList from "@/components/home/WaterRecordList";
import PrimaryButton from "@/components/UI/PrimaryButton";
import Screen from "@/components/UI/Screen";
import SwitchContainerButton from "@/components/UI/SwitchContainerButton";
import { useTodayWaterRecords } from "@/hooks/useTodayWaterRecords";
import {
  hasScheduledReminders,
  requestNotificationPermission,
  scheduleWaterReminder,
} from "@/lib/notifications";
import { useAppSelector } from "@/store/hooks";
import { totalWaterIntake } from "@/utils/water-intake";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";

//TODO: refetch waterrecords at midnight
export default function index() {
  const {
    records: todayRecords,
    isFetching,
    addRecord,
    deleteRecord,
  } = useTodayWaterRecords();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<string | null>(null);

  const { units, waterContainerId, dailyWaterIntakeAmount } = useAppSelector(
    (state) => state.userPreference,
  );

  useEffect(() => {
    (async function () {
      //if scheduled reminders return
      const hasReminders = await hasScheduledReminders();
      if (hasReminders) return;

      //if no reminders set, then request for permission to set reminders
      const hasPermission = await requestNotificationPermission();

      if (!hasPermission) return;

      //if permission given then set reminders
      await Promise.all([
        scheduleWaterReminder(13, 30),
        scheduleWaterReminder(13, 32),
      ]);
    })();
  }, []);

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
      <ActionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDelete={deleteRecord}
        selectedRecord={selectedRecord}
      />
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
        <WaterRecordList
          todayRecords={todayRecords}
          pressItemHandler={(recordId: string) => {
            setSelectedRecord(recordId);
            setIsModalOpen(true);
          }}
        />
      </View>
      <BottomSheetContainer bottomSheetRef={bottomSheetRef}>
        <Text className="text-lg mb-8 text-white font-bold">
          Switch Container
        </Text>
        <WaterContainerList />
      </BottomSheetContainer>
    </Screen>
  );
}
