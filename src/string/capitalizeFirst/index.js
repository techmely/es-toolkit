import { cacheStringFunction } from "../cacheStringFunc";
export const capitalizeFirst = cacheStringFunction((value) => {
    return value.replace(/^./, value[0].toUpperCase());
});
