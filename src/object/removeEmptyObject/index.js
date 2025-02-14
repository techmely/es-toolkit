import { isDefined } from "../../predicate/isDefined";
import { isNotEmpty } from "../../predicate/isNotEmpty";
import { isNotNull } from "../../predicate/isNotNull";
export function removeEmptyObj(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => isNotNull(v) && isDefined(v) && isNotEmpty(v)));
}
