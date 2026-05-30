import { MAX_PIX_KEY_LENGTH } from './securityLimits';

export type PixKeyValidationResult =
  | { readonly ok: true }
  | { readonly ok: false; readonly message: string };

const UNSAFE_KEY_PATTERN = /[\x00-\x1f\x7f\s@\\%]/;

export function validatePixKey(pixKey: string): PixKeyValidationResult {
  if (!pixKey || typeof pixKey !== 'string') {
    return { ok: false, message: 'pixKey is required' };
  }

  const trimmed = pixKey.trim();
  if (!trimmed) {
    return { ok: false, message: 'pixKey is required' };
  }

  if (trimmed.length > MAX_PIX_KEY_LENGTH) {
    return {
      ok: false,
      message: `pixKey exceeds ${MAX_PIX_KEY_LENGTH} characters`,
    };
  }

  if (UNSAFE_KEY_PATTERN.test(trimmed)) {
    return { ok: false, message: 'pixKey contains invalid characters' };
  }

  return { ok: true };
}
