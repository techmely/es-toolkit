import { isServer } from "../../predicate/isServer";
export function onClickOutside(element, callback) {
    if (isServer())
        return;
    document.addEventListener("click", (e) => {
        if (!element.contains(e.target))
            callback();
    });
}
