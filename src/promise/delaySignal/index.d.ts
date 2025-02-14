type DelayOptions = {
    signal?: AbortController["signal"] | null;
};
export declare function delaySignal(ms: number, { signal }: DelayOptions): Promise<void>;
