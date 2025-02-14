export type MaybeReturnType<T> = T extends (...args: any) => any ? ReturnType<T> : T;
export declare function callOrReturn<T>(value: T, context?: any, ...props: any[]): MaybeReturnType<T>;
