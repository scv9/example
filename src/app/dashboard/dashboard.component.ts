import { Component, OnInit } from '@angular/core';
import {UserService} from "../auth/user.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private userService:UserService) {}



}
