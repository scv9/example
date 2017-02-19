import {Component, ViewEncapsulation} from '@angular/core';
import {AuthService} from "./auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated

})
export class AppComponent {
  constructor(private authService : AuthService){}

  list(){
    return this.authService.list();
  }
  title = 'app works!';

}
