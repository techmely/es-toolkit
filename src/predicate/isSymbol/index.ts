// @__NO_SIDE_EFFECTS__
export function isSymbol(val: unknown): val is symbol {
  return typeof val === "symbol";
}
