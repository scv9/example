import {Component, ViewEncapsulation} from '@angular/core';
import {AuthService} from "./auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated

})
export class AppComponent {
  constructor(){}

  public static baseURL : string = "http://localhost:8080/";

  title = 'app works!';

}
