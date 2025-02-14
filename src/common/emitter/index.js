export function emitter(all) {
    const events = all || new Map();
    const getHandlers = (type) => events.get(type);
    function on(type, handler) {
        const handlers = getHandlers(type);
        if (handlers) {
            handlers.push(handler);
        }
        else {
            events.set(type, [handler]);
        }
    }
    function off(type, handler) {
        const handlers = getHandlers(type);
        if (handlers) {
            if (handler) {
                const indexHandler = handlers.indexOf(handler) >>> 0;
                handlers.splice(indexHandler, 1);
            }
            else {
                events.set(type, []);
            }
        }
    }
    function emit(type, event) {
        let handlers = getHandlers(type);
        if (handlers) {
            for (const handler of handlers) {
                if (event)
                    handler(event);
            }
        }
        handlers = events.get("*");
        if (handlers) {
            for (const handler of handlers) {
                if (event)
                    handler(type, event);
            }
        }
    }
    return {
        events,
        on,
        off,
        emit,
    };
}
