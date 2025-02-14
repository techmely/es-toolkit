export function findFirstDefined(...args) {
    return args.find((arg) => arg !== undefined);
}
