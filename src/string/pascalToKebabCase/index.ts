import { cacheStringFunction } from "../cacheStringFunc";

/**
 * @example pascalToKebabCase('HelloWorld') --> hello-world
 *
 * @param p a string in PascalCase
 * @returns string p converted to snake-case
 */
// @__NO_SIDE_EFFECTS__
export const pascalToKebabCase = cacheStringFunction((p: string) => {
  return p.replace(/[A-Z]/g, (x) => `-${x.toLowerCase()}`).slice(1);
});
