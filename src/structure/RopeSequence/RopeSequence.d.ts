export type RopeSequenceCallback<T> = (elt: T, index: number) => boolean | VoidFunction;
export declare class RopeSequence<T> {
    static empty: RopeSequence<any>;
    values: any;
    static from<T>(values: readonly T[] | RopeSequence<T>): RopeSequence<T>;
    leafAppend(other: Leaf<T>): RopeSequence<T> | Leaf<T> | undefined;
    leafPrepend(other: any): RopeSequence<T> | Leaf<T> | undefined;
    sliceInner(from: number, to: number): Leaf<any>;
    getInner(index: number): T | undefined;
    forEachInner(f: RopeSequenceCallback<T>, from: any, to: any, start: any): void;
    forEachInvertedInner(f: RopeSequenceCallback<T>, from: any, to: any, start: any): void;
    append(other: RopeSequence<T> | Leaf<T> | readonly T[]): RopeSequence<T> | Leaf<T>;
    prepend(other: RopeSequence<T> | readonly T[]): RopeSequence<T> | Leaf<T>;
    appendInner(other: Leaf<T>): Append<T> | Leaf<T>;
    slice(from?: number, to?: number): RopeSequence<T> | Leaf<T>;
    get(i: number): T | undefined;
    forEach(f: (elt: T, index: number) => boolean | VoidFunction, from?: number, to?: number): void;
    map<U>(f: RopeSequenceCallback<U>, from?: number, to?: number): U[];
    set length(v: number);
    get length(): number;
}
export declare const GOOD_LEAF_SIZE = 200;
declare class Leaf<T = any> extends RopeSequence<T> {
    values: any;
    constructor(values: any);
    flatten(): any;
    sliceInner(from: number, to: number): Leaf<any>;
    getInner(i: number): any;
    forEachInner(f: RopeSequenceCallback<T>, from: number, to: number, start: number): false | undefined;
    forEachInvertedInner(f: RopeSequenceCallback<T>, from: number, to: number, start: number): false | undefined;
    leafAppend(other: Leaf<T>): Leaf<any> | undefined;
    leafPrepend(other: Leaf<T>): Leaf<any> | undefined;
    set length(v: number);
    get length(): number;
    get depth(): number;
}
declare class Append<T = any> extends RopeSequence<T> {
    left: Leaf<T>;
    right: Leaf<T>;
    depth: number;
    constructor(left: Leaf<T>, right: Leaf<T>);
    flatten(): any;
    getInner(i: number): T | undefined;
    forEachInner(f: RopeSequenceCallback<T>, from: number, to: number, start: number): false | undefined;
    forEachInvertedInner(f: RopeSequenceCallback<T>, from: number, to: number, start: number): false | undefined;
    sliceInner(from: number, to: number): any;
    leafAppend(other: Leaf<T>): Append<any> | undefined;
    leafPrepend(other: Leaf<T>): Append<any> | undefined;
    appendInner(other: Leaf<T>): any;
}
