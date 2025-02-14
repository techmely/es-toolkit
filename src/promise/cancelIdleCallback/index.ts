function cancelIdleCallbackShim(id: any) {
  clearTimeout(id);
}

// @__NO_SIDE_EFFECTS__
export const cancelIdleCallback =
  typeof window !== "undefined"
    ? window.cancelIdleCallback || cancelIdleCallbackShim
    : cancelIdleCallbackShim;
