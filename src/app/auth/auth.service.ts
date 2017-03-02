import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx"

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Common} from "../commons/common-url";
/**
 * Created by scv9 on 18.02.2017.
 */

@Injectable()
export class AuthService{

  constructor(private http:Http){
  }

  private loginURL = Common.baseURL + "auth";
  private logoutURL = Common.baseURL + "ToDo";
  private registerURL = Common.baseURL + "ToDo";


  login(credentials: any){
    console.log(`Try Backed Authentication ${JSON.stringify(credentials)} ${this.loginURL}`);
    return this.http.post(this.loginURL, credentials)// ...and calling .json() on the response to return data

      .map((res:Response) => {
      console.log(res);
        localStorage.setItem('token', res.json().token);
        return res.json();

      })
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  logout(){
    //console.log(`Logout user ${JSON.stringify(this.user)} ${this.logoutURL}`);
    //this.user.setAuthenticated(false);
  }

  register(user:any){
    console.log(`Try Backed Authentication ${JSON.stringify(user)} ${this.registerURL}`);
  }

}
