import { convertHrTime } from "../convertHrTime";
export function timeSpan() {
    const start = process.hrtime.bigint();
    const end = (type) => convertHrTime(process.hrtime.bigint() - start)[type];
    const result = () => end("milliseconds");
    result.toRounded = () => Math.round(end("milliseconds"));
    result.toSeconds = () => end("seconds");
    result.toNanoseconds = () => end("nanoseconds");
    return result;
}
