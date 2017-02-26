import { Component } from '@angular/core';
import {User} from "../user.model";



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(){
  }


  onFocusOut(event: any){
    console.log(`${JSON.stringify(event)}`);
    console.log(`${event.target}`);
    console.log(`${JSON.stringify(event.target.value)}`);
  }

  register() {
    console.log("123");
  }
}

