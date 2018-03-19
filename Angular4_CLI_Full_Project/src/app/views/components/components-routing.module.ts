import { LoginComponent } from './login.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



//import { FormsComponent } from './forms.component';

import { TablesComponent } from './tables.component';

import { BlockchainsearchComponent } from './blockchainsearch.component';

import { EnrollmentComponent } from './enrollment.component';

import { TransactionComponent } from './transaction.component';
import { RegisterComponent } from './register.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Components'
    },
    children: [
      
      
      {
        path: 'tables',
        component: TablesComponent,
        data: {
          title: 'Degree Issuance'
        }
      },
       {
        path: 'blockchainsearch',
        component: BlockchainsearchComponent,
        data: {
          title: 'Blockchain Search'
        }
       }
        ,
        
        {
        path: 'transaction',
        component: TransactionComponent,
        data: {
          title: 'Transaction Search'
        }
},
       {
        path: 'enrollment',
        component: EnrollmentComponent,
        data: {
          title: 'Enrollment Search'
        }
},
{
path : 'login',
component : LoginComponent,
data : {
  title : 'Login'
}
},

{
  path : 'register',
  component : RegisterComponent,
  data : {
    title : 'Register'
  }
}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}
