import { isSameDay } from "../isSameDay";
export function isToday(date) {
    return isSameDay(date, new Date());
}
