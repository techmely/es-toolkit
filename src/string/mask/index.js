import { invariant } from "../../common/invariant";
export function mask(cc, num = 4, mask = "*") {
    invariant(cc);
    return `${cc}`.slice(-num).padStart(`${cc}`.length, mask);
}
