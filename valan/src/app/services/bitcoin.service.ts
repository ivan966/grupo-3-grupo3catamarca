import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor( private http: HttpClient) {
    console.log('Bitcoin listo');
    
   }
   getNewRelease(){
     return this.http.get('https://coinlib.io/api/v1/coin?key=3b6b849692a12801&pref=USD&symbol=BTC')
      .pipe(map((res:any)=>{
        console.log(res);
        
        return res['markets'];
        
      }));
     
   }
}

// https://coinlib.io/api/v1/coin?key=3b6b849692a12801&pref=USD&symbol=BTC