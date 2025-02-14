export function cutString(value, limit) {
    if (!value && typeof value !== "string")
        return undefined;
    if (value.length === 0)
        return value;
    return value.split("").slice(0, limit).join("");
}
