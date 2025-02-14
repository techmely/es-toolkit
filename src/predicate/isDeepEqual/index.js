export function isDeepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }
    if (typeof obj1 === "object" && obj1 !== null && typeof obj2 === "object" && obj2 !== null) {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);
        if (keys1.length !== keys2.length) {
            return false;
        }
        for (const key of keys1) {
            if (!Object.hasOwn(obj2, key)) {
                return false;
            }
            if (!isDeepEqual(obj1[key], obj2[key])) {
                return false;
            }
        }
        return true;
    }
    return false;
}
