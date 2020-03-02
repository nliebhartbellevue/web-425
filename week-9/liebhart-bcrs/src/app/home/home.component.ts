/**
 * Title: home.component.ts
 * Author: Nathaniel Liebhart
 * Date: February 28, 2020
 * Description: Bob's Computer Repair Shop
 */
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { InvoiceComponent } from "../invoice/invoice.component";
import { Product } from "../utils/product";
import { ProductService } from "../utils/product.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
  products: Product[];
  subs: Subscription[] = [];
  selectedProducts: Product[] = [];
  totalCost: number = 0;

  constructor(
    private productService: ProductService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    const sub = this.productService.getProduct().subscribe(products => {
      this.products = products;
    });
    this.subs.push(sub);
  }

  getCheckboxes() {
    this.selectedProducts = this.products.filter(p => p.checked);

    for (let service of this.selectedProducts) {
      console.log(service.price);
      this.totalCost = this.totalCost + service.price;
    }
    console.log(this.totalCost);
    return this.totalCost.toFixed(2);
  }

  getInvoice() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      selectedProducts: this.selectedProducts,
      totalCost: this.totalCost
    };

    const dialogRef = this.dialog.open(InvoiceComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => console.log(data));
  }

  ngOnDestroy() {
    for (const sub of this.subs) {
      if (sub) {
        try {
          sub.unsubscribe();
        } catch {
          console.log("Can not unsubscribe!");
        }
      }
    }
  }
}
