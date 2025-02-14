import { windowMatchMedia } from "../../browser/matchMedia";

/** Tells if the user has enabled the "reduced motion" setting in their browser or OS. */
// @__NO_SIDE_EFFECTS__
export function isPrefersReducedMotion() {
  const mediaQuery = windowMatchMedia()?.("(prefers-reduced-motion: reduce)");
  return typeof window !== "undefined" ? mediaQuery?.matches : false;
}
