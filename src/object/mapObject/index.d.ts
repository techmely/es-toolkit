export declare function mapObject<K extends string, V = any, NK = K, NV = V>(obj: Record<K, V>, fn: (key: K, value: V) => [NK, NV] | undefined): Record<K, V>;
