import type { Entity } from "@techmely/types";
export declare function listify<O extends Record<string, any>, T = any>(obj: O, mapFn: (key: string, value: Entity) => any): T[];
