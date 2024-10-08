import { cacheStringFunction } from "../cacheStringFunc";

const hyphenateRE = /\B([A-Z])/g;
export const hyphenate = cacheStringFunction((str: string) =>
  str.replace(hyphenateRE, "-$1").toLowerCase(),
);
