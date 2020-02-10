/**
 * Title: price-quote.component.ts
 * Author: Nathaniel Liebhart
 * Date: February 10, 2020
 * Description: Angular output properties
 */
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PriceQuote } from './iprice-quote';
import { interval } from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-price-quote',
  template: `
    <strong>
      Inside Price Quote Component
      {{ priceQuote?.stockSymbol }}
      {{ priceQuote?.lastPrice | currency: 'USD' }}
    </strong>
  `,
  styles: [``]
})
export class PriceQuoteComponent implements OnInit {

  @Output() lastPrice = new EventEmitter<PriceQuote>();

  priceQuote: PriceQuote;

  constructor() {
    interval(2000)
      .subscribe(data => {
        this.priceQuote = {
          stockSymbol: 'GOOG',
          lastPrice: 100 * Math.random()
        };
        this.lastPrice.emit(this.priceQuote);
      });
   }

  ngOnInit() {
  }

}
