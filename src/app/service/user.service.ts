import {Injectable, EventEmitter, Injector} from '@angular/core';
import {User} from "../model/user.model";
import {AuthService} from "./auth.service";
import {Commons} from "../components/commons/commons";
import {AuthHttp} from "angular2-jwt";
import {Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class UserService {

  http:AuthHttp;
  private userDetailsURL = Commons.baseURL + "user";

  user:User;

  emitter : EventEmitter<User> = new EventEmitter();

  constructor(private authService:AuthService, private injector:Injector){
    console.log(`Constructing UserService`);
    this.user = new User();
    this.authService.auth$.subscribe(()=>{
      this.http = this.injector.get(AuthHttp);
      this.retrieveUserDetails$().subscribe(response => {
        this.setUserDetails(response);
      });

    });
  }

  retrieveUserDetails$(){
    return this.http.get(this.userDetailsURL)// ...and calling .json() on the response to return data
      .map((response:Response) => {
        console.log(`getUserDetails Success`);
        return response.json();
      })
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  setUserDetails(response:User){
    console.log(`Setting UserDetails`);
    this.user = response;
    this.user.loggedIn = true;
    /*this.user.username = response.username;
    this.user.authorities = response.authorities;
    console.log(`UserDetails Set ${this.user.username}`);*/
    this.emitter.emit(this.user);
  }

  logout():void{

    console.log(`Processing logout`);
    this.setUserDetails(new User);
    this.user.logout();
    this.authService.logout();
  }


}
