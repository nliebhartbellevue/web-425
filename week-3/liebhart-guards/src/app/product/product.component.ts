/**
 * Title: product.compoent.ts
 * Author: Nathaniel Liebhart
 * Date: January 20, 2020
 * Description: product component ts file
 */
import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-product",
  template: `
    <div class="container">
      <h1 class="alert alert-sucess" role="alert">Product Component</h1>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Name:</span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="Enter your name"
          [formControl]="name"
        />
      </div>
    </div>
  `,
  styles: [
    `
      .product {
        background-color: cyan;
      }
      .container {
        margin-top: 20px;
      }
    `
  ]
})
export class ProductComponent implements OnInit {
  name: FormControl = new FormControl();

  constructor() {}

  ngOnInit() {}
}
