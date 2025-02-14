export function parseQueryString(url) {
    const params = [...new URLSearchParams(url.split("?")[1])];
    return params.reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
    }, {});
}
