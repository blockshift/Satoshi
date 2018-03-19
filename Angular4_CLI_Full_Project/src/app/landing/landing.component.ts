import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }


// login() {
//   this.router.navigateByUrl('components/login');
// }

}
