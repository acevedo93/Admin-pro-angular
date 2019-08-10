import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { BreadcrumsComponent } from './shared/breadcrums/breadcrums.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafics1Component } from './pages/grafics1/grafics1.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NoPageFoundComponent,
    DashboardComponent,
    HeaderComponent,
    BreadcrumsComponent,
    SidebarComponent,
    ProgressComponent,
    Grafics1Component,
    PagesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
