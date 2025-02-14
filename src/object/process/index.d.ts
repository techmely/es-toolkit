import type { EnvObject } from "../env";
export interface Process extends Partial<Omit<typeof globalThis.process, "versions">> {
    env: EnvObject;
    versions: Record<string, string>;
}
export declare const globProcess: Process;
