/**
 * Usually to check is Firefox browser
 */
// @__NO_SIDE_EFFECTS__
export function isGecko() {
  return typeof navigator !== "undefined" && /gecko\/(\d+)/i.test(navigator.userAgent);
}
