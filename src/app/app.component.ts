import { Component } from '@angular/core';
import { Lexer } from './lexer';
import { Parser } from './parser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  resultString = '0';

  calculate(value: string) {
    this.resultString = value;

    const lexer = new Lexer(value);
    const tokens = lexer.tokenize();
    const parser = new Parser(tokens);
    return this.resultString = parser.expr();
  }

  clearData() {
    this.resultString = '';
  }
}
