import { cacheStringFunction } from "../cacheStringFunc";
export const snake2camel = cacheStringFunction((str) => {
    return str.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
});
