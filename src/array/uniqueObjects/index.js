export function uniqueObjs(items, uniqueKey) {
    const map = new Map();
    for (const item of items) {
        const key = item[uniqueKey];
        if (!map.has(key)) {
            map.set(key, item);
        }
    }
    return [...map.values()];
}
