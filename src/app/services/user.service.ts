import {Injectable, EventEmitter, Injector} from '@angular/core';
import {User} from "../model/user.model";
import {AuthService} from "./auth.service";
import {Commons} from "../components/commons/commons";
import {AuthHttp} from "angular2-jwt";
import {Response} from "@angular/http";
import {Observable} from "rxjs";
import {LoggingService} from "./logging.service";

@Injectable()
export class UserService {

  private userDetailsURL = Commons.baseURL + "user";


  constructor(private loggingService:LoggingService, private http:AuthHttp){

    this.loggingService["info"](["UserService Constructed"]);

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
}
