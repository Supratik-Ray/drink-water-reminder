import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

//this controls how notification will be handled when app is running

export function setNotificationHandler() {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowBanner: true,
      shouldShowList: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });
}

//requests the permission needed for notification
export async function requestNotificationPermission() {
  if (!Device.isDevice) {
    alert("Must use physical device for notifications.");
    return false;
  }

  const { status } = await Notifications.getPermissionsAsync();

  if (status !== "granted") {
    const { status: newStatus } = await Notifications.requestPermissionsAsync();
    return newStatus === "granted";
  }

  return true;
}

//function to schedule notification

export async function scheduleWaterReminder(hour: number, minute: number) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "💧 Time to drink water",
      body: "Stay hydrated. Take a sip now",
      sound: "default",
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY,
      hour,
      minute,
    },
  });
}

export async function hasScheduledReminders() {
  const scheduled = await Notifications.getAllScheduledNotificationsAsync();
  return scheduled.length > 0;
}

//remove allscheduledreminders

export async function removeAllReminders() {
  await Notifications.cancelAllScheduledNotificationsAsync();
}
