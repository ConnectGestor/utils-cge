import { PixKeyType } from '../types/pixKeyType';
export type PixKeyValidationResult = {
    readonly ok: true;
} | {
    readonly ok: false;
    readonly message: string;
};
export type PreparePixKeyResult = {
    readonly ok: true;
    readonly pixKey: string;
} | {
    readonly ok: false;
    readonly message: string;
};
export declare function validatePixKey(pixKey: string): PixKeyValidationResult;
export declare function validatePixKey(pixKey: string, pixKeyType: PixKeyType | string): PixKeyValidationResult;
export declare function preparePixKey(pixKey: string, pixKeyType: PixKeyType | string): PreparePixKeyResult;
