export function isIOS() {
    return typeof navigator !== "undefined"
        ? ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) ||
            (navigator.userAgent.includes("Mac") && "ontouchend" in document)
        : false;
}
