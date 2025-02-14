import type { StringEnum } from "@techmely/types";
export declare function $<K extends keyof HTMLElementTagNameMap>(tag: StringEnum<K>, _targer?: Element): HTMLElementTagNameMap[K] | null;
export declare function $$<K extends keyof HTMLElementTagNameMap>(tag: StringEnum<K>, _targer?: Element): NodeListOf<HTMLElementTagNameMap[K]> | null;
