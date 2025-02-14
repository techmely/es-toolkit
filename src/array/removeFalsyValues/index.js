export function removeFalsyValues(arr) {
    const result = [];
    for (const item of arr) {
        if (item) {
            result.push(item);
        }
    }
    return result;
}
