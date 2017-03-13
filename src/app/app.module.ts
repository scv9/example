import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AuthService} from "./service/auth.service";
import {ROUTES} from "./app.routes";
import {RouterModule} from "@angular/router";
import { HomePageComponent } from './components/home-page/home-page.component';
import {AuthGuard} from "./components/auth/auth.guard";
import {AuthModule} from "./components/auth/auth.module";
import {AppCommonsModule} from "./components/commons/app-commons.module";
import {NavigationModule} from "./components/navigation/navigation.module";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {JwtHelper} from "angular2-jwt";
import {TokenUtil} from "./components/commons/tokenUtil";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    NavigationModule,
    AppCommonsModule,
    AuthModule

  ],
  providers: [
    AuthGuard,
    JwtHelper,
    TokenUtil
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
