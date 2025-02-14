import { cacheStringFunction } from "../cacheStringFunc";

// @__NO_SIDE_EFFECTS__
export const camel2snake = cacheStringFunction((str: string) => {
  return str.replace(/[A-Z0-9]/g, (char) => `_${char.toLocaleLowerCase()}`);
});
