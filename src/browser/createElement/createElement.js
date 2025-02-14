import { invariant } from "../../common/invariant";
import { isBrowser } from "../../predicate/isBrowser";
export function createElement(tag, ...children) {
    invariant(isBrowser(), "Not in browser environment");
    let element = tag;
    if (typeof element === "string")
        element = document.createElement(element);
    let i = 1;
    const next = arguments[1];
    if (next && typeof next === "object" && !next.nodeType && !Array.isArray(next)) {
        for (const name in next) {
            const value = next?.[name];
            if (typeof value === "string")
                element.setAttribute(name, value);
            if (value)
                element[name] = value;
        }
        i++;
    }
    for (; i < arguments.length; i++)
        add(element, arguments[i]);
    return element;
}
function add(element, child) {
    if (!child)
        return;
    if (typeof child === "string") {
        element.appendChild(document.createTextNode(child));
    }
    else if (child.nodeType !== null) {
        element.appendChild(child);
    }
    else if (Array.isArray(child)) {
        for (const c of child) {
            add(element, c);
        }
    }
}
