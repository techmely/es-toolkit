export function isPromise(val) {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}
