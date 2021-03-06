import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { CountriesComponent } from './countries/countries.component';

import { ChartjsComponent } from './chartjs/chartjs.component';
import { HeaderComponent } from './pages/header/header.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CountriesComponent,
    ChartjsComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
