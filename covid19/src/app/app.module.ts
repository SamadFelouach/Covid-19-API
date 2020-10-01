import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { CountriesComponent } from './countries/countries.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
