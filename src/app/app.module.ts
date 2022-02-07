import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarCompComponent } from './navbar-comp/navbar-comp.component';
import { LoginContainerComponent } from './login-container/login-container.component';
import { FooterCompComponent } from './footer-comp/footer-comp.component';
import { ContactContainerComponent } from './contact-container/contact-container.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NavbarCompDashboardComponent } from './dashboard/navbar-comp-dashboard/navbar-comp-dashboard.component';
import { MainContainerDashboardComponent } from './dashboard/main-container-dashboard/main-container-dashboard.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    NavbarCompComponent,
    LoginContainerComponent,
    FooterCompComponent,
    ContactContainerComponent,
    DashboardComponent,
    LoginComponent,
    NavbarCompDashboardComponent,
    MainContainerDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
