export function truncate(str, limit, text = "...") {
    if (str.length > limit) {
        return `${str.substring(0, limit)} ${text}`;
    }
    return str;
}
