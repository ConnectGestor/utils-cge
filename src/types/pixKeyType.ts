export const PIX_KEY_TYPES = [
  'EMAIL',
  'PHONE',
  'CPF',
  'CNPJ',
  'EVP',
] as const;

export type PixKeyType = (typeof PIX_KEY_TYPES)[number];

export function parsePixKeyType(value: string): PixKeyType | null {
  const upper = value.trim().toUpperCase();
  return PIX_KEY_TYPES.includes(upper as PixKeyType)
    ? (upper as PixKeyType)
    : null;
}
