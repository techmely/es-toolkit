export class MutexLock {
    #mutex = Promise.resolve();
    lock() {
        let begin = () => { };
        this.#mutex = this.#mutex.then(() => new Promise(begin));
        return new Promise((res) => {
            begin = res;
        });
    }
    async dispatch(fn) {
        const unlock = await this.lock();
        try {
            return await Promise.resolve(fn());
        }
        catch (error) {
            throw new Error("Dispatch failed!");
        }
        finally {
            unlock();
        }
    }
}
