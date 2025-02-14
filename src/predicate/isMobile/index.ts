import { windowMatchMedia } from "../../browser/matchMedia";

// @__NO_SIDE_EFFECTS__
export function isMobile() {
  return typeof window !== "undefined" ? windowMatchMedia()?.("(pointer:coarse)")?.matches : false;
}

// @__NO_SIDE_EFFECTS__
export function isMobileUserAgent(userAgent: string) {
  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return mobileRegex.test(userAgent);
}
