import { cacheStringFunction } from "../cacheStringFunc";
export const camel2snake = cacheStringFunction((str) => {
    return str.replace(/[A-Z0-9]/g, (char) => `_${char.toLocaleLowerCase()}`);
});
