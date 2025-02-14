export function createSingleton(name, valueFactory) {
    const g = globalThis;
    g.__singletons ??= new Map();
    if (!g.__singletons.has(name)) {
        g.__singletons.set(name, valueFactory());
    }
    return g.__singletons.get(name);
}
export function disposeSingleton(name) {
    const g = globalThis;
    g.__singletons ??= new Map();
    return g.__singletons.delete(name);
}
