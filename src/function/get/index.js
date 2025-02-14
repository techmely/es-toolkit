export function get(from, selector) {
    return selector
        .replace(/\[([^\[\]]*)\]/g, ".$1.")
        .split(".")
        .filter((t) => t !== "")
        .reduce((acc, curr) => acc?.[curr], from);
}
