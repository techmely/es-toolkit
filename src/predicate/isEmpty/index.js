import { isArray } from "../isArray";
import { isEmptyArr } from "../isEmptyArray";
import { isObject } from "../isObject";
import { isString } from "../isString";
export function isEmpty(val) {
    if (!val) {
        return true;
    }
    if (isArray(val)) {
        return isEmptyArr(val);
    }
    if (isString(val)) {
        return val.trim().length === 0;
    }
    if (val instanceof Map || val instanceof Set) {
        return val.size === 0;
    }
    if (isObject(val)) {
        return Object.keys(val).length === 0;
    }
    return false;
}
