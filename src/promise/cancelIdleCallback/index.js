function cancelIdleCallbackShim(id) {
    clearTimeout(id);
}
export const cancelIdleCallback = typeof window !== "undefined"
    ? window.cancelIdleCallback || cancelIdleCallbackShim
    : cancelIdleCallbackShim;
