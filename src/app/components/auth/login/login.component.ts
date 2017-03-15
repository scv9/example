import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Observable} from "rxjs";
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import {LoggingService} from "../../../services/logging.service";
import {TokenUtil} from "../../commons/utils/tokenUtil";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit{


  authenticate$:Observable<any>;
  authenticateByToken$:Observable<any>;

  usernameCtrl: FormControl;
  passwordCtrl: FormControl;
  userForm: FormGroup;
  err: string;

  constructor(private loggingService:LoggingService, private authService:AuthService, fb: FormBuilder, private tokenUtil:TokenUtil) {
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
    this.authenticate$ = this.authService.authenticate$(this.userForm.value);
    this.authenticate$.subscribe(
      success => {
        this.loggingService["info"](["Credentials Authentication SUCCESS", this.userForm.value]);
        this.tokenUtil.setToken(success.token);
      },
      err => {
        this.err = err;
        // Log errors if any
        this.loggingService["error"](["LoginComponent Error:", err]);
      });
  }

}
