import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import timezone from "dayjs/plugin/timezone.js";
import utc from "dayjs/plugin/utc.js";
dayjs.extend(utc);
dayjs.extend(relativeTime);
dayjs.extend(timezone);
const timeZone = dayjs.tz.guess();
dayjs.tz.setDefault(timeZone);
export function formatDate(date, format = "DD/MM/YYYY") {
    return dayjs(date).format(format);
}
export function formatDateToNow(date) {
    return dayjs(date).fromNow();
}
export function parseUnix(time) {
    return dayjs.unix(time);
}
export function getUnixTime(date) {
    return dayjs(date).unix();
}
export function formatDateUnixTime(seconds, format = "DD/MM/YYYY") {
    return formatDate(dayjs.unix(seconds).toISOString(), format);
}
export function diffDate(toDate, fromDate, config) {
    const formattedToDate = dayjs(toDate).format("YYYY-MM-DD");
    const formattedFromDate = dayjs(fromDate).format("YYYY-MM-DD");
    return dayjs(formattedFromDate).diff(dayjs(formattedToDate), config?.unit, config?.float);
}
export function addNewDate(date, addDays = 0) {
    return dayjs(date).add(addDays, "day").toDate();
}
export { dayjs };
