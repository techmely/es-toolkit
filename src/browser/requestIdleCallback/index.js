function requestIdleCallbackShim(cb) {
    const start = Date.now();
    return setTimeout(() => {
        cb({
            didTimeout: false,
            timeRemaining: () => Math.max(0, 50 - (Date.now() - start)),
        });
    }, 1);
}
export const requestIdleCallback = typeof window !== "undefined"
    ? window.requestIdleCallback || requestIdleCallbackShim
    : requestIdleCallbackShim;
