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
import { MainContainerDashboardComponent } from './dashboard/main-container-dashboard/main-container-dashboard.component';
import {MatIconModule} from '@angular/material/icon';
import { CardComponent } from './dashboard/card/card.component';
import { NavbarService } from './navbar-comp/navbar-comp.service';
import { SortnamePipe } from './dashboard/card/sortname.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarCompComponent,
    LoginContainerComponent,
    FooterCompComponent,
    ContactContainerComponent,
    DashboardComponent,
    LoginComponent,
    MainContainerDashboardComponent,
    CardComponent,
    SortnamePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
