import BackButton from "@/components/onboarding/BackButton";
import MascotImage from "@/components/onboarding/MascotImage";
import OnboardingSubtitle from "@/components/onboarding/OnboardingSubtitle";
import OnboardingTitle from "@/components/onboarding/OnboardingTitle";
import TimeField from "@/components/onboarding/TimeField";
import PrimaryButton from "@/components/UI/PrimaryButton";
import Screen from "@/components/UI/Screen";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useState } from "react";

const mascotImage = require("../../assets/images/mascot/schedule.png");

export default function Schedule() {
  const [pickerType, setPickerType] = useState<null | "wake" | "sleep">(null);
  const [wakeUpTime, setWakeUpTime] = useState(() => {
    const date = new Date();
    date.setHours(9, 0, 0, 0);
    return date;
  });

  const [sleepTime, setSleepTime] = useState(() => {
    const date = new Date();
    date.setHours(23, 0, 0, 0);
    return date;
  });

  const onChange = (_: DateTimePickerEvent, selected: Date | undefined) => {
    setPickerType(null);
    if (!selected) return;

    pickerType === "wake" ? setWakeUpTime(selected) : setSleepTime(selected);
  };

  return (
    <Screen className="justify-center items-center">
      <BackButton />
      <MascotImage path={mascotImage} />
      <OnboardingTitle className="mb-4">When are you awake?</OnboardingTitle>
      <OnboardingSubtitle className="mb-8">
        We’ll send reminders only while you’re active.
      </OnboardingSubtitle>

      <TimeField
        label="Wake-up Time"
        time={wakeUpTime}
        onPress={() => setPickerType("wake")}
      />

      <TimeField
        label="Sleeping Time"
        time={sleepTime}
        onPress={() => setPickerType("sleep")}
      />

      {pickerType && (
        <DateTimePicker
          value={pickerType === "wake" ? wakeUpTime : sleepTime}
          mode="time"
          display="default"
          onChange={onChange}
        />
      )}

      <PrimaryButton className="w-full absolute bottom-20">Next</PrimaryButton>
    </Screen>
  );
}
