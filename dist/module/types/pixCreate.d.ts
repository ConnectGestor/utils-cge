export type CreateStaticPixParams = {
    merchantName: string;
    merchantCity: string;
    infoAdicional?: string;
    pixKey: string;
    fss?: string;
    txid?: string;
    transactionAmount: number;
    isTransactionUnique?: boolean;
    oneTime?: boolean;
};
