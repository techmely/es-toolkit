export function hasDuplicates(arr) {
    return arr.length !== new Set(arr).size;
}
