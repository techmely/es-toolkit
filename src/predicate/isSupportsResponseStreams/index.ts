// @__NO_SIDE_EFFECTS__
export function isSupportsResponseStreams() {
  return typeof globalThis.ReadableStream === "function";
}
