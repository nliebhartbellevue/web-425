import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  template: `
    <div class="container">
      <div class="row">
        <h1>The Home Page Works</h1>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        margin-top: 20px;
      }
      h1 {
        color: blue;
      }
    `
  ]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
