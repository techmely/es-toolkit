import { describe, expect, it } from "vitest";
import { take } from ".";

describe("Take array", () => {
  it("Should return new array without slice", () => {
    expect(take([10, 10, 20, 30, 30, 40], 2)).toEqual([10, 10]);
    expect(take([10, 10, 20, 30, 30, 40], 4)).toEqual([10, 10, 20, 30]);
  });
});
