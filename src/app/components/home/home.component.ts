import { Component, OnInit } from '@angular/core';
import { SpecialService } from 'src/app/services/special.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  private todaySpecial:string;
  constructor(private specialService: SpecialService) { }

  ngOnInit() {
    this.todaySpecial = this.specialService.getSpecial();
    console.log(this.todaySpecial)
  }

}
