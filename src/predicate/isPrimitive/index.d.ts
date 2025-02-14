export type Primitives = {
    value: string | number | boolean | Date | null;
};
export declare function isPrimitive(value: unknown): value is Primitives;
