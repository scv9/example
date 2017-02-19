import { Component, OnInit } from '@angular/core';
import {RegistrationUser} from "./registration.model";



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user = new RegistrationUser();
  register() {
    console.log(this.user);
  }
}

