/**
 * Title: app.component.ts
 * Author: Nathaniel Liebhart
 * Date: January 27, 2020
 * Description: this is the app ts file
 */
import { Component } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchInput = new FormControl('');
  convertedStockPrice: string;

  constructor() {
    this.searchInput.valueChanges
      .pipe(debounceTime(500))
      .subscribe(stock => this.getStockQuoteFromServer(stock));
  }

  getStockQuoteFromServer(stock: string) {
    this.convertedStockPrice = `The price of ${stock} is ${(100 * Math.random()).toFixed(4)}`;
  }

}
