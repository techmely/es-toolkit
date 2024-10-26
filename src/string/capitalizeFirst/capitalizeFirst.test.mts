import { expect, test } from "vitest";
import { capitalizeFirst } from ".";

test("Should return capitalize value", () => {
  expect(capitalizeFirst("hello world")).toEqual("Hello world");
  expect(capitalizeFirst("_hello world 1")).toEqual("_hello world 1");
});
