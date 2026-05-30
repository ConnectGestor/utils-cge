import { PixStaticFn } from './pixFunctions';
export interface PixEmvMandatoryElements {
    readonly merchantCategoryCode: string;
    readonly transactionCurrency: string;
    readonly countryCode: string;
    readonly merchantName: string;
    readonly merchantCity: string;
}
export interface PixEmvBasicElements extends PixEmvMandatoryElements {
    readonly oneTime?: boolean;
}
export declare enum PixElementType {
    STATIC = "STATIC"
}
export interface StaticPixEmvElements extends PixEmvBasicElements {
    readonly type: PixElementType.STATIC;
    readonly transactionAmount: number;
    readonly pixKey: string;
    readonly txid?: string;
    readonly infoAdicional?: string;
    readonly fss?: string;
    readonly isTransactionUnique?: boolean;
}
export type PixStaticObject = StaticPixEmvElements & PixStaticFn;
