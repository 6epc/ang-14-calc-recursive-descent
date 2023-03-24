import { Token } from "./token";
import { TokenType } from "./token-types";

export class Parser {
  private currentToken: Token;
  private pos = 0;

  constructor(private tokens: Token[]) {
    this.currentToken = this.tokens[this.pos];
  }

  private eat(tokenType: TokenType) {
    if (this.currentToken.type === tokenType) {
      this.pos++;
      this.currentToken = this.tokens[this.pos];
    } else {
      throw new Error(`Unexpected token: ${this.currentToken.type}`);
    }
  }

  public expr() {
    let result = this.term();

    while (
      this.currentToken.type === 'PLUS' ||
      this.currentToken.type === 'MINUS'
    ) {
      const token = this.currentToken;

      if (token.type === 'PLUS') {
        this.eat('PLUS');
        result += this.term();
      } else if (token.type === 'MINUS') {
        this.eat('MINUS');
        result -= this.term();
      }
    }

    return result;
  }

  private term() {
    let result = this.factor();

    while (
      this.currentToken.type === 'MULTIPLY' ||
      this.currentToken.type === 'DIVIDE'
    ) {
      const token = this.currentToken;

      if (token.type === 'MULTIPLY') {
        this.eat('MULTIPLY');
        result *= this.factor();
      } else if (token.type === 'DIVIDE') {
        this.eat('DIVIDE');
        result /= this.factor();
      }
    }

    return result;
  }

  private factor(): any {
    const token = this.currentToken;

    if (token.type === 'NUMBER') {
      this.eat('NUMBER');
      return token.value;
    } else if (token.type === 'LPAREN') {
      this.eat('LPAREN');
      const result = this.expr();
      this.eat('RPAREN');
      return result;
    } else {
      throw new Error(`Unexpected token: ${this.currentToken.type}`);
    }
  }

}
