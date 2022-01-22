import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bitcoin: any [ ] = [];


  constructor( private http: HttpClient) { 
  console.log('Constructor del home hecho');
  
    this.http.get('https://coinlib.io/api/v1/coin?key=3b6b849692a12801&pref=USD&symbol=BTC')
    .subscribe ((data: any) => {
      this.bitcoin= data;
      console.log(data);
      // return data['results'].price.name;
      
    }) 
  }

  ngOnInit(): void {
  }

}
