/**
 * Title: home.compoent.ts
 * Author: Nathaniel Liebhart
 * Date: January 20, 2020
 * Description: home component ts file
 */
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  template: `
    <div class="container">
      <div class="row">
        <h2>Welcome to the Home Page</h2>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        margin-top: 20px;
      }
      h2 {
        color: steelblue;
      }
    `
  ]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
