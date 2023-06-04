import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'spa-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent {

  @Input() saldo: number = 0;
  @Input() saldoSaque: number = 0;
  totalSaldo: number = 0;
  

  ngOnChanges() {
    this.totalSaldo -= this.saldoSaque;
    this.totalSaldo += this.saldo;
  }
}
