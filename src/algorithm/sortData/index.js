import { isNumber } from "../../predicate/isNumber";
import { SortDirection } from "../sortByKey";
export function sortData(a, b, direction = SortDirection.ASC, options) {
    let result = 0;
    const { locale = "vi", shouldIgnoreZero = false } = options || {};
    if (shouldIgnoreZero) {
        if (a === b) {
            return 0;
        }
        if (a === 0) {
            return 1;
        }
        if (b === 0) {
            return -1;
        }
    }
    if (isNumber(a) && isNumber(b)) {
        const aParsed = a?.toString() ?? "";
        const bParsed = b?.toString() ?? "";
        result = isNumber(a) && isNumber(b) ? a - b : aParsed.localeCompare(bParsed, locale);
    }
    return direction === SortDirection.ASC ? result : -result;
}
