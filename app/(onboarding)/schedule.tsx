import BackButton from "@/components/onboarding/BackButton";
import MascotImage from "@/components/onboarding/MascotImage";
import OnboardingScreenLayout from "@/components/onboarding/OnboardingScreenLayout";
import OnboardingSubtitle from "@/components/onboarding/OnboardingSubtitle";
import OnboardingTitle from "@/components/onboarding/OnboardingTitle";
import TimeField from "@/components/onboarding/TimeField";
import { changeSchedule } from "@/store/features/user-preference";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { dateToTimeString, timeStringToDate } from "@/utils/time";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useState } from "react";

const mascotImage = require("../../assets/images/mascot/schedule.png");

export default function Schedule() {
  const [pickerType, setPickerType] = useState<null | "wake" | "sleep">(null);

  const {
    schedule: { wakeUpTime, sleepTime },
  } = useAppSelector((state) => state.userPreference);

  const dispatch = useAppDispatch();

  const wakeUpTimeObj = timeStringToDate(wakeUpTime);
  const sleepTimeObj = timeStringToDate(sleepTime);

  const onChange = (_: DateTimePickerEvent, selected: Date | undefined) => {
    setPickerType(null);
    if (!selected) return;

    if (!pickerType) return;

    dispatch(
      changeSchedule({
        field: pickerType === "wake" ? "wakeUpTime" : "sleepTime",
        time: dateToTimeString(selected),
      }),
    );
  };

  return (
    <OnboardingScreenLayout nextScreen={"/(onboarding)/last"}>
      <BackButton />
      <MascotImage path={mascotImage} />
      <OnboardingTitle className="mb-4">When are you awake?</OnboardingTitle>
      <OnboardingSubtitle className="mb-8">
        We’ll send reminders only while you’re active.
      </OnboardingSubtitle>

      <TimeField
        label="Wake-up Time"
        time={wakeUpTimeObj}
        onPress={() => setPickerType("wake")}
      />

      <TimeField
        label="Sleeping Time"
        time={sleepTimeObj}
        onPress={() => setPickerType("sleep")}
      />

      {pickerType && (
        <DateTimePicker
          value={pickerType === "wake" ? wakeUpTimeObj : sleepTimeObj}
          mode="time"
          display="default"
          onChange={onChange}
        />
      )}
    </OnboardingScreenLayout>
  );
}
