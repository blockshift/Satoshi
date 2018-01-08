import { HttpClient } from '@angular/common/http';
import { AuthService } from './../../auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  constructor(private auth : AuthService , private router : Router , private http : HttpClient ) { }
 
  @Input() username : any ;
  @Input() pass : any ;

  password : number ;

onSubmit(form : any) : void {
  console.log("username ", form.username );

console.log("Password" ,form.pass);


 var name = form.username;
var password = form.pass;


};

  login (){

    console.log("naam hai",this.username);
    //local server created
    this.http.get('http://localhost:3000/login/?name=' + this.username)
  
    .subscribe(
      
      (data : any[] ) => {
        
console.log("password ye hai",this.pass);
       if(this.pass==data[0].password){
       console.log("successfully login");
     //throwing the token
       this.auth.setUserLoggedIn(this.username);
   this.router.navigate(['dashboard']); 
  }
       else
       console.log('login fail');
       

      },
      err=> console.log(err)

    );


  }
 
  
  
  }


