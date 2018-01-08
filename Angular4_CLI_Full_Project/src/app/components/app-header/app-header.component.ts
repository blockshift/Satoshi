import { AuthService } from 'app/auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent { 

constructor (private router : Router , private auth : AuthService ){}

logout(){
  console.log("successfully logout");
   this.auth.setUserLoggedOut(); 
      this.router.navigate(['login']);
}

}
