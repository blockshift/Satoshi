
import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CookieModule } from 'ngx-cookie';
import { ExampleDialogComponent } from './views/components/example-dialog/example-dialog.component';
import { LoginerrorDialogComponent } from './views/components/loginerror-dialog/loginerror-dialog.component';
import { FullLayoutComponent,SimpleLayoutComponent } from './containers';

const APP_CONTAINERS = [
  FullLayoutComponent,
  SimpleLayoutComponent,
  //LoginComponent
]

const APP_PROVIDERS = [
  AuthService,
  AppService,
  AuthguardGuard
  
];

// Import components
import {

  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV
} from './components';

const APP_COMPONENTS = [
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV
]


import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
} from './directives';

const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
]

import {
 MatCardModule,
 MatDialogModule
} from '@angular/material';


import { AppRoutingModule } from './app.routing';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap';
import { AuthService } from 'app/auth.service';
import { LoginComponent } from 'app/views/components/login.component';
import { AuthguardGuard } from 'app/authguard.guard';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    HttpModule,
    RouterModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatCardModule,
    MatDialogModule,
    NgbModule.forRoot(),
    HttpClientModule,
    CookieModule.forRoot(),
  

  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES,
    ExampleDialogComponent,
    LoginerrorDialogComponent,
    LandingComponent,

  ],
  providers: [
    APP_PROVIDERS,
    CookieModule
  ],
  bootstrap: [ AppComponent ],
  entryComponents: [ExampleDialogComponent,LoginerrorDialogComponent]
})
export class AppModule { 
constructor(public appState: AppService , public auth :  AuthService ) {
  }
}
