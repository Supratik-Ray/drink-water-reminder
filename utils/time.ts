export function timeStringToDate(timeString: string): Date {
  const [hours, minutes] = timeString.split(":").map(Number);

  const date = new Date();

  date.setHours(hours, minutes, 0, 0);

  return date;
}

export function dateToTimeString(date: Date): string {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

export function timestampToTimeString(timestamp: number) {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const mins = date.getMinutes().toString().padStart(2, "0");
  const suffix = hours >= 12 ? "pm" : "am";
  let formattedHour;
  //TODO: IMPROVE DUPLICATE LOGIC
  if (hours >= 13) {
    formattedHour = (hours - 13 + 1).toString().padStart(2, "0");
  } else {
    formattedHour = hours.toString().padStart(2, "0");
  }
  return `${formattedHour}:${mins} ${suffix}`;
}
