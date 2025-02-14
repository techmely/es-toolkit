import { envShims } from "../env";
const _process = (globalThis.process || Object.create(null));
const processShims = {
    versions: {},
};
export const globProcess = new Proxy(_process, {
    get(target, prop) {
        if (prop === "env") {
            return envShims();
        }
        if (prop in target) {
            return target[prop];
        }
        if (prop in processShims) {
            return processShims[prop];
        }
    },
});
