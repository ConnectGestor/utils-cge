"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmvMaiSchema = exports.EmvAdditionalDataSchema = exports.EmvSchema = void 0;
var EmvSchema;
(function (EmvSchema) {
    EmvSchema[EmvSchema["TAG_INIT"] = 0] = "TAG_INIT";
    EmvSchema[EmvSchema["TAG_ONETIME"] = 1] = "TAG_ONETIME";
    EmvSchema[EmvSchema["TAG_MAI"] = 26] = "TAG_MAI";
    EmvSchema[EmvSchema["TAG_MCC"] = 52] = "TAG_MCC";
    EmvSchema[EmvSchema["TAG_TRANSACTION_CURRENCY"] = 53] = "TAG_TRANSACTION_CURRENCY";
    EmvSchema[EmvSchema["TAG_TRANSACTION_AMOUNT"] = 54] = "TAG_TRANSACTION_AMOUNT";
    EmvSchema[EmvSchema["TAG_COUNTRY_CODE"] = 58] = "TAG_COUNTRY_CODE";
    EmvSchema[EmvSchema["TAG_MERCHANT_NAME"] = 59] = "TAG_MERCHANT_NAME";
    EmvSchema[EmvSchema["TAG_MERCHANT_CITY"] = 60] = "TAG_MERCHANT_CITY";
    EmvSchema[EmvSchema["TAG_ADDITIONAL_DATA"] = 62] = "TAG_ADDITIONAL_DATA";
    EmvSchema[EmvSchema["TAG_CRC"] = 63] = "TAG_CRC";
})(EmvSchema || (exports.EmvSchema = EmvSchema = {}));
var EmvAdditionalDataSchema;
(function (EmvAdditionalDataSchema) {
    EmvAdditionalDataSchema[EmvAdditionalDataSchema["TAG_TXID"] = 5] = "TAG_TXID";
})(EmvAdditionalDataSchema || (exports.EmvAdditionalDataSchema = EmvAdditionalDataSchema = {}));
var EmvMaiSchema;
(function (EmvMaiSchema) {
    EmvMaiSchema[EmvMaiSchema["TAG_MAI_GUI"] = 0] = "TAG_MAI_GUI";
    EmvMaiSchema[EmvMaiSchema["TAG_MAI_PIXKEY"] = 1] = "TAG_MAI_PIXKEY";
    EmvMaiSchema[EmvMaiSchema["TAG_MAI_INFO_ADD"] = 2] = "TAG_MAI_INFO_ADD";
    EmvMaiSchema[EmvMaiSchema["TAG_MAI_FSS"] = 3] = "TAG_MAI_FSS";
    EmvMaiSchema["BC_GUI"] = "br.gov.bcb.pix";
})(EmvMaiSchema || (exports.EmvMaiSchema = EmvMaiSchema = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl4RW12U2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3R5cGVzL3BpeEVtdlNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFZLFNBWVg7QUFaRCxXQUFZLFNBQVM7SUFDbkIsaURBQVksQ0FBQTtJQUNaLHVEQUFlLENBQUE7SUFDZixnREFBWSxDQUFBO0lBQ1osZ0RBQVksQ0FBQTtJQUNaLGtGQUE2QixDQUFBO0lBQzdCLDhFQUEyQixDQUFBO0lBQzNCLGtFQUFxQixDQUFBO0lBQ3JCLG9FQUFzQixDQUFBO0lBQ3RCLG9FQUFzQixDQUFBO0lBQ3RCLHdFQUF3QixDQUFBO0lBQ3hCLGdEQUFZLENBQUE7QUFDZCxDQUFDLEVBWlcsU0FBUyx5QkFBVCxTQUFTLFFBWXBCO0FBRUQsSUFBWSx1QkFFWDtBQUZELFdBQVksdUJBQXVCO0lBQ2pDLDZFQUFZLENBQUE7QUFDZCxDQUFDLEVBRlcsdUJBQXVCLHVDQUF2Qix1QkFBdUIsUUFFbEM7QUFFRCxJQUFZLFlBTVg7QUFORCxXQUFZLFlBQVk7SUFDdEIsNkRBQWUsQ0FBQTtJQUNmLG1FQUFrQixDQUFBO0lBQ2xCLHVFQUFvQixDQUFBO0lBQ3BCLDZEQUFlLENBQUE7SUFDZix5Q0FBeUIsQ0FBQTtBQUMzQixDQUFDLEVBTlcsWUFBWSw0QkFBWixZQUFZLFFBTXZCIn0=