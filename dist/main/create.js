"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStaticPix = createStaticPix;
const assembler_1 = require("./assembler");
const pixElements_1 = require("./types/pixElements");
const generateErrorObject_1 = require("./utils/generateErrorObject");
const validatePixKey_1 = require("./utils/validatePixKey");
const defaultPixFields = {
    merchantCategoryCode: '0000',
    transactionCurrency: '986',
    countryCode: 'BR',
    isTransactionUnique: false,
    txid: '***',
};
function createStaticPix(params) {
    if (params.merchantName.length > 25) {
        return (0, generateErrorObject_1.generateErrorObject)('merchantName character limit exceeded (> 25)');
    }
    if (params.txid && params.txid.length > 25) {
        return (0, generateErrorObject_1.generateErrorObject)('txid character limit exceeded (> 25)');
    }
    if (params.merchantCity === '') {
        return (0, generateErrorObject_1.generateErrorObject)('merchantCity is required');
    }
    if (params.merchantCity.length > 15) {
        return (0, generateErrorObject_1.generateErrorObject)('merchantCity character limit exceeded (> 15)');
    }
    const pixKeyError = (0, validatePixKey_1.validatePixKey)(params.pixKey);
    if (pixKeyError.ok === false) {
        return (0, generateErrorObject_1.generateErrorObject)(`pixKey: ${pixKeyError.message}`);
    }
    const elements = Object.assign(Object.assign({ type: pixElements_1.PixElementType.STATIC }, defaultPixFields), params);
    return (0, assembler_1.generatePixObject)(elements);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NyZWF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQW1CQSwwQ0ErQkM7QUFsREQsMkNBQWdEO0FBRWhELHFEQUk2QjtBQUU3QixxRUFBa0U7QUFDbEUsMkRBQXdEO0FBRXhELE1BQU0sZ0JBQWdCLEdBQUc7SUFDdkIsb0JBQW9CLEVBQUUsTUFBTTtJQUM1QixtQkFBbUIsRUFBRSxLQUFLO0lBQzFCLFdBQVcsRUFBRSxJQUFJO0lBQ2pCLG1CQUFtQixFQUFFLEtBQUs7SUFDMUIsSUFBSSxFQUFFLEtBQUs7Q0FDWixDQUFDO0FBRUYsU0FBZ0IsZUFBZSxDQUM3QixNQUE2QjtJQUU3QixJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRSxDQUFDO1FBQ3BDLE9BQU8sSUFBQSx5Q0FBbUIsRUFBQyw4Q0FBOEMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDM0MsT0FBTyxJQUFBLHlDQUFtQixFQUFDLHNDQUFzQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELElBQUksTUFBTSxDQUFDLFlBQVksS0FBSyxFQUFFLEVBQUUsQ0FBQztRQUMvQixPQUFPLElBQUEseUNBQW1CLEVBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUUsQ0FBQztRQUNwQyxPQUFPLElBQUEseUNBQW1CLEVBQUMsOENBQThDLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQsTUFBTSxXQUFXLEdBQUcsSUFBQSwrQkFBYyxFQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRCxJQUFJLFdBQVcsQ0FBQyxFQUFFLEtBQUssS0FBSyxFQUFFLENBQUM7UUFDN0IsT0FBTyxJQUFBLHlDQUFtQixFQUFDLFdBQVcsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELE1BQU0sUUFBUSxHQUFHLDhCQUNmLElBQUksRUFBRSw0QkFBYyxDQUFDLE1BQU0sSUFDeEIsZ0JBQWdCLEdBQ2hCLE1BQU0sQ0FDYyxDQUFDO0lBRTFCLE9BQU8sSUFBQSw2QkFBaUIsRUFBQyxRQUFRLENBQUMsQ0FBQztBQUNyQyxDQUFDIn0=