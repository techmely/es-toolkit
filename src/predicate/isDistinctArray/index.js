export function isDistinctArray(arr) {
    return arr.length === new Set(arr).size;
}
