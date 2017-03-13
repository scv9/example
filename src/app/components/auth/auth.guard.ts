/**
 * Created by scv9 on 19.02.2017.
 */
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from "rxjs";
import {Injectable, Injector} from "@angular/core";
import {UserService} from "../../service/user.service";
import {TokenUtil} from "../commons/tokenUtil";
import {AuthService} from "../../service/auth.service";

@Injectable()
export class AuthGuard implements CanActivate{

  constructor (private router:Router, private tokenUtil:TokenUtil, private userService:UserService){
    console.log(`Constructing AuthGuard`);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    console.log("We are in canActivate");
    console.log(route.toString());
    // if(this.tokenUtil.isTokenProvided()) {
    //   console.log('Token Provided');
    //   if(!this.tokenUtil.jwtHelper.isTokenExpired(this.tokenUtil.token) && !this.userService.isAuthenticated()){
    //     console.log('Token is Not Expired');
    //     console.log('User is NOT Authenticated');
    //
    //     //his.userService = this.injector.get(UserService);
    //     //console.log(this.userService.getUser());
    //     //console.log(userService);
    //     //console.log("This is User Object in Can Activate");
    //     //console.log(this.userService));
    //     // ToDo: if user authorities has access to this route, then true
    //
    //
    //   }
    //   else if (!this.tokenUtil.jwtHelper.isTokenExpired(this.tokenUtil.token) && this.userService.isAuthenticated())
    //   {
    //     console.log('Token is Not Expired');
    //     console.log('User is Authenticated');
    //     return true;
    //   }
    //   else if(this.tokenUtil.jwtHelper.isTokenExpired(this.tokenUtil.token)){
    //     console.log('Token Expired');
    //     this.router.navigate(['login']);
    //     return false;
    //   }
    // }else{
    //   console.log("Token Not Provided");
    //   this.router.navigate(['login']);
    //   return false;
    // }
    return true;
  }



}
