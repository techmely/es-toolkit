export function generateSample(arr, count) {
    return Array.from({ length: count }, (_) => arr[Math.round(Math.random() * (arr.length - 1))]);
}
