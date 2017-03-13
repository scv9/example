import {Injectable, EventEmitter} from "@angular/core";
import {JwtHelper} from "angular2-jwt";
/**
 * Created by scv9 on 02.03.2017.
 */

@Injectable()
export class TokenUtil {

  token$:EventEmitter<string>;

  constructor(public jwtHelper:JwtHelper){
    console.log("Constructing TokenUtil");
    this.token$ = new EventEmitter();
  }

  setToken(token:string){
    if(token){
      this.token$.emit(token);
      localStorage.setItem('token', token);
      console.log(`Token set ${token}`);
    }
  }

  removeTokenByName(name:string):void{
    console.log(`Removing token By Name: ${name}`);
    localStorage.removeItem(name);
  }


  isTokenProvided(): boolean {
    console.log('Checking if Token Provided');
    return !!localStorage.getItem('token');
  }

}
