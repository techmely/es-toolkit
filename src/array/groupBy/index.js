export function groupBy(list, keyGetter) {
    const map = new Map();
    for (const item of list) {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (collection) {
            collection.push(item);
        }
        else {
            map.set(key, [item]);
        }
    }
    return map;
}
