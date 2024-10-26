import { expect, test } from "vitest";
import { snake2camel } from ".";

test("Should return snake2camel value", () => {
  expect(snake2camel("hello_world")).toEqual("helloWorld");
  expect(snake2camel("hello_world_1")).toEqual("helloWorld_1");
  expect(snake2camel("_hello_world_xX12")).toEqual("HelloWorldXX12");
});
