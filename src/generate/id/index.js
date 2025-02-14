import baseX from "base-x";
const b58 = baseX("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
export function generateSortableBuff() {
    const buf = crypto.getRandomValues(new Uint8Array(20));
    const EPOCH_TIMESTAMP = 1_700_000_000_000;
    const t = Date.now() - EPOCH_TIMESTAMP;
    buf[0] = (t >>> 24) & 255;
    buf[1] = (t >>> 16) & 255;
    buf[2] = (t >>> 8) & 255;
    buf[3] = t & 255;
    return buf;
}
export function generateId() {
    const buf = generateSortableBuff();
    return `${b58.encode(buf)}`;
}
export function generatePrefixId(prefix = "key") {
    return `${prefix}_${generateId()}`;
}
