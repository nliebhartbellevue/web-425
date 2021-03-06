/**
 * Title: fruit.component.ts
 * Author: Nathaniel Liebhart
 * Date: January 27, 2020
 * Description: this is the fruit component file
 */
import { Component, OnInit } from '@angular/core';
import { Fruit } from './fruit';
import { FruitService } from './fruit.service';

@Component({
  selector: 'app-fruit',
  template: `
    <div class="container">
      <div class="row">
        <h2>Fruit Details</h2>
        <table class="table table-hover table-striped">
          <thead class="tbl-header">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ fruit.id }}</td>
              <td>{{ fruit.name }}</td>
              <td>{{ fruit.color }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .tbl-header {
      backgroud-color: purple;
      color: white;
    }
  `],
  providers: [FruitService]
})
export class FruitComponent implements OnInit {

  fruit: Fruit;

  constructor(fruitService: FruitService) { 
    this.fruit = fruitService.getFruit();
   }

  ngOnInit() {
  }

}
