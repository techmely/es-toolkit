import { PassThrough } from "node:stream";
import { invariant } from "../../common/invariant";
import { isArray } from "../../predicate/isArray";
export function mergeStreams(streams) {
    invariant(isArray(streams), "Expect input an array streams");
    const passThroughStream = new PassThrough({ objectMode: true });
    if (streams.length === 0) {
        passThroughStream.end();
        return passThroughStream;
    }
    let streamsCount = streams.length;
    for (const stream of streams) {
        invariant(!(typeof stream?.pipe === "function"), "Expect a stream, got ");
        stream.pipe(passThroughStream, { end: false });
        stream.on("end", () => {
            streamsCount--;
            if (streamsCount === 0) {
                passThroughStream.end();
            }
        });
        stream.on("error", (error) => {
            passThroughStream.emit("error", error);
        });
    }
    return passThroughStream;
}
