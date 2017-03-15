import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {SharedService} from "./services/shared.service";
import {LoggingService} from "./services/logging.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated

})
export class AppComponent implements OnInit{

  constructor(private loggingService:LoggingService, private authService:AuthService, private sharedService:SharedService){
    this.loggingService["info"](["AppComponent Constructed"]);
  }

  ngOnInit(): void {
    this.loggingService["info"](["AppComponent Initialized"]);
    this.authService.tokenUtil.setToken(localStorage.getItem('token'));
    this.authService.auth$.subscribe(()=>{
      this.loggingService["info"](["Auth COMPLETED"]);
      this.sharedService.retrieveUser();
    });
  }
}
