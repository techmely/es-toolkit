export function getRandomString(length, alphanumeric) {
    let str = "";
    let i = 0;
    const min = alphanumeric === "a" ? 10 : 0;
    const max = alphanumeric === "n" ? 10 : 62;
    while (i++ < length) {
        let r = Math.trunc(Math.random() * (max - min) + min);
        str += String.fromCodePoint((r += r > 9 ? (r < 36 ? 55 : 61) : 48));
    }
    return str;
}
