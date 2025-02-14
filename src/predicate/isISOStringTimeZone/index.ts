import { toISOStringTimezone } from "../../date/toISOStringTimezone";

// @__NO_SIDE_EFFECTS__
export function isISOStringWithTimezone(val: string) {
  const d = new Date(val);
  return !Number.isNaN(d.valueOf()) && toISOStringTimezone(d) === val;
}
