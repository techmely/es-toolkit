export function convertHrTime(hrtime) {
    const nanoseconds = hrtime;
    const number = Number(nanoseconds);
    const milliseconds = number / 1e6;
    const seconds = number / 1e9;
    return {
        seconds,
        milliseconds,
        nanoseconds,
    };
}
