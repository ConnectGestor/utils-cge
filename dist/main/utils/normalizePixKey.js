"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizePixKey = normalizePixKey;
function normalizePixKey(pixKey, pixKeyType) {
    const trimmed = pixKey.trim();
    switch (pixKeyType) {
        case 'CPF':
        case 'CNPJ':
            return trimmed.replace(/\D/g, '');
        case 'PHONE': {
            const digits = trimmed.replace(/\D/g, '');
            if (!digits) {
                return trimmed;
            }
            if (trimmed.startsWith('+')) {
                return `+${digits}`;
            }
            if (digits.startsWith('55') && digits.length >= 12) {
                return `+${digits}`;
            }
            if (digits.length >= 10) {
                return `+55${digits}`;
            }
            return digits;
        }
        case 'EMAIL':
            return trimmed.toLowerCase();
        case 'EVP':
            return trimmed.toLowerCase();
        default:
            return trimmed;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9ybWFsaXplUGl4S2V5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL25vcm1hbGl6ZVBpeEtleS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLDBDQWtDQztBQWxDRCxTQUFnQixlQUFlLENBQUMsTUFBYyxFQUFFLFVBQXNCO0lBQ3BFLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUU5QixRQUFRLFVBQVUsRUFBRSxDQUFDO1FBQ25CLEtBQUssS0FBSyxDQUFDO1FBQ1gsS0FBSyxNQUFNO1lBQ1QsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVwQyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDYixNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ1osT0FBTyxPQUFPLENBQUM7WUFDakIsQ0FBQztZQUNELElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUM1QixPQUFPLElBQUksTUFBTSxFQUFFLENBQUM7WUFDdEIsQ0FBQztZQUNELElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRSxDQUFDO2dCQUNuRCxPQUFPLElBQUksTUFBTSxFQUFFLENBQUM7WUFDdEIsQ0FBQztZQUNELElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUUsQ0FBQztnQkFDeEIsT0FBTyxNQUFNLE1BQU0sRUFBRSxDQUFDO1lBQ3hCLENBQUM7WUFDRCxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO1FBRUQsS0FBSyxPQUFPO1lBQ1YsT0FBTyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFL0IsS0FBSyxLQUFLO1lBQ1IsT0FBTyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFL0I7WUFDRSxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0FBQ0gsQ0FBQyJ9