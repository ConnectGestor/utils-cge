import { PixKeyType, parsePixKeyType } from '../types/pixKeyType';
import { MAX_PIX_KEY_LENGTH } from './securityLimits';
import { normalizePixKey } from './normalizePixKey';

export type PixKeyValidationResult =
  | { readonly ok: true }
  | { readonly ok: false; readonly message: string };

export type PreparePixKeyResult =
  | { readonly ok: true; readonly pixKey: string }
  | { readonly ok: false; readonly message: string };

// @ is allowed (e-mail Pix keys); block control chars, whitespace, \ and %
const UNSAFE_KEY_PATTERN = /[\x00-\x1f\x7f\s\\%]/;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EVP_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const PHONE_PATTERN = /^\+55[1-9]\d{9,10}$/;

const isRepeatedDigits = (digits: string): boolean => /^(\d)\1+$/.test(digits);

const isValidCpf = (cpf: string): boolean => {
  if (cpf.length !== 11 || isRepeatedDigits(cpf)) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < 9; i += 1) {
    sum += parseInt(cpf[i], 10) * (10 - i);
  }
  let rest = (sum * 10) % 11;
  if (rest === 10) {
    rest = 0;
  }
  if (rest !== parseInt(cpf[9], 10)) {
    return false;
  }

  sum = 0;
  for (let i = 0; i < 10; i += 1) {
    sum += parseInt(cpf[i], 10) * (11 - i);
  }
  rest = (sum * 10) % 11;
  if (rest === 10) {
    rest = 0;
  }
  return rest === parseInt(cpf[10], 10);
};

const isValidCnpj = (cnpj: string): boolean => {
  if (cnpj.length !== 14 || isRepeatedDigits(cnpj)) {
    return false;
  }

  const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  let sum = 0;
  for (let i = 0; i < 12; i += 1) {
    sum += parseInt(cnpj[i], 10) * weights1[i];
  }
  let rest = sum % 11;
  const digit1 = rest < 2 ? 0 : 11 - rest;
  if (digit1 !== parseInt(cnpj[12], 10)) {
    return false;
  }

  sum = 0;
  for (let i = 0; i < 13; i += 1) {
    sum += parseInt(cnpj[i], 10) * weights2[i];
  }
  rest = sum % 11;
  const digit2 = rest < 2 ? 0 : 11 - rest;
  return digit2 === parseInt(cnpj[13], 10);
};

function validatePixKeyBasic(pixKey: string): PixKeyValidationResult {
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

function validatePixKeyByType(
  pixKey: string,
  pixKeyType: PixKeyType
): PixKeyValidationResult {
  const basic = validatePixKeyBasic(pixKey);
  if (basic.ok === false) {
    return basic;
  }

  switch (pixKeyType) {
    case 'CPF':
      if (!/^\d{11}$/.test(pixKey)) {
        return { ok: false, message: 'CPF must have 11 digits' };
      }
      if (!isValidCpf(pixKey)) {
        return { ok: false, message: 'CPF is invalid' };
      }
      break;

    case 'CNPJ':
      if (!/^\d{14}$/.test(pixKey)) {
        return { ok: false, message: 'CNPJ must have 14 digits' };
      }
      if (!isValidCnpj(pixKey)) {
        return { ok: false, message: 'CNPJ is invalid' };
      }
      break;

    case 'PHONE':
      if (!PHONE_PATTERN.test(pixKey)) {
        return {
          ok: false,
          message: 'phone must be a valid Brazilian number (+55DDDnumber)',
        };
      }
      break;

    case 'EMAIL':
      if (!EMAIL_PATTERN.test(pixKey)) {
        return { ok: false, message: 'e-mail format is invalid' };
      }
      break;

    case 'EVP':
      if (!EVP_PATTERN.test(pixKey)) {
        return {
          ok: false,
          message: 'EVP must be a UUID (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)',
        };
      }
      break;

    default:
      return { ok: false, message: 'pixKeyType is invalid' };
  }

  return { ok: true };
}

export function validatePixKey(pixKey: string): PixKeyValidationResult;
export function validatePixKey(
  pixKey: string,
  pixKeyType: PixKeyType | string
): PixKeyValidationResult;
export function validatePixKey(
  pixKey: string,
  pixKeyType?: PixKeyType | string
): PixKeyValidationResult {
  if (pixKeyType === undefined) {
    return validatePixKeyBasic(pixKey);
  }

  const parsedType = parsePixKeyType(String(pixKeyType));
  if (!parsedType) {
    return { ok: false, message: 'pixKeyType is invalid' };
  }

  const normalized = normalizePixKey(pixKey, parsedType);
  return validatePixKeyByType(normalized, parsedType);
}

export function preparePixKey(
  pixKey: string,
  pixKeyType: PixKeyType | string
): PreparePixKeyResult {
  const parsedType = parsePixKeyType(String(pixKeyType));
  if (!parsedType) {
    return { ok: false, message: 'pixKeyType is invalid' };
  }

  const normalized = normalizePixKey(pixKey, parsedType);
  const validation = validatePixKeyByType(normalized, parsedType);
  if (validation.ok === false) {
    return { ok: false, message: validation.message };
  }

  return { ok: true, pixKey: normalized };
}
