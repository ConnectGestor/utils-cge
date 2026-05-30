export type PixKeyValidationResult = {
    readonly ok: true;
} | {
    readonly ok: false;
    readonly message: string;
};
export declare function validatePixKey(pixKey: string): PixKeyValidationResult;
