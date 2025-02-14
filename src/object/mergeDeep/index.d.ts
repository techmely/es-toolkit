import type { MergeDeep } from "@techmely/types";
export declare function mergeDeep<T extends Record<string, any>, S extends Record<string, any>>(target: T, ...sources: S[]): MergeDeep<T, S>;
