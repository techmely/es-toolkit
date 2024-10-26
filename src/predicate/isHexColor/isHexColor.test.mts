import { describe, expect, it } from "vitest";
import { isHexColor } from ".";

describe("Check hex color", () => {
  const validHexColors = ["#2f2f2f", "#010000"];
  const invalidHexColors = ["#checkhex", "#0101"];
  it("Should return boolean value when check element is Hex color", () => {
    for (const hex of validHexColors) {
      expect(isHexColor(hex)).toBe(true);
    }
    for (const hex of invalidHexColors) {
      expect(isHexColor(hex)).toBe(false);
    }
  });
});
