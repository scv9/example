import { Component } from '@angular/core';
import {SharedService} from "../../../services/shared.service";

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})
export class HeaderComponent {

  constructor(private sharedService:SharedService) {console.log(`Constructing HeaderComponent`); }

}
