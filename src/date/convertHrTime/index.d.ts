export type ResponseTime = {
    seconds: number;
    milliseconds: number;
    nanoseconds: number | bigint;
};
export declare function convertHrTime(hrtime: bigint): ResponseTime;
