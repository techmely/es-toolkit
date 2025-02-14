// Using `typeof window !== 'undefined'` alone is not enough because some users use https://www.npmjs.com/package/ssr-window
// @__NO_SIDE_EFFECTS__
export function isBrowser() {
  return typeof window !== "undefined";
}
