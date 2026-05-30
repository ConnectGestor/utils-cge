import { generatePixObject } from './assembler';
import { CreateStaticPixParams } from './types/pixCreate';
import {
  PixElementType,
  PixStaticObject,
  StaticPixEmvElements,
} from './types/pixElements';
import { PixError } from './types/pixError';
import { generateErrorObject } from './utils/generateErrorObject';
import { validatePixKey } from './utils/validatePixKey';

const defaultPixFields = {
  merchantCategoryCode: '0000',
  transactionCurrency: '986',
  countryCode: 'BR',
  isTransactionUnique: false,
  txid: '***',
};

export function createStaticPix(
  params: CreateStaticPixParams
): PixStaticObject | PixError {
  if (params.merchantName.length > 25) {
    return generateErrorObject('merchantName character limit exceeded (> 25)');
  }

  if (params.txid && params.txid.length > 25) {
    return generateErrorObject('txid character limit exceeded (> 25)');
  }

  if (params.merchantCity === '') {
    return generateErrorObject('merchantCity is required');
  }

  if (params.merchantCity.length > 15) {
    return generateErrorObject('merchantCity character limit exceeded (> 15)');
  }

  const pixKeyError = validatePixKey(params.pixKey);
  if (pixKeyError.ok === false) {
    return generateErrorObject(`pixKey: ${pixKeyError.message}`);
  }

  const elements = {
    type: PixElementType.STATIC,
    ...defaultPixFields,
    ...params,
  } as StaticPixEmvElements;

  return generatePixObject(elements);
}
