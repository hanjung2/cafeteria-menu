import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Specials } from '../data/daily-special.data';
import { FixedMenu } from '../data/fix-menu.data';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) {

  }

  getDeliOptions() {
    return FixedMenu.Deli;
  }
  getGrillOptions(){
    return FixedMenu.Grill;
  }
  getSpecial() {
    let day = new Date().getDay();
    return Specials[day]
    // this.http.get('../data/daily-special.json').subscribe(data => {
    //   return data[day];
    // });
  }

}
