type NotFalsy<T> = Exclude<T, false | null | 0 | "" | undefined>;
export declare function removeFalsyValues<T>(arr: readonly T[]): Array<NotFalsy<T>>;
