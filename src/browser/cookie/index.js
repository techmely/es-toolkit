import { isDate } from "../../predicate/isDate";
const fieldContentRegExp = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
export function parseCookie(str, options) {
    if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
    }
    const obj = {};
    const opt = options || {};
    const dec = opt.decode || decode;
    let index = 0;
    while (index < str.length) {
        const eqIdx = str.indexOf("=", index);
        if (eqIdx === -1) {
            break;
        }
        let endIdx = str.indexOf(";", index);
        if (endIdx === -1) {
            endIdx = str.length;
        }
        else if (endIdx < eqIdx) {
            index = str.lastIndexOf(";", eqIdx - 1) + 1;
            continue;
        }
        const key = str.slice(index, eqIdx).trim();
        if (obj[key] === undefined) {
            let val = str.slice(eqIdx + 1, endIdx).trim();
            if (val.charCodeAt(0) === 0x22) {
                val = val.slice(1, -1);
            }
            obj[key] = tryDecode(val, dec);
        }
        index = endIdx + 1;
    }
    return obj;
}
export function serializeCookie(name, value, options) {
    const opt = options || {};
    const enc = opt.encode || encode;
    if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
    }
    if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
    }
    const encValue = enc(value);
    if (encValue && !fieldContentRegExp.test(encValue)) {
        throw new TypeError("argument val is invalid");
    }
    let str = `${name}=${encValue}`;
    if (opt.maxAge !== undefined && opt.maxAge !== null) {
        const maxAge = opt.maxAge - 0;
        if (Number.isNaN(maxAge) || !Number.isFinite(maxAge)) {
            throw new TypeError("option maxAge is invalid");
        }
        str += `; Max-Age=${Math.floor(maxAge)}`;
    }
    if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
            throw new TypeError("option domain is invalid");
        }
        str += `; Domain=${opt.domain}`;
    }
    if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
            throw new TypeError("option path is invalid");
        }
        str += `; Path=${opt.path}`;
    }
    if (opt.expires) {
        const expires = opt.expires;
        if (!isDate(expires) || Number.isNaN(expires.valueOf())) {
            throw new TypeError("option expires is invalid");
        }
        str += `; Expires=${expires.toUTCString()}`;
    }
    if (opt.httpOnly) {
        str += "; HttpOnly";
    }
    if (opt.secure) {
        str += "; Secure";
    }
    if (opt.priority) {
        const priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
            case "low":
                str += "; Priority=Low";
                break;
            case "medium":
                str += "; Priority=Medium";
                break;
            case "high":
                str += "; Priority=High";
                break;
            default:
                throw new TypeError("option priority is invalid");
        }
    }
    if (opt.sameSite) {
        const sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
            case true:
                str += "; SameSite=Strict";
                break;
            case "lax":
                str += "; SameSite=Lax";
                break;
            case "strict":
                str += "; SameSite=Strict";
                break;
            case "none":
                str += "; SameSite=None";
                break;
            default:
                throw new TypeError("option sameSite is invalid");
        }
    }
    return str;
}
function decode(str) {
    return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
}
function encode(val) {
    return encodeURIComponent(val);
}
function tryDecode(str, decode) {
    try {
        return decode(str);
    }
    catch (e) {
        return str;
    }
}
export const listenCookieChange = (callback, interval = 500) => {
    let lastCookie = document.cookie;
    setInterval(() => {
        const { cookie } = document;
        if (cookie !== lastCookie) {
            try {
                callback({
                    oldCookie: parseCookie(lastCookie),
                    newCookie: parseCookie(cookie),
                });
            }
            finally {
                lastCookie = cookie;
            }
        }
    }, interval);
};
export class CookieService {
    env;
    domain;
    tokenName;
    constructor(env, options) {
        this.env = env;
        this.domain = options.domain;
        this.tokenName = `${options.tokenName || "token"}_${env}`;
    }
    get(name, options) {
        if (typeof window === "undefined")
            return undefined;
        try {
            const cookies = parseCookie(document.cookie, options);
            return cookies[name];
        }
        catch (error) {
            console.error({ error });
            return undefined;
        }
    }
    set(key, value, options) {
        const defaultOptions = {
            secure: true,
            path: "/",
            domain: this.domain,
            priority: "Medium",
            httpOnly: false,
            ...options,
        };
        try {
            document.cookie = serializeCookie(key, value, defaultOptions);
        }
        catch (error) {
            console.error({ error });
        }
    }
    setToken(token, options) {
        this.set(this.tokenName, token, options);
    }
    getToken() {
        const token = this.get(this.tokenName);
        return token;
    }
    clearToken() {
        this.set(this.tokenName, "");
    }
}
