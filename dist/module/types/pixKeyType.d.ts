export declare const PIX_KEY_TYPES: readonly ["EMAIL", "PHONE", "CPF", "CNPJ", "EVP"];
export type PixKeyType = (typeof PIX_KEY_TYPES)[number];
export declare function parsePixKeyType(value: string): PixKeyType | null;
