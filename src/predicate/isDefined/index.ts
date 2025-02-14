// @__NO_SIDE_EFFECTS__
export function isDefined<T = any>(val?: T): val is T {
  return typeof val !== "undefined";
}
