export interface CookieSerializeOptions {
    domain?: string;
    encode?(value: string): string;
    expires?: Date;
    httpOnly?: boolean;
    maxAge?: number;
    path?: string;
    priority?: "Low" | "Medium" | "High";
    sameSite?: true | false | "lax" | "strict" | "none";
    secure?: boolean;
}
export interface CookieParseOptions {
    decode?(value: string): string;
}
export declare function parseCookie(str: string, options?: CookieParseOptions): Record<string, string>;
export declare function serializeCookie(name: string, value: string, options?: CookieSerializeOptions): string;
export declare const listenCookieChange: (callback: ({ oldCookie, newCookie }: any) => void, interval?: number) => void;
export type CookieServiceOptions = {
    domain: string;
    tokenName?: string;
};
export declare class CookieService {
    env: string;
    domain: string;
    tokenName: string;
    constructor(env: string, options: CookieServiceOptions);
    get(name: string, options?: CookieParseOptions): string | undefined;
    set(key: string, value: string, options?: CookieSerializeOptions): void;
    setToken(token: string, options?: CookieSerializeOptions): void;
    getToken(): string | undefined;
    clearToken(): void;
}
