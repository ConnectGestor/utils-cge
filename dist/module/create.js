import { generatePixObject } from './assembler';
import { PixElementType, } from './types/pixElements';
import { generateErrorObject } from './utils/generateErrorObject';
import { validatePixKey } from './utils/validatePixKey';
const defaultPixFields = {
    merchantCategoryCode: '0000',
    transactionCurrency: '986',
    countryCode: 'BR',
    isTransactionUnique: false,
    txid: '***',
};
export function createStaticPix(params) {
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
    };
    return generatePixObject(elements);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NyZWF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFaEQsT0FBTyxFQUNMLGNBQWMsR0FHZixNQUFNLHFCQUFxQixDQUFDO0FBRTdCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV4RCxNQUFNLGdCQUFnQixHQUFHO0lBQ3ZCLG9CQUFvQixFQUFFLE1BQU07SUFDNUIsbUJBQW1CLEVBQUUsS0FBSztJQUMxQixXQUFXLEVBQUUsSUFBSTtJQUNqQixtQkFBbUIsRUFBRSxLQUFLO0lBQzFCLElBQUksRUFBRSxLQUFLO0NBQ1osQ0FBQztBQUVGLE1BQU0sVUFBVSxlQUFlLENBQzdCLE1BQTZCO0lBRTdCLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDcEMsT0FBTyxtQkFBbUIsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDM0MsT0FBTyxtQkFBbUIsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxJQUFJLE1BQU0sQ0FBQyxZQUFZLEtBQUssRUFBRSxFQUFFLENBQUM7UUFDL0IsT0FBTyxtQkFBbUIsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRSxDQUFDO1FBQ3BDLE9BQU8sbUJBQW1CLENBQUMsOENBQThDLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQsTUFBTSxXQUFXLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRCxJQUFJLFdBQVcsQ0FBQyxFQUFFLEtBQUssS0FBSyxFQUFFLENBQUM7UUFDN0IsT0FBTyxtQkFBbUIsQ0FBQyxXQUFXLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxNQUFNLFFBQVEsR0FBRztRQUNmLElBQUksRUFBRSxjQUFjLENBQUMsTUFBTTtRQUMzQixHQUFHLGdCQUFnQjtRQUNuQixHQUFHLE1BQU07S0FDYyxDQUFDO0lBRTFCLE9BQU8saUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDckMsQ0FBQyJ9