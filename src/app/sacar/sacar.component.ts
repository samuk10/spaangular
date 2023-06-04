import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'spa-sacar',
  templateUrl: './sacar.component.html',
  styleUrls: ['./sacar.component.css']
})
export class SacarComponent {
  transactions: number[] = [];
  @Output() sacar = new EventEmitter<number>();

  sacarValor() {
    const saque = parseFloat((<HTMLInputElement>document.getElementsByName('saque')[0]).value);
    if (!isNaN(saque)) {
      this.transactions.push(saque);
      this.sacar.emit(saque);
      console.log('saque', this.transactions);
      (<HTMLInputElement>document.getElementsByName('saque')[0]).value = ''; // Reset the input field
    }
  }
}
