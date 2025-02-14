import { isEmpty } from "../isEmpty";
export function isEmpties(...args) {
    if (args.length > 1) {
        return args.reduce((a, b) => a && isEmpty(b), true);
    }
    return false;
}
