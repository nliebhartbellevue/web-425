/**
 * Title: app.component.ts
 * Author: Nathaniel Liebhart
 * Date: February 17, 2020
 * Description: Template-Driven Forms
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'liebhart-template-forms';
  onSubmit(formData) {
    console.log(formData);
  }
}
