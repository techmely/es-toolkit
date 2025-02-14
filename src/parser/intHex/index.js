export function intToHex(integer) {
    if (integer < 0) {
        throw new Error("Invalid integer as argument, must be unsigned!");
    }
    const hex = integer.toString(16);
    return hex.length % 2 ? `0${hex}` : hex;
}
