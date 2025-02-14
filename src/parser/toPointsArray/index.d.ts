export declare function toPointsArray<T extends number[], K extends {
    x: number;
    y: number;
    pressure?: number;
}>(points: (T | K)[]): number[][];
