export function partition(arr, fn) {
    return arr
        .reduce((acc, val, i, arr) => {
        const current = fn(val, i, arr);
        if (acc.has(current))
            acc.get(current).push(val);
        else
            acc.set(current, [val]);
        return acc;
    }, new Map())
        .values();
}
