/**
 * Title: shipping.module.ts
 * Author: Nathaniel Liebhart
 * Date: December 20, 2019
 * Description: Shipping module typescript file
 */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShippingComponent } from "./shipping.component";

@NgModule({
  declarations: [ShippingComponent],
  imports: [CommonModule],
  exports: [ShippingComponent]
})
export class ShippingModule {}
