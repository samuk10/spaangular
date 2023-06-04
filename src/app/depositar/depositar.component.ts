import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'spa-depositar',
  templateUrl: './depositar.component.html',
  styleUrls: ['./depositar.component.css']
})
export class DepositarComponent {

  transactions: number[] = [];
  @Output() saldoChange = new EventEmitter<number>();


  depositar() {
    const novoValor = parseFloat((<HTMLInputElement>document.getElementsByName('novoValor')[0]).value);
    if (!isNaN(novoValor)) {
      this.transactions.push(novoValor);
      this.saldoChange.emit(novoValor);
      console.log('deposito', this.transactions);
      (<HTMLInputElement>document.getElementsByName('novoValor')[0]).value = ''; // Resetar o campo Input
    }
  }
}

