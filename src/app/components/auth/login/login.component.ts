import {Component, Output, EventEmitter} from '@angular/core';
import {AuthService} from "../../../service/auth.service";
import {Observable} from "rxjs";
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent{

  usernameCtrl: FormControl;
  passwordCtrl: FormControl;
  userForm: FormGroup;
  err: string;

  constructor(private authService:AuthService, fb: FormBuilder, private router:Router) {
    console.log(`Constructing LoginComponent`);

    this.usernameCtrl = fb.control('', [Validators.required, Validators.minLength(3)]);
    this.passwordCtrl = fb.control('', [Validators.required, Validators.minLength(3)]);
    this.userForm = fb.group({
      username: this.usernameCtrl,
      password: this.passwordCtrl
    });
  }

  reset() {
    this.usernameCtrl.setValue('');
    this.passwordCtrl.setValue('');
  }

  login() {
    console.log(`Try to login with credentials ${JSON.stringify(this.userForm.value)}`);
    let authenticate$:Observable<any>;

    authenticate$ = this.authService.authenticate$(this.userForm.value);

    authenticate$.subscribe(
      success => {
        this.router.navigate(["dashboard"]);
        console.log(`Login SUCCESS`);
      },
      err => {
        this.err = err;
        // Log errors if any
        console.log(err);
      });
  }

}
