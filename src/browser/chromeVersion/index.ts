import { isChrome } from "../../predicate/isChrome";

// @__NO_SIDE_EFFECTS__
export function chromeVersion() {
  if (isChrome()) {
    const segments = /Chrome\/(\d+)/.exec(navigator.userAgent) || [0, 0];
    return +segments[1];
  }
  return 0;
}
