/**
 * Title: fruit.service.ts
 * Author: Nathaniel Liebhart
 * Date: January 27, 2020
 * Description: this file handles the business logic for the fruit class
 */
import { Injectable } from '@angular/core';
import { Fruit } from './fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  getFruit(): Fruit {
    return new Fruit (1, 'Mango', 'Green/Orange');
  }

}
