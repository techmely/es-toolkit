export function stripPrecision(num, precision = 15) {
    return +Number.parseFloat(Number(num).toPrecision(precision));
}
