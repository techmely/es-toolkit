import { windowMatchMedia } from "../../browser/matchMedia";
export function isPrefersReducedMotion() {
    const mediaQuery = windowMatchMedia()?.("(prefers-reduced-motion: reduce)");
    return typeof window !== "undefined" ? mediaQuery?.matches : false;
}
