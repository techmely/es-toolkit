export function isSet(val) {
    return toString.call(val) === "[object Set]";
}
