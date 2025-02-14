export function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const factor = Math.floor(Math.random() * (i + 1));
        [array[i], array[factor]] = [array[factor], array[i]];
    }
    return array;
}
