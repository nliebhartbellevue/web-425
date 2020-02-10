/**
 * Title: child.component.ts
 * Author: Nathaniel Liebhart
 * Date: February 10, 2020
 * Description: On Change Events
 */
import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div class="child">
      <h2>Child</h2>
      <div>Greeting: <strong>{{ greeting }}</strong></div>
      <br>
      <div>Username: <strong>{{ user.name }}</strong></div>
    </div>
  `,
  styles: [`
    .child {
      background-color: gray;
    }
  `]
})
export class ChildComponent implements OnChanges {
  @Input() greeting: string;
  @Input() user: { name: string };

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes, null, 2));
  }

}
