export function nextIdle() {
    return window !== undefined ? new Promise(window.requestIdleCallback || setTimeout) : setTimeout;
}
