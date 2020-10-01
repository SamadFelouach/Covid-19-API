import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
   dataCountry: any;

  constructor(public  http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://api.covid19api.com/summary").subscribe((value:any)=>{
      console.log(value);
      this.dataCountry = value.Countries;
    })
  }

}
