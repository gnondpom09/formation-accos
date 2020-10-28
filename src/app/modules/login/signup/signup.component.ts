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

import { User } from 'src/app/models/user.model';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  // Properties
  registerForm: FormGroup;
  emailCtrl: FormControl;
  usernameCtrl: FormControl;
  firstnameCtrl: FormControl;
  lastnameCtrl: FormControl;
  passordForm: FormGroup;
  passwordCtrl: FormControl;
  repeatPasswordCtrl: FormControl;
  newUser: User;

  constructor(private fb: FormBuilder, 
    private authService: AuthService, 
    private userService: UserService, 
    private storageService: StorageService) { }

  ngOnInit(): void {
    // Init fields
    // TOTO: Set validator email allready exists
    this.emailCtrl = this.fb.control('',  [Validators.required,  Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);
    this.usernameCtrl = this.fb.control('', Validators.required);
    this.firstnameCtrl = this.fb.control(''),
    this.lastnameCtrl = this.fb.control(''),
    this.passwordCtrl = this.fb.control('', Validators.required),
    this.repeatPasswordCtrl = this.fb.control('', Validators.required)

    // Init register form
    this.registerForm = this.fb.group({
      email: this.emailCtrl,
      username: this.usernameCtrl,
      firstname: this.firstnameCtrl,
      lastname: this.lastnameCtrl,
      passwordForm: this.fb.group({
        password: this.passwordCtrl,
        repeatPassword: this.repeatPasswordCtrl,
      })
    });
  }

  register() {
    // Get informations of user
    const id = this.authService.generateUid(10);
    this.newUser = {
      id: id,
      username: this.usernameCtrl.value,
      email: this.emailCtrl.value,
      password: this.passwordCtrl.value,
      firstname: this.firstnameCtrl.value,
      lastname: this.lastnameCtrl.value,
      inscriptionDate: new Date()
    }

    // Save new user in database
    this.userService.createNewUser(this.newUser).then(() => {
      // Save user in storage
      this.storageService.setObject('user', this.newUser)
    })
  }

}
