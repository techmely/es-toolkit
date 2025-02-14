export function createOperationPrecision(operation) {
    return (...nums) => {
        const [first, ...others] = nums;
        return others.reduce((prev, next) => operation(prev, next), first);
    };
}
