export const hexColor = /^#(([\da-f]{2}){3,4})$/;

// @__NO_SIDE_EFFECTS__
export function isHexColor(hex: string): boolean {
  return hexColor.test(hex);
}
