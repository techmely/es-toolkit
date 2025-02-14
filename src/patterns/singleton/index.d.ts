export declare function createSingleton<Value>(name: string, valueFactory: () => Value): Value;
export declare function disposeSingleton(name: string): boolean;
declare global {
    var __singletons: Map<string, unknown>;
}
