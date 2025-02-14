import { cacheStringFunction } from "../cacheStringFunc";
export const pascalToKebabCase = cacheStringFunction((p) => {
    return p.replace(/[A-Z]/g, (x) => `-${x.toLowerCase()}`).slice(1);
});
