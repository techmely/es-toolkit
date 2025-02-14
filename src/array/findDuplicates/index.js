export function findDuplicates(items) {
    const filtered = items.filter((el, index) => items.indexOf(el) !== index);
    return [...new Set(filtered)];
}
