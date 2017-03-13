import {Routes} from "@angular/router";
import {LoginComponent} from "../components/auth/login/login.component";
import {RegistrationComponent} from "../components/auth/registration/registration.component";
import {HomePageComponent} from "../components/home-page/home-page.component";
import {AuthGuard} from "../Guards/auth.guard";
import {DashboardComponent} from "../components/dashboard/dashboard.component";
/**
 * Created by scv9 on 18.02.2017.
 */

export const ROUTES: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]}
]
