/**
 * Title: login.guard.ts
 * Author: Nathaniel Liebhart
 * Date: January 20, 2020
 * Description: login route guard file
 */
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    let loggedIn = Math.random() < 0.5;

    if (!loggedIn) {
      alert("You're not logged in and will be redirected to Login Page");
      this.router.navigate(["/login"]);
    }

    return loggedIn;
  }
}
