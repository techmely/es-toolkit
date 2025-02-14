// @__NO_SIDE_EFFECTS__
export function isDate(val: unknown): val is Date {
  return toString.call(val) === "[object Date]";
}
