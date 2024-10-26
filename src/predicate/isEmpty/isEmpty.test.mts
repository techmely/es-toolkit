import { expect, test } from "vitest";
import { isEmpty } from ".";

test("Should return false when check is Empty", () => {
  expect(isEmpty("test")).toEqual(false);
  expect(isEmpty("   ")).toEqual(true);
});
