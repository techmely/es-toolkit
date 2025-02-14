import { percentToHex } from "../percentToHex";
const HEX_LENGTH = 6;
const HEX_OPACITY_LENGTH = 8;
export function alphaHex(hex, alpha) {
    if (!hex) {
        throw new Error("Hex value is required");
    }
    if (hex.length === HEX_OPACITY_LENGTH) {
        return `${hex.slice(0, HEX_LENGTH)}${percentToHex(alpha)}`;
    }
    return `${hex}${percentToHex(alpha)}`;
}
