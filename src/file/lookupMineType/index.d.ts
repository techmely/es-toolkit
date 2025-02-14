declare const MIME_TYPES: Record<string, string>;
declare function lookupMineType(extention: string): string | undefined;
export { MIME_TYPES, lookupMineType };
