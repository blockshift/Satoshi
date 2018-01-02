import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  private isUserloggedIn ;
  private username ;
  

  constructor() {
    this.isUserloggedIn = false ;
   }

setUserLoggedIn (){
  
  this.isUserloggedIn = true ;
}  

// setUserLoggedOut(){
// this.isUserloggedIn =   ;

// }

getUserLoggedIn () {

  return this.isUserloggedIn;
}




}
