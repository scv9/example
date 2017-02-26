import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {User} from "../user.model";
import {Observable} from "rxjs";
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";

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

  constructor(private authService:AuthService, fb: FormBuilder) {
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
    console.log(`Try to login with credentials ${this.userForm.value}`);
    let authOperation:Observable<User>;
    authOperation = this.authService.login(this.userForm.value);
    let authSubscription = authOperation.subscribe(
      success => {
        console.log(`Login SUCCESS`);
        /*/!*!// Emit list event
        EmitterService.get(this.listId).emit(comments);
        // Empty model
        this.model = new Comment(new Date(), '', '');
        // Switch editing status
        if(this.editing) this.editing = !this.editing;*/
      },
      err => {
        // Log errors if any
        console.log(err);
      });
    //authSubscription.unsubscribe();
  }


}
