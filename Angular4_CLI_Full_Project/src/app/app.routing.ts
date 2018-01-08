import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';
import { LoginComponent } from 'app/views/components/login.component';
import { AuthguardGuard } from 'app/authguard.guard';

export const routes: Routes = [
  {
   path : 'login',
   component : LoginComponent,
  
 },
  // {
    
  //   path: '',
  //  // canActivate : [AuthguardGuard], 
  //  redirectTo: 'dashboard',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    //guarding the components 
    canActivate : [AuthguardGuard], 
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        canActivate : [AuthguardGuard],
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'components',
        canActivate : [AuthguardGuard],
        loadChildren: './views/components/components.module#ComponentsModule'
      }
      
    ]
  },
  // {
  //   path: 'pages',
  //   component: SimpleLayoutComponent,
  //   data: {
  //     title: 'Pages'
  //   },
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: './views/pages/pages.module#PagesModule',
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
