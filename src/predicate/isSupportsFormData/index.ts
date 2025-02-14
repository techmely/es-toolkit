// @__NO_SIDE_EFFECTS__
export function isSupportsFormData() {
  return typeof globalThis.FormData === "function";
}
