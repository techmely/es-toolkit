import { isNumber } from "../../predicate/isNumber";
import { dividePrecision } from "../numberDivinePrecision";
import { timesPrecision } from "../numberTimesPrecision";
export function roundPrecision(num, decimal) {
    const base = 10 ** decimal;
    let result = dividePrecision(Math.round(Math.abs(timesPrecision(num, base))), base);
    if (isNumber(num) && num < 0 && result !== 0) {
        result = timesPrecision(result, -1);
    }
    return result;
}
