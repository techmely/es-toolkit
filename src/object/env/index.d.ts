export type EnvObject = Record<string, string | undefined>;
export declare function envShims<T extends EnvObject>(): T;
