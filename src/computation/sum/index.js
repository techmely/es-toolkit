export function sum(...args) {
    return [...args].flat(1).reduce((a, b) => a + b, 0);
}
