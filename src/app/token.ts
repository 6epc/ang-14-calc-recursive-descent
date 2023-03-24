import { TokenType } from "./token-types";

export class Token {
  constructor(public type: TokenType, public value?: any) {}
}
