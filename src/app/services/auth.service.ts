import {Injectable, EventEmitter, OnInit} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx"

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Commons} from "../components/commons/commons";
import {LoggingService} from "./logging.service";
import {TokenUtil} from "../components/commons/utils/tokenUtil";
/**
 * Created by scv9 on 18.02.2017.
 */

@Injectable()
export class AuthService{

  private registerURL = Commons.baseURL + "ToDo";
  private formBasedLoginURL = Commons.baseURL + "auth";
  private jwtTokenAuthUrl = Commons.baseURL + "auth/jwt";
  private logoutURL = Commons.baseURL + "login?logout";
  auth$:EventEmitter<any>;

  constructor(private loggingService:LoggingService, private http:Http, public tokenUtil:TokenUtil){
    this.loggingService["info"](["AuthService Constructed"]);
    this.auth$ = new EventEmitter();
    this.tokenUtil.token$.subscribe(token=>{
      this.authenticateByToken$(token).subscribe(response => this.auth$.emit(response.statusText));
    });

  }

  authenticate$(credentials: any){
    console.log(`Try Backed Authentication ${JSON.stringify(credentials)} ${this.formBasedLoginURL}`);
    return this.http.post(this.formBasedLoginURL, credentials)// ...and calling .json() on the response to return data
      .map((response:Response) => {
        return response.json();
      })
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  authenticateByToken$(token:string){
    this.loggingService["info"](["Try authenticateByToken: ", token]);

    return this.http.post(this.jwtTokenAuthUrl, token)// ...and calling .json() on the response to return data
      .map((response:Response) => {
        this.loggingService["info"](["Token Authentication SUCCESS"]);
        return response;
      })
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  logout(){
    this.tokenUtil.removeToken();
    //console.log(`Logout user ${JSON.stringify(this.user)} ${this.logoutURL}`);
    //this.user.setAuthenticated(false);
  }

  register(user:any){
    console.log(`Try Backed Authentication ${JSON.stringify(user)} ${this.registerURL}`);
  }

}
