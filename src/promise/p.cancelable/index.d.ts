export declare class PCancelable<ValueType> extends Promise<ValueType> {
    #private;
    static fn<ReturnType>(userFn: (onCancel: OnCancelFunction) => PromiseLike<ReturnType>): () => PCancelable<ReturnType>;
    static fn<Agument1Type, ReturnType>(userFn: (argument1: Agument1Type, onCancel: OnCancelFunction) => PromiseLike<ReturnType>): (argument1: Agument1Type) => PCancelable<ReturnType>;
    static fn<Agument1Type, Agument2Type, ReturnType>(userFn: (argument1: Agument1Type, argument2: Agument2Type, onCancel: OnCancelFunction) => PromiseLike<ReturnType>): (argument1: Agument1Type, argument2: Agument2Type) => PCancelable<ReturnType>;
    static fn<Agument1Type, Agument2Type, Agument3Type, ReturnType>(userFn: (argument1: Agument1Type, argument2: Agument2Type, argument3: Agument3Type, onCancel: OnCancelFunction) => PromiseLike<ReturnType>): (argument1: Agument1Type, argument2: Agument2Type, argument3: Agument3Type) => PCancelable<ReturnType>;
    static fn<Agument1Type, Agument2Type, Agument3Type, Agument4Type, ReturnType>(userFn: (argument1: Agument1Type, argument2: Agument2Type, argument3: Agument3Type, argument4: Agument4Type, onCancel: OnCancelFunction) => PromiseLike<ReturnType>): (argument1: Agument1Type, argument2: Agument2Type, argument3: Agument3Type, argument4: Agument4Type) => PCancelable<ReturnType>;
    static fn<Agument1Type, Agument2Type, Agument3Type, Agument4Type, Agument5Type, ReturnType>(userFn: (argument1: Agument1Type, argument2: Agument2Type, argument3: Agument3Type, argument4: Agument4Type, argument5: Agument5Type, onCancel: OnCancelFunction) => PromiseLike<ReturnType>): (argument1: Agument1Type, argument2: Agument2Type, argument3: Agument3Type, argument4: Agument4Type, argument5: Agument5Type) => PCancelable<ReturnType>;
    static fn<ReturnType>(userFn: (_arguments: unknown[]) => PromiseLike<ReturnType>): (_arguments: unknown[]) => PCancelable<ReturnType>;
    constructor(executor: Executor<ValueType>);
    then(onFulfilled: any, onRejected: any): Promise<ValueType>;
    catch(onRejected: any): Promise<ValueType>;
    finally(onFinally: any): Promise<ValueType>;
    cancel(reason: any): void;
    get isCanceled(): boolean;
}
export interface OnCancelFunction {
    (cancelHandler: () => void): void;
    shouldReject: boolean;
}
type Executor<T> = (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: unknown) => void, onCancel: OnCancelFunction) => void;
