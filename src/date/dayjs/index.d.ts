import dayjs from "dayjs";
import type { ConfigType, OpUnitType, QUnitType } from "dayjs";
type CompareDateConfig = {
    unit?: QUnitType | OpUnitType;
    float?: boolean;
};
export declare function formatDate(date: ConfigType, format?: string): string;
export declare function formatDateToNow(date: ConfigType): string;
export declare function parseUnix(time: number): dayjs.Dayjs;
export declare function getUnixTime(date: Date): number;
export declare function formatDateUnixTime(seconds: number, format?: string): string;
export declare function diffDate(toDate: Date, fromDate: Date, config?: CompareDateConfig): number;
export declare function addNewDate(date: Date, addDays?: number): Date;
export { dayjs };
