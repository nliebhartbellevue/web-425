/**
 * Title: home.component.ts
 * Author: Nathaniel Liebhart
 * Date: February 28, 2020
 * Description: Bob's Computer Repair Shop
 */
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { InvoiceComponent } from "../invoice/invoice.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  IsChecked: boolean;

  costs = {
    passwordReset: 0,
    spywareRemoval: 0,
    ramUpgrade: 0,
    softwareInstallation: 0,
    tuneup: 0,
    keyboardCleaning: 0,
    diskCleanup: 0,
    parts: 0,
    labor: 0,
    total: 0,
    date: ""
  };

  constructor(private dialog: MatDialog) {
    this.IsChecked = false;
  }

  ngOnInit() {}

  OnChange($event) {
    if (!this.IsChecked) {
      this.IsChecked = true;
    }
    console.log($event);
    console.log(this.IsChecked);
  }

  onSubmit(costValues) {
    if (costValues.passwordReset) {
      this.costs.passwordReset = 39.99;
    }
    if (costValues.spywareRemoval) {
      this.costs.spywareRemoval = 99.99;
    }
    if (costValues.ramUpgrade) {
      this.costs.ramUpgrade = 129.99;
    }
    if (costValues.softwareInstallation) {
      this.costs.softwareInstallation = 49.99;
    }
    if (costValues.tuneup) {
      this.costs.tuneup = 89.99;
    }
    if (costValues.keyboardCleaning) {
      this.costs.keyboardCleaning = 45;
    }
    if (costValues.discCleanup) {
      this.costs.diskCleanup = 149.99;
    }
    this.costs.labor = costValues.labor * 50;
    this.costs.parts = costValues.parts;

    let sum = 0;

    for (const key in this.costs) {
      sum += this.costs[key];
    }
    this.costs.total = sum;
    this.costs.date = new Date().toLocaleDateString("en-US");
    this.openInvoiceDialog();
  }

  openInvoiceDialog() {
    const dialogRef = this.dialog.open(InvoiceComponent, {
      width: "75%",
      data: this.costs,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      location.reload();
    });
  }
}
