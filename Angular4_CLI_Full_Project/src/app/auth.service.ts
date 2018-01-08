import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class AuthService {

  private isUserloggedIn ;
  private username ;
  

  constructor(private _cookieService:CookieService) {
    this.isUserloggedIn = false ;
   }
//token creating
setUserLoggedIn (user){
  this._cookieService.put("user", user);
  this.isUserloggedIn = true ;
}  
//token removing
setUserLoggedOut(){
  this.isUserloggedIn = false;
  this._cookieService.remove("user");
}
//checking the user login or not
getUserLoggedIn () {
  console.log(this._cookieService.get("user"));
  return (this._cookieService.get("user")!="" && this._cookieService.get("user")!=undefined);

}




}
