import { invariant } from "../../common/invariant";
import { isBrowser } from "../../predicate/isBrowser";
export function createStyleTag(style, options) {
    invariant(isBrowser());
    const { id, ...rest } = options;
    const styleTag = document.querySelector(`style[#${id}]`);
    if (styleTag)
        return styleTag;
    const styleNode = document.createElement("style");
    const values = Object.entries(rest);
    for (const [k, v] of values) {
        styleNode.setAttribute(k, v);
    }
    styleNode.setAttribute("id", id);
    styleNode.innerHTML = style;
    document.getElementsByTagName("head")[0].appendChild(styleNode);
    return styleNode;
}
