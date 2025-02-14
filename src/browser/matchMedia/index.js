export function windowMatchMedia() {
    return typeof window !== "undefined" ? window.matchMedia || window.msMatchMedia : undefined;
}
