import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AuthService} from "./auth/auth.service";
import {ROUTES} from "./app.routes";
import {RouterModule} from "@angular/router";
import { HomePageComponent } from './home-page/home-page.component';
import {AuthGuard} from "./auth/auth.guard";
import {AuthModule} from "./auth/auth.module";
import {MaterialModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {DialogComponent} from "./temp/dialog/dialog.component";
import {AppCommonsModule} from "./commons/app-commons.module";
import {NavigationModule} from "./navigation/navigation.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthHttp, JwtHelper} from "angular2-jwt";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DialogComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    MaterialModule,
    FormsModule,
    AuthModule,
    NavigationModule,
    AppCommonsModule,

  ],
  providers: [
    AuthService,
    AuthGuard,
    JwtHelper
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
