import { describe, expect, test } from "vitest";
import { createSingleton, disposeSingleton } from "./index";

describe.concurrent("Test inject something on global app", () => {
  test("Should inject something", () => {
    const hello = createSingleton("hello", () => "Hello world");
    expect(hello).toBe("Hello world");
    expect(globalThis.__singletons.get("hello")).toBe(hello);
  });
});

describe.concurrent("Test dispose singleton", () => {
  test("Should dispose singleton", () => {
    createSingleton("hello", () => "Hello world");
    expect(disposeSingleton("hello")).toBe(true);
    expect(globalThis.__singletons.has("hello")).toBe(false);
  });
});
