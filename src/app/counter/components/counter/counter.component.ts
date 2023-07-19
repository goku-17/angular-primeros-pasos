import { Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{ counter }}</h3>

  <button (click)="incrementarPorUnValor(1)">+1</button>
  <button (click)="incrementarPorUnValor(-1)">-1</button>
  <button (click)="Reset()">Reset</button>
  `
})

export class CounterComponent {
  public counter:number = 10;

  incrementarPorUnValor(value:number):void {
    this.counter += value;
  }

  Reset(): void {
    this.counter = 10;
  }

}
