export declare enum SortDirection {
    ASC = "ASC",
    DESC = "DESC"
}
export declare function sortByDate<T>(a: T, b: T, key: keyof T, direction?: SortDirection): 1 | -1 | 0;
