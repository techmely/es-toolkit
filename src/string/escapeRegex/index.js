export function escapeRegExp(val) {
    return val.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
