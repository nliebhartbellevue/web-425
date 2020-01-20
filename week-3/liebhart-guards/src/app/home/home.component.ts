/**
 * Title: home.component.ts
 * Author: Nathaniel Liebhart
 * Date: January 20, 2020
 * Description: home component ts file
 */
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  template: `
    <div class="container">
      <h1 class="home">Home Component</h1>
    </div>
  `,
  styles: [
    `
      .home {
        background-color: red;
      }
      .container {
        margin-top: 20px;
      }
    `
  ]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
