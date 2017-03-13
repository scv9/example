import {Injectable} from '@angular/core';
import {User} from "../model/user.model";
import {AuthService} from "./auth.service";

@Injectable()
export class UserService {

  public isLoggedIn : boolean = false;

  user:User;

  constructor(public authService:AuthService){
    console.log(`Constructing UserService`);
    this.user = new User();
    this.authService.auth$.subscribe(value=>this.setUserDetails(value));
  }

  public isAuthenticated():boolean{
    return this.isLoggedIn;
  }

  setUserDetails(response:User){
    console.log(`Setting UserDetails`);
    this.user.username = response.username;
    this.user.authorities = response.authorities;
    this.isLoggedIn = true;
    console.log(`UserDetails Set ${this.user.username}`);
  }

  logout():void{

    console.log(`Processing logout`);
    this.setUserDetails(new User);
    this.isLoggedIn = false;
    this.authService.logout();
  }


}
