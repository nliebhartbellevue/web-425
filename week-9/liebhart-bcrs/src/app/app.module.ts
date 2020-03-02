/**
 * Title: app.module.ts
 * Author: Nathaniel Liebhart
 * Date: February 27, 2020
 * Description: Bob's Computer Repair Shop
 */
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
// material design component modules
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material";
import { MatDividerModule } from "@angular/material/divider";
// flex layout module
import { FlexLayoutModule } from "@angular/flex-layout";
// Components
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { InvoiceComponent } from "./invoice/invoice.component";
import { ProductService } from "./utils/product.service";

@NgModule({
  declarations: [AppComponent, HomeComponent, InvoiceComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatDialogModule,
    MatDividerModule,
    FlexLayoutModule
  ],
  providers: [ProductService],
  entryComponents: [InvoiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
