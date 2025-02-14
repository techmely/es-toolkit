export function pick(state, paths) {
    if (Array.isArray(paths)) {
        return paths.reduce((acc, path) => {
            const _paths = path.split(".");
            return set(acc, _paths, get(state, _paths));
        }, {});
    }
    return get(state, paths.split("."));
}
function get(state, paths) {
    return paths.reduce((acc, path) => acc?.[path], state);
}
const ProtoRE = /^(__proto__)$/;
function set(state, paths, val) {
    const last = paths.at(-1);
    if (last === undefined)
        return state;
    const restPaths = paths.slice(0, -1);
    const result = restPaths.reduce((obj, p) => (ProtoRE.test(p) ? {} : (obj[p] ||= {})), state);
    result[last] = val;
    return state;
}
