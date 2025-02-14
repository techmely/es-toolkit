// @__NO_SIDE_EFFECTS__
export function isIOSChrome() {
  return typeof navigator !== "undefined" && navigator.userAgent.match("CriOS");
}
