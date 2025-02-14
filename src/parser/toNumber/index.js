export function toNumber(value) {
    const n = Number.parseFloat(value);
    return Number.isNaN(n) ? value : n;
}
