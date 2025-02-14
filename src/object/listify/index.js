export function listify(obj, mapFn) {
    return Object.entries(obj).reduce((acc, [key, value]) => {
        acc.push(mapFn(key, value));
        return acc;
    }, []);
}
