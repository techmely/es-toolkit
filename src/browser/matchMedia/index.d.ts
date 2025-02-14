export declare function windowMatchMedia(): (((query: string) => MediaQueryList) & typeof matchMedia) | undefined;
declare global {
    interface Window {
        msMatchMedia(query: string): MediaQueryList;
    }
}
