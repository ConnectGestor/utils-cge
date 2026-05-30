"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePixObject = generatePixObject;
const emvHandler_1 = require("./emvHandler");
function generatePixObject(elements) {
    const emvCode = (0, emvHandler_1.createEmv)(elements);
    const generatedObject = Object.assign(Object.assign({}, elements), { toBRCode: () => emvCode, throwIfError: () => generatedObject });
    return generatedObject;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZW1ibGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Fzc2VtYmxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLDhDQVlDO0FBZkQsNkNBQXlDO0FBR3pDLFNBQWdCLGlCQUFpQixDQUMvQixRQUE4QjtJQUU5QixNQUFNLE9BQU8sR0FBRyxJQUFBLHNCQUFTLEVBQUMsUUFBUSxDQUFDLENBQUM7SUFFcEMsTUFBTSxlQUFlLG1DQUNoQixRQUFRLEtBQ1gsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFDdkIsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLGVBQWUsR0FDcEMsQ0FBQztJQUVGLE9BQU8sZUFBZSxDQUFDO0FBQ3pCLENBQUMifQ==