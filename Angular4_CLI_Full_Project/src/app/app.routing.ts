import { LandingComponent } from './landing/landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent} from './containers';
import { LoginComponent } from 'app/views/components/login.component';
import { AuthguardGuard } from 'app/authguard.guard';
export const routes: Routes = [
  {
   path : 'landing',
   component : LandingComponent,
  
 },
 {
path : '',
redirectTo : '/landing',
pathMatch : 'full'
 },
    {
    path: '',
    //guarding the components 
    //canActivate : [AuthguardGuard], 
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      
      {
        path: 'components',
        //canActivate : [AuthguardGuard],
        loadChildren: './views/components/components.module#ComponentsModule'
      }
      
    ]
  },
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
