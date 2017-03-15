import {NgModule} from '@angular/core';
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RequestOptions, Http} from "@angular/http";
import {AuthConfig, AuthHttp} from "angular2-jwt";
import {AuthService} from "../../services/auth.service";
import {UserService} from "../../services/user.service";


export function authHttpServiceFactory(http: Http, options: RequestOptions) {
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
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, RegistrationComponent],
  providers: [AuthService,UserService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ]
})
export class AuthModule {
}
