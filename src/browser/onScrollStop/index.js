import { isServer } from "../../predicate/isServer";
export function onScrollStop(callback, timeout = 150) {
    if (isServer())
        return;
    let isScrolling;
    window.addEventListener("scroll", () => {
        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
            callback();
        }, timeout);
    }, false);
}
