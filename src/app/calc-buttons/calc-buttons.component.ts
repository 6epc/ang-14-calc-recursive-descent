import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-calc-buttons',
  templateUrl: './calc-buttons.component.html',
  styleUrls: ['./calc-buttons.component.scss']
})
export class CalcButtonsComponent {
  @Output() data = new EventEmitter<string>();
  @Output() clear = new EventEmitter<any>();

  @HostListener('window:keyup', ['$event']) handleKeyboardEvent(event: KeyboardEvent): void {
    switch (event.key) {
      case '1':
        this.putData('1')
        break;
      case '2':
        this.putData('2')
        break;
      case '3':
        this.putData('3')
        break;
      case '4':
        this.putData('4')
        break;
      case '5':
        this.putData('5')
        break;
      case '6':
        this.putData('6')
        break;
      case '7':
        this.putData('7')
        break;
      case '8':
        this.putData('8')
        break;
      case '9':
        this.putData('9')
        break;
      case '0':
        this.putData('0')
        break;
      case '+':
        this.putData('+')
        break;
      case '-':
        this.putData('-')
        break;
      case '*':
        this.putData('*')
        break;
      case '/':
        this.putData('/')
        break;
      case '(':
        this.putData('(')
        break;
      case ')':
        this.putData(')')
        break;
      case '.':
        this.putData('.')
        break;
      case 'Backspace':
        this.clearData()
        break;
      case '=':
        this.emitData()
        break;
      case 'Enter':
        this.emitData()
        break;

      default:
        break;
    }

  }

  incomingData = '';

  putData(value: string) {
    this.incomingData += value;
  }

  clearData() {
    this.incomingData = '';
    this.clear.emit();
  }

  emitData() {
    this.data.emit(this.incomingData)
  }

}
