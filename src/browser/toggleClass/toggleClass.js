export function toggleClass(dom, cls, on = true) {
    if (on)
        dom.classList.add(cls);
    else
        dom.classList.remove(cls);
}
