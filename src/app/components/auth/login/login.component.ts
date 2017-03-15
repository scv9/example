import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Observable} from "rxjs";
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoggingService} from "../../../services/logging.service";
import {TokenUtil} from "../../commons/utils/tokenUtil";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit{

  usernameCtrl: FormControl;
  passwordCtrl: FormControl;
  userForm: FormGroup;
  err: string;

  constructor(private loggingService:LoggingService, private authService:AuthService, fb: FormBuilder, private router:Router, private tokenUtil:TokenUtil) {

    this.loggingService["info"](["LoginComponent Constructed"]);

    this.usernameCtrl = fb.control('', [Validators.required, Validators.minLength(3)]);
    this.passwordCtrl = fb.control('', [Validators.required, Validators.minLength(3)]);
    this.userForm = fb.group({
      username: this.usernameCtrl,
      password: this.passwordCtrl
    });
  }

  ngOnInit(): void {
    this.loggingService["info"](["LoginComponent Initialized"]);
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
        console.log(`authenticate$ SUCCESS`);
        this.tokenUtil.setToken(success.token);
        this.router.navigate(["dashboard"]);
      },
      err => {
        this.err = err;
        // Log errors if any
        console.log(err);
      });
  }

}
