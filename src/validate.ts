import { PixStaticObject } from './types/pixElements';
import { PixError } from './types/pixError';

export function hasError(
  pixElement: PixStaticObject | PixError
): pixElement is PixError {
  return !!(pixElement as PixError).error;
}
