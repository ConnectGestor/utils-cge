export enum EmvSchema {
  TAG_INIT = 0,
  TAG_ONETIME = 1,
  TAG_MAI = 26,
  TAG_MCC = 52,
  TAG_TRANSACTION_CURRENCY = 53,
  TAG_TRANSACTION_AMOUNT = 54,
  TAG_COUNTRY_CODE = 58,
  TAG_MERCHANT_NAME = 59,
  TAG_MERCHANT_CITY = 60,
  TAG_ADDITIONAL_DATA = 62,
  TAG_CRC = 63,
}

export enum EmvAdditionalDataSchema {
  TAG_TXID = 5,
}

export enum EmvMaiSchema {
  TAG_MAI_GUI = 0,
  TAG_MAI_PIXKEY = 1,
  TAG_MAI_INFO_ADD = 2,
  TAG_MAI_FSS = 3,
  BC_GUI = 'br.gov.bcb.pix',
}
