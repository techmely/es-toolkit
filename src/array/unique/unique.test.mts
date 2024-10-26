import { describe, expect, it } from "vitest";
import { unique } from ".";

describe("Unique array", () => {
  it("Should return array without any duplicate element", () => {
    expect(unique([10, 10, 20, 30, 30, 40])).toEqual([10, 20, 30, 40]);
  });
});
