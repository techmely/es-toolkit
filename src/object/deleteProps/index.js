export function deleteProps(obj, propOrProps) {
    const props = typeof propOrProps === "string" ? [propOrProps] : propOrProps;
    return Object.keys(obj).reduce((newObj, prop) => {
        if (!props.includes(prop)) {
            newObj[prop] = obj[prop];
        }
        return newObj;
    }, {});
}
