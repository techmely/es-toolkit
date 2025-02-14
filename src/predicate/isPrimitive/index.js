export function isPrimitive(value) {
    if (value === null) {
        return true;
    }
    return !["array", "function", "object"].includes(typeof value);
}
