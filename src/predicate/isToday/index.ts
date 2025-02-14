import { isSameDay } from "../isSameDay";

// @__NO_SIDE_EFFECTS__
export function isToday(date: Date): boolean {
  return isSameDay(date, new Date());
}
