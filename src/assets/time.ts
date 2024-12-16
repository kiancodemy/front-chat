export function formatTimestampToTime(
  timestamp: string,
  use24HourFormat = true
): string {
  const date = new Date(timestamp);

  // Extract hours and minutes
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");

  if (!use24HourFormat) {
    // Convert to 12-hour format
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour clock
    return `${hours.toString().padStart(2, "0")}:${minutes} ${ampm}`;
  }

  // Return 24-hour format
  return `${hours.toString().padStart(2, "0")}:${minutes}`;
}
