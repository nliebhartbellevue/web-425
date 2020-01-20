/**
 * Title: product-description.compoent.ts
 * Author: Nathaniel Liebhart
 * Date: January 20, 2020
 * Description: product description component ts file
 */
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-description",
  template: `
    <p>
      This is a great product!
    </p>
  `,
  styles: []
})
export class ProductDescriptionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
