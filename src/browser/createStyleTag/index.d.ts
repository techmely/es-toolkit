interface CreateStyleTagOptions extends Record<string, any> {
    id: string;
}
export declare function createStyleTag(style: string, options: CreateStyleTagOptions): HTMLStyleElement;
