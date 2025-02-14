export function getQuarter(d = new Date()) {
    return Math.ceil((d.getMonth() + 1) / 3);
}
