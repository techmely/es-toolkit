export declare function createCachedImport<T>(name: string, imp: () => Promise<T>): () => T | Promise<T>;
