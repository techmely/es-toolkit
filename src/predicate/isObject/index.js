export function isObject(val) {
    return toString.call(val) === "[object Object]" && !Array.isArray(val);
}
