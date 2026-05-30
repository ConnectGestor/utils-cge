export function normalizePixKey(pixKey, pixKeyType) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9ybWFsaXplUGl4S2V5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL25vcm1hbGl6ZVBpeEtleS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLFVBQVUsZUFBZSxDQUFDLE1BQWMsRUFBRSxVQUFzQjtJQUNwRSxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFOUIsUUFBUSxVQUFVLEVBQUUsQ0FBQztRQUNuQixLQUFLLEtBQUssQ0FBQztRQUNYLEtBQUssTUFBTTtZQUNULE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFcEMsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2IsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNaLE9BQU8sT0FBTyxDQUFDO1lBQ2pCLENBQUM7WUFDRCxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDNUIsT0FBTyxJQUFJLE1BQU0sRUFBRSxDQUFDO1lBQ3RCLENBQUM7WUFDRCxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUUsQ0FBQztnQkFDbkQsT0FBTyxJQUFJLE1BQU0sRUFBRSxDQUFDO1lBQ3RCLENBQUM7WUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFLENBQUM7Z0JBQ3hCLE9BQU8sTUFBTSxNQUFNLEVBQUUsQ0FBQztZQUN4QixDQUFDO1lBQ0QsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQztRQUVELEtBQUssT0FBTztZQUNWLE9BQU8sT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRS9CLEtBQUssS0FBSztZQUNSLE9BQU8sT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRS9CO1lBQ0UsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztBQUNILENBQUMifQ==