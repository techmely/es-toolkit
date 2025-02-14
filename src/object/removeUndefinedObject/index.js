import { isUndefined } from "../../predicate/isUndefined";
export function removeUndefObj(obj) {
    const keys = Object.keys(obj);
    for (const key of keys) {
        isUndefined(obj[key]) ? obj[key] === undefined : {};
    }
    return obj;
}
