/**
 * Title: app.component.ts
 * Author: Nathaniel Liebhart
 * Date: February 17, 2020
 * Description: Form Validation
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'liebhart-form-validation';
  onSubmit(formData) {
    console.log(formData);
  }
}
