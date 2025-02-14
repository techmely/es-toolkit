import { toISOStringTimezone } from "../../date/toISOStringTimezone";
export function isISOStringWithTimezone(val) {
    const d = new Date(val);
    return !Number.isNaN(d.valueOf()) && toISOStringTimezone(d) === val;
}
