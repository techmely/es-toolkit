export declare function delay<T = any>(milliseconds: number, options?: DelayOptions<T>): Promise<T>;
export declare function createDelay<T = any>(milliseconds: number, { value, signal }?: DelayOptions<T>): Promise<T>;
export declare function rangeDelay<T>(minimum: number, maximum: number, options?: DelayOptions<T>): Promise<T>;
export declare function clearDelay(promise: Promise<unknown>): void;
export type DelayOptions<T> = {
    value?: T;
    signal?: AbortSignal;
};
