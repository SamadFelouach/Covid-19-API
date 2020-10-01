import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   data: any ="";

  constructor(public http : HttpClient) {

  }

  ngOnInit(): void {
    this.http.get("https://api.covid19api.com/summary").subscribe((value:any)=>{
      console.log(value);
      this.data = value.Global;
    })
  }

}
