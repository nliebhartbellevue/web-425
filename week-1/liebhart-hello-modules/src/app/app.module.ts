/**
 * Title: app.module.ts
 * Author: Nathaniel Liebhart
 * Date: December 20, 2019
 * Description: The root module ts file
 */
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ShippingModule } from "./shipping/shipping.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ShippingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
