import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Specials } from '../data/daily-special.data';

@Injectable({
  providedIn: 'root'
})
export class SpecialService {

  constructor(private http: HttpClient) {

  }
  getSpecial() {
    let day = new Date().getDay();
    return Specials[day]
    // this.http.get('../data/daily-special.json').subscribe(data => {
    //   return data[day];
    // });
  }

}
