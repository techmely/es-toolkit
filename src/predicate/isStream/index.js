export function isStream(value) {
    if (!value || typeof value !== "object") {
        return false;
    }
    if (typeof value.pipe === "function") {
        if (typeof value._read === "function") {
            return true;
        }
        if (typeof value.abort === "function") {
            return true;
        }
    }
    if (typeof value.pipeTo === "function") {
        return true;
    }
    return false;
}
