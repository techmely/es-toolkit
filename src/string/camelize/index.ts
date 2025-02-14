import { cacheStringFunction } from "../cacheStringFunc";

const camelizeRE = /-(\w)/g;

// @__NO_SIDE_EFFECTS__
export const camelize = cacheStringFunction((str: string): string => {
  return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ""));
});
