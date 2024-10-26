import { expect, test } from "vitest";
import { cutString } from ".";

test("Should cut string value like expect", () => {
  expect(cutString("helloWorld", 3)).toEqual("hel");
  expect(cutString("helloWorld1", 4)).toEqual("hell");
  expect(cutString("HelloWorldXX12", 5)).toEqual("Hello");
  // @ts-expect-error Expect typing error
  expect(cutString(undefined, 9)).toEqual(undefined);
  expect(cutString("", 9)).toEqual("");
});
