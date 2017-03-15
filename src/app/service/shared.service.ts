/**
 * Created by scv9 on 14.03.2017.
 */

import {Injectable, OnInit} from "@angular/core";
import {User} from "../model/user.model";
import {Organization} from "../model/organization.model";
import {UserService} from "./user.service";



/**
 * Shared service that shares single instance among components.
 */
@Injectable()
export class SharedService implements OnInit{

  user : User;
  organization : Organization;

  constructor(private userService:UserService){

  }

  ngOnInit(): void {
    this.user = {
      id : 1,
      token: '',
      username : "Admin",
      authorities: ["ROLE_ADMIN", "ROLE_ USER"]
    };


  }
}
