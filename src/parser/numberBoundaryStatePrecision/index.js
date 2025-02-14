let _boundaryCheckingState = true;
export function checkBoundaryPrecision(num) {
    if (_boundaryCheckingState) {
        if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
            console.warn(`${num} is beyond boundary when transfer to integer, the results may not be accurate`);
        }
    }
}
export function enableBoundaryCheckingPrecision(flag = true) {
    _boundaryCheckingState = flag;
}
