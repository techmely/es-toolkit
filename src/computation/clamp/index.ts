/**
 *
 * @param {number} n - The input n
 * @param {number} min - The input min
 * @param {number} max - The input max
 * @returns {number} - the clamp number
 */
// @__NO_SIDE_EFFECTS__
export function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}
