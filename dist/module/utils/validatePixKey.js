import { MAX_PIX_KEY_LENGTH } from './securityLimits';
// @ is allowed (e-mail Pix keys); block control chars, whitespace, \ and %
const UNSAFE_KEY_PATTERN = /[\x00-\x1f\x7f\s\\%]/;
export function validatePixKey(pixKey) {
    if (!pixKey || typeof pixKey !== 'string') {
        return { ok: false, message: 'pixKey is required' };
    }
    const trimmed = pixKey.trim();
    if (!trimmed) {
        return { ok: false, message: 'pixKey is required' };
    }
    if (trimmed.length > MAX_PIX_KEY_LENGTH) {
        return {
            ok: false,
            message: `pixKey exceeds ${MAX_PIX_KEY_LENGTH} characters`,
        };
    }
    if (UNSAFE_KEY_PATTERN.test(trimmed)) {
        return { ok: false, message: 'pixKey contains invalid characters' };
    }
    return { ok: true };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVQaXhLZXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvdmFsaWRhdGVQaXhLZXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFNdEQsMkVBQTJFO0FBQzNFLE1BQU0sa0JBQWtCLEdBQUcsc0JBQXNCLENBQUM7QUFFbEQsTUFBTSxVQUFVLGNBQWMsQ0FBQyxNQUFjO0lBQzNDLElBQUksQ0FBQyxNQUFNLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFLENBQUM7UUFDMUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLENBQUM7SUFDdEQsQ0FBQztJQUVELE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDYixPQUFPLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBRUQsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLGtCQUFrQixFQUFFLENBQUM7UUFDeEMsT0FBTztZQUNMLEVBQUUsRUFBRSxLQUFLO1lBQ1QsT0FBTyxFQUFFLGtCQUFrQixrQkFBa0IsYUFBYTtTQUMzRCxDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFDckMsT0FBTyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLENBQUM7SUFDdEUsQ0FBQztJQUVELE9BQU8sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFDdEIsQ0FBQyJ9