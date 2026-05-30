import { createEmv } from './emvHandler';
import { PixStaticObject, StaticPixEmvElements } from './types/pixElements';

export function generatePixObject(
  elements: StaticPixEmvElements
): PixStaticObject {
  const emvCode = createEmv(elements);

  const generatedObject = {
    ...elements,
    toBRCode: () => emvCode,
    throwIfError: () => generatedObject,
  };

  return generatedObject;
}
