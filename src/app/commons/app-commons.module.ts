import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {NavigationModule} from "../navigation/navigation.module";
import {MaterialModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    NavigationModule,
    MaterialModule,
  ],
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent]
})
export class AppCommonsModule { }
