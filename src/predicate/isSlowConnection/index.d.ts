export declare function isSlowConnection(): boolean | undefined;
declare global {
    interface Navigator {
        connection: {
            downlink: number;
            saveData: boolean;
            effectiveType: string;
            rtt: number;
            onchange?: (data: any) => void;
        };
    }
}
