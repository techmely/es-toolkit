import { isFunction } from "../../predicate/isFunction";
export function callOrReturn(value, context = undefined, ...props) {
    if (isFunction(value)) {
        if (context) {
            return value.bind(context)(...props);
        }
        return value(...props);
    }
    return value;
}
