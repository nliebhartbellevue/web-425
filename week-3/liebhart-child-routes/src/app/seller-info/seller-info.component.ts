/**
 * Title: seller-info.compoent.ts
 * Author: Nathaniel Liebhart
 * Date: January 20, 2020
 * Description: seller info component ts file
 */
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-seller-info",
  template: `
    The seller is Mary Lou, id: {{ sellerID }}
  `,
  styles: [
    `
      :host {
        background: yellow;
      }
    `
  ]
})
export class SellerInfoComponent implements OnInit {
  sellerID: string;

  constructor(route: ActivatedRoute) {
    this.sellerID = route.snapshot.paramMap.get("id");
  }

  ngOnInit() {}
}
