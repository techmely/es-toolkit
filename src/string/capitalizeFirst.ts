import { cacheStringFunction } from "./string/cacheStringFunc";

export const capitalizeFirst = cacheStringFunction((value: string) => {
  return value.replace(/^./, value[0].toUpperCase());
});
