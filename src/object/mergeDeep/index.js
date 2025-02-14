import { isObject } from "../../predicate";
export function mergeDeep(target, ...sources) {
    if (sources.length === 0) {
        return target;
    }
    const source = sources.shift();
    if (source === undefined) {
        return target;
    }
    if (isObject(target) && isObject(source)) {
        const sourceKeys = Object.keys(source);
        for (const key of sourceKeys) {
            if (isObject(source[key])) {
                if (!target[key]) {
                    target[key] = {};
                }
                if (isObject(target[key])) {
                    mergeDeep(target[key], source[key]);
                }
                else {
                    target[key] = source[key];
                }
            }
            else {
                target[key] = source[key];
            }
        }
    }
    return mergeDeep(target, ...sources);
}
