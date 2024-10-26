// accesses a variable inside of process.env, throwing an error if it's not found
// always run this method in advance (i.e. upon initialization) so that the error is thrown as early as possible
// caching the values improves performance - accessing process.env many times is bad

import { envShims } from "../../object/env";

const cache: any = {};

export const getEnvVar = <T extends string>(variableName: string, defaultValue?: any) => {
  if (!(variableName in envShims())) {
    if (defaultValue || defaultValue === "" || defaultValue === 0) return defaultValue;
    throw Error(`Cannot find ${variableName} in environment variables. Died.`)
  }

  if (cache[variableName]) return cache[variableName];

  cache[variableName] = process.env[variableName];

  return cache[variableName] as T;
};
