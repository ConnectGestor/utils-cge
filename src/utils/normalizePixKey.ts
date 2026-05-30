import { PixKeyType } from '../types/pixKeyType';

export function normalizePixKey(pixKey: string, pixKeyType: PixKeyType): string {
  const trimmed = pixKey.trim();

  switch (pixKeyType) {
    case 'CPF':
    case 'CNPJ':
      return trimmed.replace(/\D/g, '');

    case 'PHONE': {
      const digits = trimmed.replace(/\D/g, '');
      if (!digits) {
        return trimmed;
      }
      if (trimmed.startsWith('+')) {
        return `+${digits}`;
      }
      if (digits.startsWith('55') && digits.length >= 12) {
        return `+${digits}`;
      }
      if (digits.length >= 10) {
        return `+55${digits}`;
      }
      return digits;
    }

    case 'EMAIL':
      return trimmed.toLowerCase();

    case 'EVP':
      return trimmed.toLowerCase();

    default:
      return trimmed;
  }
}
