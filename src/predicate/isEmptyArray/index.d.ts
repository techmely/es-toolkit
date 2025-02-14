type EmptyArray<T> = readonly [T, ...ReadonlyArray<T>];
export declare function isEmptyArr<T>(array: ReadonlyArray<T> | undefined): array is EmptyArray<T>;
