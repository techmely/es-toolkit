import { isWebkit } from "../../predicate/isWebkit";

// @__NO_SIDE_EFFECTS__
export function webkitVersion() {
  if (typeof navigator === "undefined") return 0;
  return isWebkit() ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
}
