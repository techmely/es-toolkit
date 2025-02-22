export type ResponseTime = {
  seconds: number;
  milliseconds: number;
  nanoseconds: number | bigint;
};

// @__NO_SIDE_EFFECTS__
export function convertHrTime(hrtime: bigint): ResponseTime {
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
