import { invariant } from "../../common/invariant";

/**
 * Replaces all but the last num of characters with the specified mask character.
 * example:
 *  mask(1234567890); // '******7890'
    mask(1234567890, 3); // '*******890'
    mask(1234567890, -4, '$'); // '$$$$567890'
 */
/**
 * Mask a string with a custom character
 * @param cc - The string to mask
 * @param num - The number of characters to show
 * @param mask - The character to use as a mask
 */
// @__NO_SIDE_EFFECTS__
export function mask(cc: number | string, num = 4, mask = "*") {
  invariant(cc);
  return `${cc}`.slice(-num).padStart(`${cc}`.length, mask);
}
