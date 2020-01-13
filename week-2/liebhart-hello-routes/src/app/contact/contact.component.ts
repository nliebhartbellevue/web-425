import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  template: `
    <div class="container">
      <div class="row">
        <h1>The Contact Page Works</h1>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        margin-top: 20px;
      }
      h1 {
        color: yellow;
      }
    `
  ]
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
