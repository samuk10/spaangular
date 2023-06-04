import { Component, Input } from '@angular/core';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  saldo: number = 0;

  depositar(novoValor: number) {
    if (!isNaN(novoValor)) {
      this.saldo += novoValor;
    }
  }

  sacar(valor: number) {
    if (!isNaN(valor) && this.saldo >= valor) {
      this.saldo -= valor;
    }
  }
}
