export function suffixAmPm(h) {
    return `${h % 12 === 0 ? 12 : h % 12}${h < 12 ? "am" : "pm"}`;
}
