import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGard implements CanActivate {
  constructor(private router: Router) {}

  /**
   * Guard to check if authenticate
   */
  canActivate(): boolean | UrlTree {
    let value = this.isAuthenticated();
    if (!value) {
      return this.router.parseUrl('/login');
    }
    return value;
  }

  /**
   * Return state logged user
   */
  isAuthenticated(): boolean {
    if (localStorage.getItem('uid')) {
      return true;
    } else {
      return false;
    }
  }
}