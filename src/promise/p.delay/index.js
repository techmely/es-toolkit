import { getRandomInt } from "../../generate/getRandomInt";
const createAbortError = () => {
    const error = new Error("Delay aborted");
    error.name = "AbortError";
    return error;
};
const clearMethods = new WeakMap();
export function delay(milliseconds, options) {
    return createDelay(milliseconds, options);
}
export function createDelay(milliseconds, { value, signal } = {}) {
    if (signal?.aborted) {
        return Promise.reject(createAbortError());
    }
    let timeoutId;
    let settle;
    let rejectFunction;
    const signalListener = () => {
        clearTimeout(timeoutId);
        rejectFunction(createAbortError());
    };
    const cleanup = () => {
        if (signal) {
            signal.removeEventListener("abort", signalListener);
        }
    };
    const delayPromise = new Promise((resolve, reject) => {
        settle = () => {
            cleanup();
            if (value)
                resolve(value);
        };
        rejectFunction = reject;
        timeoutId = setTimeout(settle, milliseconds);
    });
    if (signal) {
        signal.addEventListener("abort", signalListener, { once: true });
    }
    clearMethods.set(delayPromise, () => {
        clearTimeout(timeoutId);
        timeoutId = undefined;
        settle();
    });
    return delayPromise;
}
export async function rangeDelay(minimum, maximum, options = {}) {
    return delay(getRandomInt(minimum, maximum), options);
}
export function clearDelay(promise) {
    clearMethods.get(promise)?.();
}
