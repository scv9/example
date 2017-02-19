import {ApiService} from "../api.service";
import {Injectable} from "@angular/core";
/**
 * Created by scv9 on 18.02.2017.
 */

@Injectable()
export class AuthService{

  constructor(private apiService: ApiService){}

  list(){
    return this.apiService.get("/auth")
  }
}
