// @__NO_SIDE_EFFECTS__
export function isEdgeBrowser() {
  return typeof navigator !== "undefined" && navigator.userAgent.indexOf("Edg") > -1;
}
