export function flattenObject(obj, prefix = "", result = {}) {
    for (const key in obj) {
        const newKey = prefix ? `${prefix}.${key}` : key;
        if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
            flattenObject(obj[key], newKey, result);
        }
        else {
            result[newKey] = obj[key];
        }
    }
    return result;
}
