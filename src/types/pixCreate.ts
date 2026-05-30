import { PixKeyType } from './pixKeyType';

export type CreateStaticPixParams = {
  merchantName: string;
  merchantCity: string;
  pixKey: string;
  pixKeyType: PixKeyType | string;
  infoAdicional?: string;
  fss?: string;
  txid?: string;
  transactionAmount: number;
  isTransactionUnique?: boolean;
  oneTime?: boolean;
};
