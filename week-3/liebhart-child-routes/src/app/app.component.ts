/**
 * Title: app.component.ts
 * Author: Nathaniel Liebhart
 * Date: January 20, 2020
 * Description: root app components ts file
 */
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Exercise 3.3";
  productId = 1234;
}
