import { PixStaticObject } from './pixElements';

export interface PixStaticFn {
  readonly toBRCode: () => string;
  readonly throwIfError: () => PixStaticObject;
}
