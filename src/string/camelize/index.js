import { cacheStringFunction } from "../cacheStringFunc";
const camelizeRE = /-(\w)/g;
export const camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ""));
});
