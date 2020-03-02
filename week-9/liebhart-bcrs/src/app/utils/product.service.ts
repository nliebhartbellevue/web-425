/**
 * Title: utils/product.service.ts
 * Author: Nathaniel Liebhart
 * Date: February 28, 2020
 * Description: Bob's Computer Repair Shop
 */
import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";
import { Product } from "./product";

@Injectable()
export class ProductService {
  products: Product[] = [
    { id: 1, name: "Password Reset", price: 39.99, checked: false },
    { id: 2, name: "Spyware Removal", price: 99.99, checked: false },
    { id: 3, name: "RAM Upgrade", price: 129.99, checked: false },
    { id: 4, name: "Software Installation", price: 49.99, checked: false },
    { id: 5, name: "Tune-up", price: 89.99, checked: false },
    { id: 6, name: "Keyboard Cleaning", price: 45.0, checked: false },
    { id: 7, name: "Disk Clean-up", price: 149.99, checked: false }
  ];

  constructor() {}

  getProduct(): Observable<Product[]> {
    return of(this.products);
  }
}
