import type { SortDirection } from "../sortByKey";
type SortOptions = {
    locale?: string;
    shouldIgnoreZero?: boolean;
};
export declare function sortData(a: unknown, b: unknown, direction?: SortDirection | null, options?: SortOptions): number;
