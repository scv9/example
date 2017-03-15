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
import {JwtHelper, AuthConfig, AuthHttp} from "angular2-jwt";
import {TokenUtil} from "./components/commons/utils/tokenUtil";
import { ListAdapterComponent } from './components/list-adapter/list-adapter.component';
import {SharedService} from "./services/shared.service";
import {LoggingService} from "./services/logging.service";
import {UserService} from "./services/user.service";
import {RequestOptions, Http} from "@angular/http";

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  console.warn("authHttpServiceFactory created");
  return new AuthHttp(new AuthConfig(
    {
      noTokenScheme: true,
      headerName: 'Authorization',
      tokenName: 'token',
      tokenGetter: (() => localStorage.getItem('token')),
      globalHeaders: [{'Content-Type': 'application/json'}],
    }
  ), http, options);
}

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
    SharedService,
    UserService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
