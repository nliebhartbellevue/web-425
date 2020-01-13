import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  template: `
    <div class="container">
      <div class="row">
        <h1>The About Page Works</h1>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        margin-top: 20px;
      }
      h1 {
        color: purple;
      }
    `
  ]
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
