/**
 * Title: app.component.ts
 * Author: Nathaniel Liebhart
 * Date: January 27, 2020
 * Description: root ts file for the app component
 */
import { Component } from '@angular/core';
import { Fruit } from './fruit';
import { Observable } from 'rxjs';
import { FruitService } from './fruit.service';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul class="navbar-nav">
            <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link">About</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Contact Us</a></li>
          </ul>
        </nav>
    <br /><br />
      <div class="container">
        <div class="row">
          <div class="col">
            <h2>Fruits Table</h2>
            <table class="table table-striped table-bordered table-hover">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price Per Pound</th>
                  <th scope="col">Quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let fruit of fruit | async">
                  <th scope="row">{{ fruit.id }}</th>
                  <td>{{ fruit.name }}</td>
                  <td>$ {{ fruit.pricePerPound }}</td>
                  <td>{{ fruit.quantity }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  `,
  styles: [``]
})
export class AppComponent {
  fruit: Observable<Fruit[]>;
  title = 'app';

  constructor(private fruitService: FruitService) { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.fruit = this.fruitService.getFruit();
  }
}
