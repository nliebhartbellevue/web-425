/**
 * Title: app.component.ts
 * Author: Nathaniel Liebhart
 * Date: February 10, 2020
 * Description: On Change Events
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'liebhart-onchange-events';

  myGreeting = 'Hello';
  myUser: { name: string } = { name: 'John Doe' };
}
