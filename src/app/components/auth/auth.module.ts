import {NgModule} from '@angular/core';
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RequestOptions, Http} from "@angular/http";
import {AuthConfig, AuthHttp} from "angular2-jwt";
import {AuthService} from "../../services/auth.service";
import {UserService} from "../../services/user.service";

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, RegistrationComponent],
  providers: [AuthService]
})
export class AuthModule {
}
