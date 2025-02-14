export function chunk(array, size = 1) {
    if (!array || array.length === 0) {
        return [];
    }
    const chunkLength = Math.ceil(array.length / size);
    const result = Array(chunkLength);
    for (let index = 0; index < chunkLength; index++) {
        const start = index * size;
        const end = start + size;
        result[index] = array.slice(start, end);
    }
    return result;
}
