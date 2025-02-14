import { envShims } from "../../object/env";
const cache = {};
export const getEnvVar = (variableName, defaultValue) => {
    if (!(variableName in envShims())) {
        if (defaultValue || defaultValue === "" || defaultValue === 0)
            return defaultValue;
        throw Error(`Cannot find ${variableName} in environment variables. Died.`);
    }
    if (cache[variableName])
        return cache[variableName];
    cache[variableName] = process.env[variableName];
    return cache[variableName];
};
