const prefix = "Invariant failed";
export function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (typeof message === "string" || typeof message === "function") {
        const provided = typeof message === "function" ? message() : message;
        const value = provided ? `${prefix}: ${provided}` : prefix;
        throw new Error(value);
    }
    if (message)
        throw message;
    throw new Error(prefix);
}
