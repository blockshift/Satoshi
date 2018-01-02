import { NgModule } from '@angular/core';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule }  from '@angular/common';
import {  FormsModule,ReactiveFormsModule} from '@angular/forms'; 



// Forms Component

import { FormsComponent } from './forms.component';
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

import { ClipboardModule } from 'ngx-clipboard';
import {
 MatAutocompleteModule,
 MatButtonModule,
 MatButtonToggleModule,
 MatCardModule,
 MatCheckboxModule,
 MatChipsModule,
 MatDatepickerModule,
 MatDialogModule,
 MatExpansionModule,
 MatGridListModule,
 MatIconModule,
 MatInputModule,
 MatListModule,
 MatMenuModule,
 MatNativeDateModule,
 MatPaginatorModule,
 MatProgressBarModule,
 MatProgressSpinnerModule,
 MatRadioModule,
 MatRippleModule,
 MatSelectModule,
 MatSidenavModule,
 MatSliderModule,
 MatSlideToggleModule,
 MatSnackBarModule,
 MatSortModule,
 MatTableModule,
 MatTabsModule,
 MatToolbarModule,
 MatTooltipModule,
 MatStepperModule,
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
    ClipboardModule,
    MatAutocompleteModule,
 MatButtonModule,
 MatButtonToggleModule,
 MatCardModule,
 MatCheckboxModule,
 MatChipsModule,
 MatDatepickerModule,
 MatDialogModule,
 MatExpansionModule,
 MatGridListModule,
 MatIconModule,
 MatInputModule,
 MatListModule,
 MatMenuModule,
 MatNativeDateModule,
 MatPaginatorModule,
 MatProgressBarModule,
 MatProgressSpinnerModule,
 MatRadioModule,
 MatRippleModule,
 MatSelectModule,
 MatSidenavModule,
 MatSliderModule,
 MatSlideToggleModule,
 MatSnackBarModule,
 MatSortModule,
 MatTableModule,
 MatTabsModule,
 MatToolbarModule,
 MatTooltipModule,
 MatStepperModule,

  ],
  declarations: [
    FormsComponent,
    BlockchainsearchComponent,
    TablesComponent,
    TransactionComponent,
    EnrollmentComponent,
    //LoginComponent
    
  ]
})
export class ComponentsModule { }
