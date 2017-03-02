/**
 * Created by scv9 on 19.02.2017.
 */
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from "rxjs";
import {Injectable, OnInit} from "@angular/core";
import {UserService} from "./user.service";
import {JwtHelper} from "angular2-jwt";

@Injectable()
export class AuthGuard implements CanActivate{

  token : string;

  constructor (private router:Router, private jwtHelper:JwtHelper){
  }
//private user:UserService,

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    console.log(route.toString());
    this.token = localStorage.getItem('token');
    if(this.token){
      console.log('Token Exist');

      if(!this.jwtHelper.isTokenExpired(this.token)){
        console.log("Token Not Expired");

        return true;

      }else {

        console.log("Token Expired");

        this.router.navigate(['login'])

        return false;
      }
    }else{
      console.log("Token Not Exist");
      this.router.navigate(['login']);
    }


  }


}
