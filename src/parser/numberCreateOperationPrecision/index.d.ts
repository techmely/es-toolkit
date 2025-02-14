import type { EntityId } from "@techmely/types";
export declare function createOperationPrecision(operation: (n1: EntityId, n2: EntityId) => number): (...nums: EntityId[]) => number;
