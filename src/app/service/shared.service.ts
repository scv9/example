/**
 * Created by scv9 on 14.03.2017.
 */

import {Injectable, EventEmitter} from "@angular/core";
import {User} from "../model/user.model";
import {Organization} from "../model/organization.model";
import {UserService} from "./user.service";



/**
 * Shared service that shares single instance among components.
 */
@Injectable()
export class SharedService{

  user : EventEmitter<User>;
  organization : Organization;

  constructor(private userService:UserService){
    console.log(`Constructing SharedService`);
    this.user = userService.emitter;
  }

}
