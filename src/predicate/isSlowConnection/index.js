import { isServer } from "../isServer";
export function isSlowConnection() {
    if (isServer()) {
        return;
    }
    const cn = navigator.connection;
    if (cn && (cn.saveData || /2g/.test(cn.effectiveType))) {
        return true;
    }
    return false;
}
