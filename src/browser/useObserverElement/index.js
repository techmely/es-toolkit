import { invariant } from "../../common/invariant";
import { isBrowser } from "../../predicate/isBrowser";
export function useObserverElement() {
    invariant(isBrowser());
    let observer = null;
    const callbacks = new Map();
    const observe = (element, callback) => {
        if (!observer) {
            observer = new IntersectionObserver((entries) => {
                for (const entry of entries) {
                    const callback = callbacks.get(entry.target);
                    const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
                    if (isVisible && callback) {
                        callback();
                    }
                }
            });
        }
        callbacks.set(element, callback);
        observer.observe(element);
        return () => {
            callbacks.delete(element);
            observer?.unobserve(element);
            if (callbacks.size === 0) {
                observer?.disconnect();
                observer = null;
            }
        };
    };
    return observe;
}
