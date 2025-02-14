import { digitLengthPrecision } from "../numberDigitLengthPrecision";
import { stripPrecision } from "../numberStripPrecision";
export function float2FixedPrecision(num) {
    if (num.toString().indexOf("e") === -1) {
        return Number(num.toString().replace(".", ""));
    }
    const dLen = digitLengthPrecision(num);
    const powDLen = 10 ** dLen;
    return dLen > 0 ? stripPrecision(Number(num) * powDLen) : Number(num);
}
