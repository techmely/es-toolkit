export function isISOString(val) {
    const d = new Date(val);
    return !Number.isNaN(d.valueOf()) && d.toISOString() === val;
}
