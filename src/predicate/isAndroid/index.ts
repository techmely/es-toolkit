// @__NO_SIDE_EFFECTS__
export function isAndroid() {
  return typeof navigator !== "undefined" ? /(android)/i.test(navigator.userAgent) : false;
}
