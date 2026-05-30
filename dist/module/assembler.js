import { createEmv } from './emvHandler';
export function generatePixObject(elements) {
    const emvCode = createEmv(elements);
    const generatedObject = {
        ...elements,
        toBRCode: () => emvCode,
        throwIfError: () => generatedObject,
    };
    return generatedObject;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZW1ibGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Fzc2VtYmxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBR3pDLE1BQU0sVUFBVSxpQkFBaUIsQ0FDL0IsUUFBOEI7SUFFOUIsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXBDLE1BQU0sZUFBZSxHQUFHO1FBQ3RCLEdBQUcsUUFBUTtRQUNYLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPO1FBQ3ZCLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQyxlQUFlO0tBQ3BDLENBQUM7SUFFRixPQUFPLGVBQWUsQ0FBQztBQUN6QixDQUFDIn0=