// @__NO_SIDE_EFFECTS__
export function isSameDay(date1?: Date, date2?: Date): boolean {
  if (!(date1 && date2)) {
    return false;
  }

  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}
