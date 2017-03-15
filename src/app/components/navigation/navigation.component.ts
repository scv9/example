import {Component} from '@angular/core';
import {UserService} from "../../services/user.service";
import {SharedService} from "../../services/shared.service";


@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.css']
})
export class NavigationComponent {

  /*foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];*/

  constructor(public sharedService:SharedService) {
    console.log("Constructing NavigationComponent");
  }

}
