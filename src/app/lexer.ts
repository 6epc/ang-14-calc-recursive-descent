import { Token } from './token';

export class Lexer {
  public pos = 0;

  constructor(public input: string) {}

  public currentChar() {
    return this.pos < this.input.length ? this.input[this.pos] : null;
  }

  private advance() {
    this.pos++;
  }

  private skipWhitespace() {
    while (/\s/.test(this.currentChar()!)) {
      this.advance();
    }
  }

  private number() {
    let result = '';

    while (/\d/.test(this.currentChar()!)) {
      result += this.currentChar();
      this.advance();
    }

    if (this.currentChar() === '.') {
      result += this.currentChar();
      this.advance();

      while (/\d/.test(this.currentChar()!)) {
        result += this.currentChar();
        this.advance();
      }
    }

    return new Token('NUMBER', parseFloat(result));
  }

  private getNextToken() {
    while (this.currentChar() !== null) {
      if (/\d/.test(this.currentChar()!)) {
        return this.number();
      }

      if (this.currentChar() === '+') {
        this.advance();
        return new Token('PLUS');
      }

      if (this.currentChar() === '-') {
        this.advance();
        return new Token('MINUS');
      }

      if (this.currentChar() === '*') {
        this.advance();
        return new Token('MULTIPLY');
      }

      if (this.currentChar() === '/') {
        this.advance();
        return new Token('DIVIDE');
      }

      if (this.currentChar() === '(') {
        this.advance();
        return new Token('LPAREN');
      }

      if (this.currentChar() === ')') {
        this.advance();
        return new Token('RPAREN');
      }

      throw new Error(`Unexpected character: ${this.currentChar()}`);
    }

    return new Token('EOF');
  }

  public tokenize() {
    const tokens = [];

    while (true) {
      const token = this.getNextToken();
      tokens.push(token);

      if (token.type === 'EOF') {
        break;
      }
    }

    return tokens;
  }
}
