import { computeCRC } from './crc';
import { StaticPixEmvElements } from './types/pixElements';
import {
  EmvAdditionalDataSchema,
  EmvMaiSchema,
  EmvSchema,
} from './types/pixEmvSchema';
import { normalizeCity, normalizeName } from './utils/textParser';
import zeroPad from './utils/zeroPad';

function generateEmvElement(elementId: number, value: string) {
  if (!value) return '';
  const parsedElementId = zeroPad(elementId, 2);
  const parsedLength = zeroPad(value.length, 2);
  return `${parsedElementId}${parsedLength}${value}`;
}

function generateStaticMAI(elements: StaticPixEmvElements): string {
  return [
    generateEmvElement(EmvMaiSchema.TAG_MAI_GUI, EmvMaiSchema.BC_GUI),
    generateEmvElement(EmvMaiSchema.TAG_MAI_PIXKEY, elements.pixKey),
    generateEmvElement(EmvMaiSchema.TAG_MAI_INFO_ADD, elements.infoAdicional),
    generateEmvElement(EmvMaiSchema.TAG_MAI_FSS, elements.fss),
  ].join('');
}

function generateAdditionalData(txid: string) {
  return generateEmvElement(EmvAdditionalDataSchema.TAG_TXID, txid || '***');
}

export function createEmv(elements: StaticPixEmvElements): string {
  const emvElements = [
    generateEmvElement(EmvSchema.TAG_INIT, '01'),
    generateEmvElement(EmvSchema.TAG_ONETIME, elements.oneTime ? '12' : ''),
    generateEmvElement(EmvSchema.TAG_MAI, generateStaticMAI(elements)),
    generateEmvElement(EmvSchema.TAG_MCC, elements.merchantCategoryCode),
    generateEmvElement(
      EmvSchema.TAG_TRANSACTION_CURRENCY,
      elements.transactionCurrency
    ),
    generateEmvElement(
      EmvSchema.TAG_TRANSACTION_AMOUNT,
      elements.transactionAmount > 0
        ? elements.transactionAmount.toFixed(2)
        : ''
    ),
    generateEmvElement(EmvSchema.TAG_COUNTRY_CODE, elements.countryCode),
    generateEmvElement(
      EmvSchema.TAG_MERCHANT_NAME,
      normalizeName(elements.merchantName)
    ),
    generateEmvElement(
      EmvSchema.TAG_MERCHANT_CITY,
      normalizeCity(elements.merchantCity)
    ),
    generateEmvElement(
      EmvSchema.TAG_ADDITIONAL_DATA,
      generateAdditionalData(elements.txid ?? '***')
    ),
    generateEmvElement(EmvSchema.TAG_CRC, '0000'),
  ];

  const generatedEmv = emvElements.join('');
  return generatedEmv.replace(/\w{4}$/, computeCRC(generatedEmv));
}
