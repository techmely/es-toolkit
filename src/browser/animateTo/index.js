import { isPrefersReducedMotion } from "../../predicate/isPrefersReducedMotion";
export function animateTo(el, keyframes, options) {
    return new Promise((resolve) => {
        if (options?.duration === Number.POSITIVE_INFINITY) {
            throw new Error("Promise-based animations must be finite.");
        }
        const animation = el.animate(keyframes, {
            ...options,
            duration: isPrefersReducedMotion() ? 0 : options?.duration,
        });
        animation.addEventListener("cancel", resolve, { once: true });
        animation.addEventListener("finish", resolve, { once: true });
    });
}
