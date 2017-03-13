import {Component} from '@angular/core';
import {UserService} from "../../service/user.service";


@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.css']
})
export class NavigationComponent {


  constructor(public userService:UserService) {
    console.log("Constructing NavigationComponent");
  }

}
