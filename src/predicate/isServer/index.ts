// @__NO_SIDE_EFFECTS__
export function isServer() {
  return typeof window === "undefined";
}
