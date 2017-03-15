/**
 * Created by scv9 on 14.03.2017.
 */

import {Injectable, EventEmitter} from "@angular/core";
import {User} from "../model/user.model";
import {Organization} from "../model/organization.model";
import {UserService} from "./user.service";
import {LoggingService} from "./logging.service";



/**
 * Shared services that shares single instance among components.
 */
@Injectable()
export class SharedService{

  user : EventEmitter<User>;
  organization : Organization;

  constructor(private loggingService:LoggingService, private userService:UserService){
    this.loggingService["info"](["SharedService Constructed"]);
    this.user = userService.emitter;
  }

}
