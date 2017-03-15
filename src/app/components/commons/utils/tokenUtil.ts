import {Injectable, EventEmitter} from "@angular/core";
import {JwtHelper} from "angular2-jwt";
/**
 * Created by scv9 on 02.03.2017.
 */

@Injectable()
export class TokenUtil {


  token: string = localStorage.getItem('token');

  token$: EventEmitter<string>;

  /**
   * Constructing TokenUtil
   * Need for the reason if User reloads the page.
   * If when reload the page, token exists in Local Storage, then Emit event with that token;
   *
   * Set token and emit event ;
   *
   * @param jwtHelper
   */
  constructor(public jwtHelper: JwtHelper) {
    console.log("Constructing TokenUtil");
    this.token$ = new EventEmitter();
    this.setToken(this.token);
  }

  /**
   * Set token to local storage 'token' field if token is not empty;
   * Emit token event with it value;
   *
   * @param token
   *
   * @output EventEmitter<string>;
   */
  setToken(token: string) {
    console.log("Setting token...");
    if (token){
      localStorage.setItem('token', token);
      this.token$.emit(token);
      console.log(`Token set ${token}`);
    }else{
      console.log("Token is not set");
    }

  }

  /**
   *
   * @param tokenName
   */
  removeToken(): void {
    console.log(`Removing token`);
    localStorage.removeItem('token');
  }


  isTokenProvided(): boolean {
    console.log('Checking if Token Provided');
    return !!localStorage.getItem('token');
  }

}
