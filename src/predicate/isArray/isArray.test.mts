import { expect, test } from "vitest";
import { isArray } from ".";

test("Should is an array", () => {
  expect(isArray([])).toEqual(true);
  expect(isArray([1, 2, 3])).toEqual(true);
  expect(isArray([1, 2, 3, "test"])).toEqual(true);
  expect(isArray([1, 2, 3, "test", {}])).toEqual(true);
  expect(isArray({})).toEqual(false);
});
