import { isNotNullish } from "../../predicate/isNotNullish";
export function mapObject(obj, fn) {
    return Object.fromEntries(Object.entries(obj)
        .map(([k, v]) => fn(k, v))
        .filter(isNotNullish));
}
