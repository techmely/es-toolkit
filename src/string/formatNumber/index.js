import { isNumber } from "../../predicate/isNumber";
export function formatNumber(num, precision = 0, defaultValue = "-") {
    if (!isNumber(num)) {
        return defaultValue;
    }
    return num.toLocaleString("en", {
        minimumFractionDigits: precision,
        maximumFractionDigits: precision,
    });
}
