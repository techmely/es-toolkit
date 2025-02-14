export function freezeMainThread(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) { }
}
