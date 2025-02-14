const _envShim = Object.create(null);
const _getEnv = (useShim) => globalThis.process?.env ||
    import.meta.env ||
    globalThis.Deno?.env.toObject() ||
    globalThis.__env__ ||
    (useShim ? _envShim : globalThis);
export function envShims() {
    return new Proxy(_envShim, {
        get(_, prop) {
            const env = _getEnv();
            return env[prop] ?? _envShim[prop];
        },
        has(_, prop) {
            const env = _getEnv();
            return prop in env || prop in _envShim;
        },
        set(_, prop, value) {
            const env = _getEnv(true);
            env[prop] = value;
            return true;
        },
        deleteProperty(_, prop) {
            if (!prop) {
                return false;
            }
            const env = _getEnv(true);
            delete env[prop];
            return true;
        },
        ownKeys() {
            const env = _getEnv();
            return Object.keys(env);
        },
    });
}
