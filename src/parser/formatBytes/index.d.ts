interface FormatBytesOptions {
    numberOfDecimals: number;
}
export declare const formatBytes: (bytes: number, options?: Partial<FormatBytesOptions>) => string;
