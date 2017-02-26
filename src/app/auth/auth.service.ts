import {Injectable} from "@angular/core";
import {User} from "./user.model";
import {Http, Response, Headers, RequestOptions } from "@angular/http";
import {Observable} from "rxjs/Rx"

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {AppComponent} from "../app.component";
/**
 * Created by scv9 on 18.02.2017.
 */

@Injectable()
export class AuthService{

  constructor(private http:Http){
  }

  private user:User = new User();
  private loginURL = AppComponent.baseURL + "auth";
  private logoutURL = AppComponent.baseURL + "ToDo";
  private registerURL = AppComponent.baseURL + "ToDo";

  login(user: any){
    console.log(`Try Backed Authentication ${JSON.stringify(user)} ${this.loginURL}`);
    return this.http.post(this.loginURL, user)// ...and calling .json() on the response to return data

      .map((res:Response) => {
        let jr = res.json();
        this.authenticate(jr);
        return jr;

      })
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  public isAuthenticated() : boolean {
    return this.user.isAuthenticated;
  }

  private authenticate(jr:any){
    this.user.token = jr.token;
    this.user.isAuthenticated=true;
  }

  logout(){
    console.log(`Logout user ${JSON.stringify(this.user)} ${this.logoutURL}`);
    this.user.isAuthenticated = false;
  }

  register(user:any){
    console.log(`Try Backed Authentication ${JSON.stringify(user)} ${this.registerURL}`);
  }

}
