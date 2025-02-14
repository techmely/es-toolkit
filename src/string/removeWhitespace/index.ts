/**
 * #description: remove all whitespace from a string, including spaces between words
 */
// @__NO_SIDE_EFFECTS__
export function removeWhitespace(value: string) {
  return value.replace(/\s/g, "");
}
