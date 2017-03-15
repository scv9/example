import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ROUTES} from "./Routes/app.routes";
import {RouterModule} from "@angular/router";
import { HomePageComponent } from './components/home-page/home-page.component';
import {AuthGuard} from "./Guards/auth.guard";
import {AuthModule} from "./components/auth/auth.module";
import {AppCommonsModule} from "./components/commons/app-commons.module";
import {NavigationModule} from "./components/navigation/navigation.module";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {JwtHelper} from "angular2-jwt";
import {TokenUtil} from "./components/commons/utils/tokenUtil";
import { ListAdapterComponent } from './components/list-adapter/list-adapter.component';
import {SharedService} from "./services/shared.service";
import {LoggingService} from "./services/logging.service";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DashboardComponent,
    ListAdapterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    NavigationModule,
    AppCommonsModule,
    AuthModule

  ],
  providers: [
    LoggingService,
    AuthGuard,
    JwtHelper,
    TokenUtil,
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
