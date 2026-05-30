"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePixKey = validatePixKey;
const securityLimits_1 = require("./securityLimits");
const UNSAFE_KEY_PATTERN = /[\x00-\x1f\x7f\s@\\%]/;
function validatePixKey(pixKey) {
    if (!pixKey || typeof pixKey !== 'string') {
        return { ok: false, message: 'pixKey is required' };
    }
    const trimmed = pixKey.trim();
    if (!trimmed) {
        return { ok: false, message: 'pixKey is required' };
    }
    if (trimmed.length > securityLimits_1.MAX_PIX_KEY_LENGTH) {
        return {
            ok: false,
            message: `pixKey exceeds ${securityLimits_1.MAX_PIX_KEY_LENGTH} characters`,
        };
    }
    if (UNSAFE_KEY_PATTERN.test(trimmed)) {
        return { ok: false, message: 'pixKey contains invalid characters' };
    }
    return { ok: true };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVQaXhLZXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvdmFsaWRhdGVQaXhLZXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFRQSx3Q0FzQkM7QUE5QkQscURBQXNEO0FBTXRELE1BQU0sa0JBQWtCLEdBQUcsdUJBQXVCLENBQUM7QUFFbkQsU0FBZ0IsY0FBYyxDQUFDLE1BQWM7SUFDM0MsSUFBSSxDQUFDLE1BQU0sSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUUsQ0FBQztRQUMxQyxPQUFPLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBRUQsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzlCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNiLE9BQU8sRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxDQUFDO0lBQ3RELENBQUM7SUFFRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsbUNBQWtCLEVBQUUsQ0FBQztRQUN4QyxPQUFPO1lBQ0wsRUFBRSxFQUFFLEtBQUs7WUFDVCxPQUFPLEVBQUUsa0JBQWtCLG1DQUFrQixhQUFhO1NBQzNELENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUNyQyxPQUFPLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsQ0FBQztJQUN0RSxDQUFDO0lBRUQsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUN0QixDQUFDIn0=