// @__NO_SIDE_EFFECTS__
export function isAppleDevice() {
  if (typeof navigator === "undefined") return false;
  return /(Mac|iPhone|iPod|iPad)/i.test(navigator.userAgent);
}
