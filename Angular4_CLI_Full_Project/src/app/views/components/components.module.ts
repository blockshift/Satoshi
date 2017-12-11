import { NgModule } from '@angular/core';

import { CommonModule }  from '@angular/common';
import {  FormsModule,ReactiveFormsModule} from '@angular/forms'; 

// Forms Component
import { FormsComponent } from './forms.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';

import { TablesComponent } from './tables.component';
// Components Routing
import { ComponentsRoutingModule } from './components-routing.module';

@NgModule({
  imports: [
    ComponentsRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,   
    TabsModule
  ],
  declarations: [
    FormsComponent,
    TablesComponent
    
  ]
})
export class ComponentsModule { }
