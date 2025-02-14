export function debounce(func, delay, immediate = false) {
    let timeoutId;
    return function (...args) {
        const callNow = immediate && !timeoutId;
        if (timeoutId)
            clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            timeoutId = null;
            if (!immediate) {
                func.apply(this, args);
            }
        }, delay);
        if (callNow) {
            func.apply(this, args);
        }
    };
}
