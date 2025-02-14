import { isServer } from "../isServer";

// @__NO_SIDE_EFFECTS__
export function isSlowConnection() {
  if (isServer()) {
    return;
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/Navigator/connection
  const cn = navigator.connection;
  if (cn && (cn.saveData || /2g/.test(cn.effectiveType))) {
    return true;
  }
  return false;
}

declare global {
  interface Navigator {
    connection: {
      downlink: number;
      saveData: boolean;
      effectiveType: string;
      rtt: number;
      onchange?: (data) => void;
    };
  }
}
