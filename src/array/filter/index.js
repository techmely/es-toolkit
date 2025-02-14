export function filterArrays(arr1, arr2, filterCondition) {
    const set = new Set(arr2);
    const result = [];
    for (const a of arr1) {
        for (const b of set) {
            if (filterCondition(a, b)) {
                result.push(a);
                break;
            }
        }
    }
    return result;
}
