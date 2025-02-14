import { isNumber } from "../../predicate/isNumber";
export function formatLot10Volume(volume, precision = 0, defaultValue = "-") {
    if (!isNumber(volume)) {
        return defaultValue;
    }
    return (volume * 10)?.toLocaleString("en", { minimumFractionDigits: precision }).slice(0, -1);
}
