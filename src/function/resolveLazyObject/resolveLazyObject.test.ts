import { describe, expect, it } from "vitest";
import { resolveLazyObject } from "./index";

describe("resolveLazyObject", () => {
  it("should return the object directly if not a function", () => {
    const obj = { foo: "bar" };
    expect(resolveLazyObject(obj)).toBe(obj);
  });

  it("should execute and return result if given a function", () => {
    const lazyObj = () => ({ foo: "bar" });
    expect(resolveLazyObject(lazyObj)).toEqual({ foo: "bar" });
  });

  it("should handle primitive values", () => {
    expect(resolveLazyObject(42)).toBe(42);
    expect(resolveLazyObject("test")).toBe("test");
    expect(resolveLazyObject(true)).toBe(true);
  });

  it("should handle lazy primitive values", () => {
    expect(resolveLazyObject(() => 42)).toBe(42);
    expect(resolveLazyObject(() => "test")).toBe("test");
    expect(resolveLazyObject(() => true)).toBe(true);
  });
});
