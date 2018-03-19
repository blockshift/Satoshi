import { RegisterComponent } from './register.component';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule }  from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'; 
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BlockchainsearchComponent } from './blockchainsearch.component';
import { EnrollmentComponent } from './enrollment.component';
import { TransactionComponent } from './transaction.component';
// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';

import { TablesComponent } from './tables.component';
// Components Routing
import { ComponentsRoutingModule } from './components-routing.module';
import {
 MatCardModule,
 
 MatDialogModule,
 
 MatSelectModule,
 MatSidenavModule,
 MatTableModule,
 MatTabsModule,
 
} from '@angular/material';



import { LoginComponent } from './login.component';


@NgModule({
  imports: [
    ComponentsRoutingModule,
    BsDropdownModule.forRoot(),
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,   
    TabsModule,
    CommonModule,
    MatCardModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatTabsModule,
 
  ],
  declarations: [
   
    BlockchainsearchComponent,
    TablesComponent,
    TransactionComponent,
    EnrollmentComponent,
    LoginComponent,
    RegisterComponent

    

    
  ]
})
export class ComponentsModule { }
