import { Component, OnInit, Input, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { HomeComponent } from "../home/home.component";

@Component({
  selector: "app-invoice",
  templateUrl: "./invoice.component.html",
  styleUrls: ["./invoice.component.css"]
})
export class InvoiceComponent implements OnInit {
  @Input() selectedProducts: string;
  @Input() totalCost: number;

  constructor(
    private dialogRef: MatDialogRef<HomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.selectedProducts = this.data.selectedProducts;
    this.totalCost = this.data.totalCost;
  }

  confirm() {
    this.dialogRef.close();
    location.reload();
  }
}
