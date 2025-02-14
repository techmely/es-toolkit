import { isNotEmpty } from "../isNotEmpty";
export function isNotEmpties(...args) {
    if (args.length > 1) {
        return args.reduce((a, b) => a && isNotEmpty(b), true);
    }
    return false;
}
