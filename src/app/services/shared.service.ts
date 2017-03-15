/**
 * Created by scv9 on 14.03.2017.
 */

import {Injectable, OnInit} from "@angular/core";
import {User} from "../model/user.model";
import {Organization} from "../model/organization.model";
import {UserService} from "./user.service";
import {LoggingService} from "./logging.service";
import {OrganizationService} from "./organization.service";


/**
 * Shared services that shares single instance among components.
 */
@Injectable()
export class SharedService implements OnInit{

  user: User;
  organization: Organization;

  constructor(private loggingService: LoggingService, private userService: UserService, public organizationService: OrganizationService) {
    this.loggingService["info"](["SharedService Constructed"]);
    this.user = new User();
  }


  ngOnInit(): void {
    this.loggingService["info"](["SharedService Initialized"]);
  }

  retrieveUser() : void {
    this.userService.retrieveUserDetails$().subscribe(user => {
      this.loggingService["info"](["User Retrieved", user]);
      this.user = user;
    });
  }

}
