import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthguardGuard } from 'app/authguard.guard';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  
constructor (private auth : AuthguardGuard ) {}
 
 
  
  
  ngOnInit(): void {
   
  }
}
