export function $(tag, _targer) {
    if (typeof window === "undefined")
        return null;
    const target = _targer || document;
    return document.querySelector.call(target, tag);
}
export function $$(tag, _targer) {
    if (typeof window === "undefined")
        return null;
    const target = _targer || document;
    return document.querySelectorAll.call(target, tag);
}
