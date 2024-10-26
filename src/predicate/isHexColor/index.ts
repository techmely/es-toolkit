export const hexColor = /^#(([\da-f]{2}){3,4})$/;

export function isHexColor(hex: string): boolean {
  return hexColor.test(hex);
}
