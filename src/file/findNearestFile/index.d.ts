export declare function findNearestFile<T>(fileName: string, directoryPath?: string): Promise<{
    path: string;
    data: T;
}>;
