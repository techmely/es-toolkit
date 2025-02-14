interface Semaphore {
    acquire(): Promise<void>;
    release(): void;
    size(): number;
}
export declare const getSemaphore: (key?: any, concurrency?: number) => Semaphore;
