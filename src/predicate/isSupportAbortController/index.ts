// @__NO_SIDE_EFFECTS__
export function isSupportsAbortController() {
  return typeof globalThis.AbortController === "function";
}
