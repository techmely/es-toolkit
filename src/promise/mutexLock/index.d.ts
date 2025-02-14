export declare class MutexLock {
    #private;
    lock(): PromiseLike<() => void>;
    dispatch<T>(fn: () => PromiseLike<T>): Promise<T>;
}
