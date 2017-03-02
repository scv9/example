import {Injectable} from '@angular/core';
import {User} from "./user.model";
import {AuthHttp} from "angular2-jwt";
import {Observable} from "rxjs";
import {Response} from "@angular/http";
import {Common} from "../commons/common-url";

@Injectable()
export class UserService {

  private userDetailsURL = Common.baseURL + "user";

  user:User = new User();

  constructor(private http:AuthHttp){
    console.log('User Service');
    this.getUserDetails().subscribe(response=> console.log(response));

  }

  getUserDetails(){
    console.log(`Getting Account Details...`);
    return this.http.get(this.userDetailsURL)
      .map((res:Response) => {
        return res.json();

      })
      //...errors if any
      .catch((error:any) => Observable.throw(error || 'Server error'));

  }


}
