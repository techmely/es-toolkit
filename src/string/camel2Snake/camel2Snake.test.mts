import { expect, test } from "vitest";
import { camel2snake } from ".";

test("Should return camel to snake case value", () => {
  expect(camel2snake("helloWorld")).toEqual("hello_world");
  expect(camel2snake("helloWorld1")).toEqual("hello_world_1");
  expect(camel2snake("HelloWorldXX12")).toEqual("_hello_world_x_x_1_2");
});
