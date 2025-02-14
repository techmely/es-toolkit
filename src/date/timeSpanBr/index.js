export function timeSpanBr() {
    const start = performance.now();
    const end = () => performance.now() - start;
    end.rounded = () => Math.round(end());
    end.seconds = () => end() / 1e3;
    end.nanoseconds = () => end() * 1e6;
    return end;
}
