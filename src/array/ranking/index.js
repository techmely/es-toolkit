export function ranking(arr, compFn) {
    return arr.map((a) => arr.filter((b) => compFn(a, b)).length + 1);
}
