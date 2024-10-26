import { expect, test } from "vitest";
import { hyphenate } from ".";

test("Should return hyphenate value", () => {
  expect(hyphenate("helloWorld")).toEqual("hello-world");
  expect(hyphenate("helloWorld1")).toEqual("hello-world1");
  expect(hyphenate("_helloWorld12")).toEqual("_hello-world12");
});
