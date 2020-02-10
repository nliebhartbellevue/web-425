/**
 * Title: app.component.ts
 * Date: February 10, 2020
 * Author: Nathaniel Liebhart
 * Description: Angular input properties
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'liebhart-input-properties';

  stock: string;
  readonly numberOfShares = 100;

  onChangeEvent({ target }): void {
    this.stock = target.value;
  }
}
