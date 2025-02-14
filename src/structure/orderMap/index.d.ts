type OrderMapContent<T = any> = string | T;
export type MapLike<T = any> = Record<string, T> | OrderedMap<T>;
export declare class OrderedMap<T = any> {
    #private;
    content: OrderMapContent<T>[];
    private constructor();
    static from<T>(value: MapLike<T>): OrderedMap<T>;
    get size(): number;
    get(key: OrderMapContent): OrderMapContent<T> | undefined;
    update(key: string, value: T, newKey?: string): OrderedMap<T>;
    remove(key: OrderMapContent): OrderedMap<T>;
    addToStart(key: OrderMapContent, value: T): OrderedMap<T>;
    addToEnd(key: OrderMapContent, value: T): OrderedMap<T>;
    addBefore(place: string, key: OrderMapContent, value: T): OrderedMap<T>;
    forEach(fn: (key: OrderMapContent, value: OrderMapContent) => any): void;
    prepend(map: MapLike<T>): OrderedMap<T>;
    append(map: MapLike<T>): OrderedMap<T>;
    subtract(map: MapLike<T>): OrderedMap<T>;
    toObject(): Record<string, T>;
}
