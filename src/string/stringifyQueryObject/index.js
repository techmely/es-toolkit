export function stringifyQueryObject(queryParameters) {
    if (!queryParameters)
        return "";
    return Object.entries(queryParameters).reduce((queryString, [key, val]) => {
        const symbol = queryString.length === 0 ? "?" : "&";
        queryString += typeof val === "string" ? `${symbol}${key}=${val}` : "";
        return queryString;
    }, "");
}
