import {Injectable, EventEmitter} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Rx"

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Commons} from "../components/commons/commons";
import {TokenUtil} from "../components/commons/Utils/tokenUtil";
/**
 * Created by scv9 on 18.02.2017.
 */

@Injectable()
export class AuthService{

  private loginURL = Commons.baseURL + "auth";
  private userDetailsURL = Commons.baseURL + "user";

  private orgURL = Commons.baseURL + "user/organizations";

  private logoutURL = Commons.baseURL + "ToDo";
  private registerURL = Commons.baseURL + "ToDo";


  auth$:EventEmitter<any>;

  constructor(private http:Http, private tokenUtil:TokenUtil){
    console.log(`Constructing AuthService`);
    this.auth$ = new EventEmitter();
    this.tokenUtil.token$.subscribe(token=>{
      this.authenticateByToken$(token).subscribe();
      this.getOrgdata(token).subscribe()
    });
    this.tokenUtil.setToken(localStorage.getItem('token'));
  }


  authenticate$(credentials: any){
    console.log(`Try Backed Authentication ${JSON.stringify(credentials)} ${this.loginURL}`);
    return this.http.post(this.loginURL, credentials)// ...and calling .json() on the response to return data
      .map((response:Response) => {
        this.tokenUtil.setToken(response.json().token);
      })
      //...errors if any
      .catch((error:any) => Observable.throw(error || 'Server error'));
  }

  authenticateByToken$(token:string){
    console.log(`Try authenticateByToken: ${token}`);

    let headers = new Headers();
    headers.append('Authorization', `${token}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.userDetailsURL, options)// ...and calling .json() on the response to return data
      .map((response:Response) => {
        console.log(`authenticateByToken Success`);
        this.auth$.emit(response.json());
      })
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getOrgdata(token:string){
    let headers = new Headers();
    headers.append('Authorization', `${token}`);
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.orgURL, options)// ...and calling .json() on the response to return data
      .map((response:Response) => {
        console.log(`ORG DATA`);
        console.log(response.json());
        //this.auth$.emit(response.json());
      })
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  logout(){
    this.tokenUtil.removeTokenByName("token");
    //console.log(`Logout user ${JSON.stringify(this.user)} ${this.logoutURL}`);
    //this.user.setAuthenticated(false);
  }

  register(user:any){
    console.log(`Try Backed Authentication ${JSON.stringify(user)} ${this.registerURL}`);
  }

}
