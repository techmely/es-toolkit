// @__NO_SIDE_EFFECTS__
export function isString(val: unknown): val is string {
  return typeof val === "string";
}
