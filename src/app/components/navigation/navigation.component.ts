import {Component} from '@angular/core';
import {UserService} from "../../service/user.service";
import {SharedService} from "../../service/shared.service";


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

  constructor(public sharedService:UserService) {
    console.log("Constructing NavigationComponent");
  }

}
