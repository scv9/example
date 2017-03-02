import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {Observable} from "rxjs";
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import EventEmitter = NodeJS.EventEmitter;
import {Router} from "@angular/router";
import {UserService} from "../user.service";
import construct = Reflect.construct;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  ngOnInit(): void {
    /*const input = document.getElementsByName('username');
    Observable.fromEvent(input, 'keyup')
      .subscribe(() => console.log('keyup!'));
    input.trigger('keyup'); // logs "keyup!"
    input.trigger('keyup'); // logs "keyup!"*/
  }
  usernameCtrl: FormControl;
  passwordCtrl: FormControl;
  userForm: FormGroup;
  err: string;
  //@Output() valueEmitted = new EventEmitter<string>();

  constructor(private authService:AuthService, fb: FormBuilder, private router:Router) {
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


    authenticate$ = this.authService.login(this.userForm.value);
    //login$ = authenticate$.do((res)=> localStorage.setItem('token', res.token)).flatMap(()=>);

    authenticate$.subscribe(
      response => {
        console.log(`Login SUCCESS`);
        console.log(`${JSON.stringify(response)}`);
        this.setStorageToken(response.token);
        this.router.navigate(['dashboard']);
      },
      err => {
        this.err = err;
        // Log errors if any
        console.log(err);
      });

    //authSubscription.unsubscribe();
  }

  setStorageToken(token:string){
    console.log(`Setting Token To Local Storage....`);
    localStorage.setItem('token', token);
    console.log(`Setting Token To Local Storage: OK`);
  }

}
