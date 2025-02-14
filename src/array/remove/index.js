export function remove(arr, el) {
    const i = arr.indexOf(el);
    if (i > -1) {
        arr.splice(i, 1);
    }
}
