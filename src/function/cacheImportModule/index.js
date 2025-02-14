const lazyImportCache = new Map();
export function createCachedImport(name, imp) {
    return () => {
        const cached = lazyImportCache.get(name);
        if (cached)
            return cached;
        const promise = imp().then((module) => {
            lazyImportCache.set(name, module);
            return module;
        });
        lazyImportCache.set(name, promise);
        return promise;
    };
}
