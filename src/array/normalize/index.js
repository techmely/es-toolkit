export function normalize(array, key) {
    if (!array || array.length === 0)
        return {};
    return array.reduce((acc, cur) => {
        const keyValue = cur[key];
        if (keyValue) {
            return Object.assign(acc, { [keyValue]: cur });
        }
        return acc;
    }, {});
}
