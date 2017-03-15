import {Component, ViewEncapsulation} from '@angular/core';
import {AuthService} from "./service/auth.service";
import {SharedService} from "./service/shared.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated

})
export class AppComponent {

  constructor(private authService:AuthService, private sharedService:SharedService){
    console.log("Constructing AppComponent");
  }

  title = 'app works!';

}
