// @__NO_SIDE_EFFECTS__
export function isSet(val: unknown): val is Set<any> {
  return toString.call(val) === "[object Set]";
}
