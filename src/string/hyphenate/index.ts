import { cacheStringFunction } from "../cacheStringFunc";

const hyphenateRE = /\B([A-Z])/g;

// @__NO_SIDE_EFFECTS__
export const hyphenate = cacheStringFunction((str: string) =>
  str.replace(hyphenateRE, "-$1").toLowerCase(),
);
