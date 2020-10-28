import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) {}

  ngOnInit(): void {
  }

  /**
   * Redirect to signin or signup
   */
  switchForm() {
    switch (this.router.url) {
      case '/login/signin':
        this.router.navigateByUrl('login/signup');
        break;
    case '/login/signup':
      this.router.navigateByUrl('login/signin');
      break;
    
      default:
        break;
    }
  }
}
