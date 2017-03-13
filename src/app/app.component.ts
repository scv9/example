import {Component, ViewEncapsulation} from '@angular/core';
import {AuthService} from "./service/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated

})
export class AppComponent {

  constructor(private authService:AuthService){
    console.log("Constructing AppComponent");
  }

  title = 'app works!';

}
