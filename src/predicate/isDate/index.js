export function isDate(val) {
    return toString.call(val) === "[object Date]";
}
