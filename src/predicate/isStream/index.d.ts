import type { Readable } from "node:stream";
export declare function isStream(value: any): value is Readable | ReadableStream;
