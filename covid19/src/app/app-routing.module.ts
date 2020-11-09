import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChartjsComponent} from './chartjs/chartjs.component';
import {CountriesComponent} from './countries/countries.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TestComponent} from './test/test.component';

const routes: Routes = [
 // {path : "**" , component :ChartjsComponent}
  {path :'' , component: DashboardComponent},
  {path : 'countries' , component :CountriesComponent},
  {path :'dashboard' , component: DashboardComponent},
  {path:'chart' , component: ChartjsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
