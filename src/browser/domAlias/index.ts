import type { StringEnum } from "@techmely/types";

export function $<K extends keyof HTMLElementTagNameMap>(tag: StringEnum<K>, _targer?: Element) {
  if (typeof window === "undefined") return null;
  const target = _targer || document;
  return document.querySelector.call(target, tag) as HTMLElementTagNameMap[K] | null;
}

export function $$<K extends keyof HTMLElementTagNameMap>(tag: StringEnum<K>, _targer?: Element) {
  if (typeof window === "undefined") return null;
  const target = _targer || document;
  return document.querySelectorAll.call(target, tag) as NodeListOf<HTMLElementTagNameMap[K]> | null;
}
