/**
 * Title: fruit.service.ts
 * Author: Nathaniel Liebhart
 * Date: January 27, 2020
 * Description: the service to implement the business logic for the fruit component
 */
import { Injectable } from '@angular/core';
import { Fruit } from './fruit';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  fruits: Fruit[] = [
    {id: 1, name: 'Mango', pricePerPound: '0.85', quantity: 50 },
    {id: 2, name: 'Watermelon', pricePerPound: '1.25', quantity: 25 },
    {id: 3, name: 'Apple', pricePerPound: '2.25', quantity: 200 },
    {id: 4, name: 'Oranges', pricePerPound: '0.65', quantity: 300 },
    {id: 5, name: 'Grapes', pricePerPound: '0.55', quantity: 250 }
  ]
  constructor() { }

  getFruit(): Observable<Fruit[]> {
    return of(this.fruits);
  }
}
