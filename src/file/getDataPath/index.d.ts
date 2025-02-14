export declare function getDataPath<T = any>(directoryPath: string, fileName: string): Promise<{
    path: string;
    data: T;
}>;
