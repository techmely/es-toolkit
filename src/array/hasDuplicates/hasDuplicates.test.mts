// index.test.ts
import { describe, expect, it } from "vitest";
import { hasDuplicates } from "./index";

describe("hasDuplicates", () => {
  it("should return true for an array with duplicates", () => {
    expect(hasDuplicates([1, 2, 2, 3, 4, 4, 5])).toBe(true);
  });

  it("should return false for an array without duplicates", () => {
    expect(hasDuplicates([1, 2, 3, 4, 5])).toBe(false);
  });

  it("should return false for an empty array", () => {
    expect(hasDuplicates([])).toBe(false);
  });

  it("should return true for an array with different data types and duplicates", () => {
    expect(hasDuplicates([1, "1", 2, "2", 2])).toBe(true);
  });

  it("should return false for an array with different data types and no duplicates", () => {
    expect(hasDuplicates([1, "1", 2, "2"])).toBe(false);
  });
});
