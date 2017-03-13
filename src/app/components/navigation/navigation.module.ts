import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavigationComponent} from "./navigation.component";
import {MaterialModule} from "@angular/material";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [NavigationComponent],
  exports: [NavigationComponent]
})
export class NavigationModule {
}
