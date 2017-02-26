import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavigationComponent} from "./navigation.component";
import {MaterialModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [NavigationComponent],
  exports: [NavigationComponent]
})
export class NavigationModule {
}
