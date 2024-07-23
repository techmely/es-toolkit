import { windowMatchMedia } from "./matchMedia";

export function isMobile() {
  return typeof window !== "undefined" ? windowMatchMedia()?.("(pointer:coarse)")?.matches : false;
}

export function isMobileUserAgent(userAgent: string) {
  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return mobileRegex.test(userAgent);
}
