import { Component, OnInit } from '@angular/core';

import { AuthService } from "../../../services/auth/auth.service";
import { UserService } from "../../../services/user/user.service";
import { StorageService } from "../../../services/storage/storage.service";

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  // Properties
  loginForm: FormGroup;
  emailCtrl: FormControl;
  passwordCtrl: FormControl;

  constructor(private fb: FormBuilder, 
    private authService: AuthService, 
    private userService: UserService, 
    private storageService: StorageService) { }

  ngOnInit(): void {
    // Init fields
    this.emailCtrl = this.fb.control('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);
    this.passwordCtrl = this.fb.control('', Validators.required);

    // Init form
    this.loginForm = this.fb.group({
      email: this.emailCtrl,
      password: this.passwordCtrl
    });
  }

  /**
   * Login
   * @param email email
   * @param password password
   */
  login() {
    this.userService.getUserByEmail(this.emailCtrl.value).subscribe(user => {
      // TODO: Check if user exists and Compare passwords
      this.storageService.setObject('user', user);
    })
  }

}
