import { Component } from '@angular/core';
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})
export class HeaderComponent {

  constructor(private userService:UserService) {console.log(`Constructing HeaderComponent`); }

}
