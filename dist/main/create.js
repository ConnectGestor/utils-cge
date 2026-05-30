"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
    const prepared = (0, validatePixKey_1.preparePixKey)(params.pixKey, params.pixKeyType);
    if (prepared.ok === false) {
        return (0, generateErrorObject_1.generateErrorObject)(`pixKey: ${prepared.message}`);
    }
    const { pixKeyType: _pixKeyType } = params, pixParams = __rest(params, ["pixKeyType"]);
    const elements = Object.assign(Object.assign(Object.assign({ type: pixElements_1.PixElementType.STATIC }, defaultPixFields), pixParams), { pixKey: prepared.pixKey });
    return (0, assembler_1.generatePixObject)(elements);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NyZWF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBbUJBLDBDQWtDQztBQXJERCwyQ0FBZ0Q7QUFFaEQscURBSTZCO0FBRTdCLHFFQUFrRTtBQUNsRSwyREFBdUQ7QUFFdkQsTUFBTSxnQkFBZ0IsR0FBRztJQUN2QixvQkFBb0IsRUFBRSxNQUFNO0lBQzVCLG1CQUFtQixFQUFFLEtBQUs7SUFDMUIsV0FBVyxFQUFFLElBQUk7SUFDakIsbUJBQW1CLEVBQUUsS0FBSztJQUMxQixJQUFJLEVBQUUsS0FBSztDQUNaLENBQUM7QUFFRixTQUFnQixlQUFlLENBQzdCLE1BQTZCO0lBRTdCLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDcEMsT0FBTyxJQUFBLHlDQUFtQixFQUFDLDhDQUE4QyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUUsQ0FBQztRQUMzQyxPQUFPLElBQUEseUNBQW1CLEVBQUMsc0NBQXNDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsSUFBSSxNQUFNLENBQUMsWUFBWSxLQUFLLEVBQUUsRUFBRSxDQUFDO1FBQy9CLE9BQU8sSUFBQSx5Q0FBbUIsRUFBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRSxDQUFDO1FBQ3BDLE9BQU8sSUFBQSx5Q0FBbUIsRUFBQyw4Q0FBOEMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRCxNQUFNLFFBQVEsR0FBRyxJQUFBLDhCQUFhLEVBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakUsSUFBSSxRQUFRLENBQUMsRUFBRSxLQUFLLEtBQUssRUFBRSxDQUFDO1FBQzFCLE9BQU8sSUFBQSx5Q0FBbUIsRUFBQyxXQUFXLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsS0FBbUIsTUFBTSxFQUFwQixTQUFTLFVBQUssTUFBTSxFQUFsRCxjQUF5QyxDQUFTLENBQUM7SUFFekQsTUFBTSxRQUFRLEdBQUcsNENBQ2YsSUFBSSxFQUFFLDRCQUFjLENBQUMsTUFBTSxJQUN4QixnQkFBZ0IsR0FDaEIsU0FBUyxLQUNaLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxHQUNBLENBQUM7SUFFMUIsT0FBTyxJQUFBLDZCQUFpQixFQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3JDLENBQUMifQ==