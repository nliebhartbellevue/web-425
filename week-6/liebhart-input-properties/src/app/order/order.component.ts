/**
 * Title: order.component.ts
 * Date: February 10, 2020
 * Author: Nathaniel Liebhart
 * Description: Angular input properties
 */
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order',
  template: `
    <h4 *ngIf="!!stockSymbol">Buying {{quantity}} shares of {{stockSymbol}}</h4>
  `,
  styles: []
})
export class OrderComponent implements OnInit {

  @Input() quantity: number;
  @Input() stockSymbol: string;

  constructor() { }

  ngOnInit() {
  }

}
