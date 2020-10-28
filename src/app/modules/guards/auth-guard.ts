import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

import { AuthService } from "../../services/auth/auth.service";

@Injectable({
  providedIn: 'root',
})
export class AuthGard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  /**
   * Guard to check if authenticate
   */
  canActivate(): boolean | UrlTree {
    let value = this.authService.isAuthenticated();
    if (!value) {
      return this.router.parseUrl('/login');
    }
    return value;
  }

}