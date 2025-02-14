// @__NO_SIDE_EFFECTS__
export function isFunction(val: any): val is Function {
  return typeof val === "function";
}
