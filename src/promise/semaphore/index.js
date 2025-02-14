const semaphoreMap = new Map();
export const getSemaphore = (key = Symbol(), concurrency = 1) => {
    if (semaphoreMap.has(key)) {
        return semaphoreMap.get(key);
    }
    let size = 0;
    let head;
    let tail;
    const createPromise = (res) => {
        if (head && tail) {
            tail = tail.next = { res };
        }
        else {
            tail = head = { res };
        }
    };
    const semaphore = {
        acquire: () => {
            if (++size <= concurrency) {
                return Promise.resolve();
            }
            return new Promise(createPromise);
        },
        release() {
            head?.res();
            head = head?.next;
            if (size && !--size) {
                semaphoreMap.delete(key);
            }
        },
        size: () => size,
    };
    semaphoreMap.set(key, semaphore);
    return semaphore;
};
