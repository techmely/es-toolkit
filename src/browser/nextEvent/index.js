export function nextEvent(element, eventName) {
    return new Promise((resolve) => element.addEventListener(eventName, (event) => resolve(event), { once: true }));
}
