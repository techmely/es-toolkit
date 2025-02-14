import { isRegExp } from "../../predicate/isRegexp";
export function objectIncludes(object1, object2, options = { strict: true }) {
    const keys = Object.keys(object2);
    if (!keys.length) {
        return true;
    }
    return keys.every((key) => {
        if (options.strict) {
            return object2[key] === object1[key];
        }
        if (isRegExp(object2[key])) {
            return object2[key].test(object1[key]);
        }
        return object2[key] === object1[key];
    });
}
