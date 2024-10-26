import { expect, test } from "vitest";
import { camelize } from ".";

test("Should return camel value", () => {
  expect(camelize("hello-world")).toEqual("helloWorld");
  expect(camelize("hello-world-1")).toEqual("helloWorld1");
  expect(camelize("_hello-world-1-2")).toEqual("_helloWorld12");
});
