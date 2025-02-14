export function percentToHex(percent) {
    if (percent < 0 || percent > 100) {
        throw new Error("Value must in range [0, 100]");
    }
    const intValue = Math.round((percent / 100) * 255);
    const hexValue = intValue.toString(16);
    return hexValue.padStart(2, "0").toUpperCase();
}
