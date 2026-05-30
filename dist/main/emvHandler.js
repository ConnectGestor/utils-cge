"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEmv = createEmv;
const crc_1 = require("./crc");
const pixEmvSchema_1 = require("./types/pixEmvSchema");
const textParser_1 = require("./utils/textParser");
const zeroPad_1 = __importDefault(require("./utils/zeroPad"));
function generateEmvElement(elementId, value) {
    if (!value)
        return '';
    const parsedElementId = (0, zeroPad_1.default)(elementId, 2);
    const parsedLength = (0, zeroPad_1.default)(value.length, 2);
    return `${parsedElementId}${parsedLength}${value}`;
}
function generateStaticMAI(elements) {
    return [
        generateEmvElement(pixEmvSchema_1.EmvMaiSchema.TAG_MAI_GUI, pixEmvSchema_1.EmvMaiSchema.BC_GUI),
        generateEmvElement(pixEmvSchema_1.EmvMaiSchema.TAG_MAI_PIXKEY, elements.pixKey),
        generateEmvElement(pixEmvSchema_1.EmvMaiSchema.TAG_MAI_INFO_ADD, elements.infoAdicional),
        generateEmvElement(pixEmvSchema_1.EmvMaiSchema.TAG_MAI_FSS, elements.fss),
    ].join('');
}
function generateAdditionalData(txid) {
    return generateEmvElement(pixEmvSchema_1.EmvAdditionalDataSchema.TAG_TXID, txid || '***');
}
function createEmv(elements) {
    var _a;
    const emvElements = [
        generateEmvElement(pixEmvSchema_1.EmvSchema.TAG_INIT, '01'),
        generateEmvElement(pixEmvSchema_1.EmvSchema.TAG_ONETIME, elements.oneTime ? '12' : ''),
        generateEmvElement(pixEmvSchema_1.EmvSchema.TAG_MAI, generateStaticMAI(elements)),
        generateEmvElement(pixEmvSchema_1.EmvSchema.TAG_MCC, elements.merchantCategoryCode),
        generateEmvElement(pixEmvSchema_1.EmvSchema.TAG_TRANSACTION_CURRENCY, elements.transactionCurrency),
        generateEmvElement(pixEmvSchema_1.EmvSchema.TAG_TRANSACTION_AMOUNT, elements.transactionAmount > 0
            ? elements.transactionAmount.toFixed(2)
            : ''),
        generateEmvElement(pixEmvSchema_1.EmvSchema.TAG_COUNTRY_CODE, elements.countryCode),
        generateEmvElement(pixEmvSchema_1.EmvSchema.TAG_MERCHANT_NAME, (0, textParser_1.normalizeName)(elements.merchantName)),
        generateEmvElement(pixEmvSchema_1.EmvSchema.TAG_MERCHANT_CITY, (0, textParser_1.normalizeCity)(elements.merchantCity)),
        generateEmvElement(pixEmvSchema_1.EmvSchema.TAG_ADDITIONAL_DATA, generateAdditionalData((_a = elements.txid) !== null && _a !== void 0 ? _a : '***')),
        generateEmvElement(pixEmvSchema_1.EmvSchema.TAG_CRC, '0000'),
    ];
    const generatedEmv = emvElements.join('');
    return generatedEmv.replace(/\w{4}$/, (0, crc_1.computeCRC)(generatedEmv));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW12SGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbXZIYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBOEJBLDhCQWtDQztBQWhFRCwrQkFBbUM7QUFFbkMsdURBSThCO0FBQzlCLG1EQUFrRTtBQUNsRSw4REFBc0M7QUFFdEMsU0FBUyxrQkFBa0IsQ0FBQyxTQUFpQixFQUFFLEtBQWE7SUFDMUQsSUFBSSxDQUFDLEtBQUs7UUFBRSxPQUFPLEVBQUUsQ0FBQztJQUN0QixNQUFNLGVBQWUsR0FBRyxJQUFBLGlCQUFPLEVBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlDLE1BQU0sWUFBWSxHQUFHLElBQUEsaUJBQU8sRUFBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlDLE9BQU8sR0FBRyxlQUFlLEdBQUcsWUFBWSxHQUFHLEtBQUssRUFBRSxDQUFDO0FBQ3JELENBQUM7QUFFRCxTQUFTLGlCQUFpQixDQUFDLFFBQThCO0lBQ3ZELE9BQU87UUFDTCxrQkFBa0IsQ0FBQywyQkFBWSxDQUFDLFdBQVcsRUFBRSwyQkFBWSxDQUFDLE1BQU0sQ0FBQztRQUNqRSxrQkFBa0IsQ0FBQywyQkFBWSxDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ2hFLGtCQUFrQixDQUFDLDJCQUFZLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQztRQUN6RSxrQkFBa0IsQ0FBQywyQkFBWSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDO0tBQzNELENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2IsQ0FBQztBQUVELFNBQVMsc0JBQXNCLENBQUMsSUFBWTtJQUMxQyxPQUFPLGtCQUFrQixDQUFDLHNDQUF1QixDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksS0FBSyxDQUFDLENBQUM7QUFDN0UsQ0FBQztBQUVELFNBQWdCLFNBQVMsQ0FBQyxRQUE4Qjs7SUFDdEQsTUFBTSxXQUFXLEdBQUc7UUFDbEIsa0JBQWtCLENBQUMsd0JBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDO1FBQzVDLGtCQUFrQixDQUFDLHdCQUFTLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3ZFLGtCQUFrQixDQUFDLHdCQUFTLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xFLGtCQUFrQixDQUFDLHdCQUFTLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQztRQUNwRSxrQkFBa0IsQ0FDaEIsd0JBQVMsQ0FBQyx3QkFBd0IsRUFDbEMsUUFBUSxDQUFDLG1CQUFtQixDQUM3QjtRQUNELGtCQUFrQixDQUNoQix3QkFBUyxDQUFDLHNCQUFzQixFQUNoQyxRQUFRLENBQUMsaUJBQWlCLEdBQUcsQ0FBQztZQUM1QixDQUFDLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDdkMsQ0FBQyxDQUFDLEVBQUUsQ0FDUDtRQUNELGtCQUFrQixDQUFDLHdCQUFTLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLFdBQVcsQ0FBQztRQUNwRSxrQkFBa0IsQ0FDaEIsd0JBQVMsQ0FBQyxpQkFBaUIsRUFDM0IsSUFBQSwwQkFBYSxFQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FDckM7UUFDRCxrQkFBa0IsQ0FDaEIsd0JBQVMsQ0FBQyxpQkFBaUIsRUFDM0IsSUFBQSwwQkFBYSxFQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FDckM7UUFDRCxrQkFBa0IsQ0FDaEIsd0JBQVMsQ0FBQyxtQkFBbUIsRUFDN0Isc0JBQXNCLENBQUMsTUFBQSxRQUFRLENBQUMsSUFBSSxtQ0FBSSxLQUFLLENBQUMsQ0FDL0M7UUFDRCxrQkFBa0IsQ0FBQyx3QkFBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7S0FDOUMsQ0FBQztJQUVGLE1BQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUMsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFBLGdCQUFVLEVBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUNsRSxDQUFDIn0=