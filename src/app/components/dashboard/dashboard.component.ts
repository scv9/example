import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent {

  constructor(private userService:UserService) {
    console.log("Constructing DashboardComponent");
    console.log(this.userService.user);
  }



}
