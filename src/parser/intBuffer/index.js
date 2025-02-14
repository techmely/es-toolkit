import { intToHex } from "../intHex";
export function intToBuffer(integer) {
    const hex = intToHex(integer);
    return Buffer.from(hex, "hex");
}
