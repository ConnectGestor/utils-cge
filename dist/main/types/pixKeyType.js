"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PIX_KEY_TYPES = void 0;
exports.parsePixKeyType = parsePixKeyType;
exports.PIX_KEY_TYPES = [
    'EMAIL',
    'PHONE',
    'CPF',
    'CNPJ',
    'EVP',
];
function parsePixKeyType(value) {
    const upper = value.trim().toUpperCase();
    return exports.PIX_KEY_TYPES.includes(upper)
        ? upper
        : null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl4S2V5VHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBlcy9waXhLZXlUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQVVBLDBDQUtDO0FBZlksUUFBQSxhQUFhLEdBQUc7SUFDM0IsT0FBTztJQUNQLE9BQU87SUFDUCxLQUFLO0lBQ0wsTUFBTTtJQUNOLEtBQUs7Q0FDRyxDQUFDO0FBSVgsU0FBZ0IsZUFBZSxDQUFDLEtBQWE7SUFDM0MsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pDLE9BQU8scUJBQWEsQ0FBQyxRQUFRLENBQUMsS0FBbUIsQ0FBQztRQUNoRCxDQUFDLENBQUUsS0FBb0I7UUFDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUNYLENBQUMifQ==