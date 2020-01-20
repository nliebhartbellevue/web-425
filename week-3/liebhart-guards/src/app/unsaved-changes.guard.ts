/**
 * Title: unsaved-changes.guard.ts
 * Author: Nathaniel Liebhart
 * Date: January 20, 2020
 * Description: unsaved changes route guard file
 */
import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { ProductComponent } from "./product/product.component";

@Injectable()
export class UnsavedChangesGuard implements CanDeactivate<ProductComponent> {
  canDeactivate(component: ProductComponent) {
    if (component.name.dirty) {
      return window.confirm("You have unsaved changes. Still want to leave?");
    } else {
      return true;
    }
  }
}
