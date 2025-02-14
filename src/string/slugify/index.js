export function slugify(text) {
    if (!text) {
        return "";
    }
    return text
        .toString()
        .normalize("NFKD")
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[Đđ]/g, "d")
        .replace(/[^\w-]+/g, "")
        .replace(/[^\w-]+/g, "")
        .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "-")
        .replace(/--+/g, "-");
}
