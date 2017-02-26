import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {NavigationModule} from "../../navigation/navigation.module";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
