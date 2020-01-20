/**
 * Title: login.component.ts
 * Author: Nathaniel Liebhart
 * Date: January 20, 2020
 * Description: login component ts file
 */
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  template: `
    <div class="container">
      <h1 class="home">Please login here</h1>
    </div>
  `,
  styles: [
    `
      .home {
        background-color: greenyellow;
      }
      .container {
        margin-top: 20px;
      }
    `
  ]
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
