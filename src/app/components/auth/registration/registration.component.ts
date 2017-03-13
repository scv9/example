import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: 'registration.component.html',
  styleUrls: ['registration.component.css']
})
export class RegistrationComponent {

  // ToDo: Create Registration Component
  constructor(){
    console.log(`Constructing RegistrationComponent`);
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

