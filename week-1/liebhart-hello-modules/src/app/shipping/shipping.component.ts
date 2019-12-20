/**
 * Title: shipping.component.ts
 * Author: Nathaniel Liebhart
 * Date: December 20, 2019
 * Description: Shipping Component typescript file
 */
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-shipping",
  template: `
    <p>
      Welcome to the ShippingComponent
    </p>
  `,
  styles: []
})
export class ShippingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
