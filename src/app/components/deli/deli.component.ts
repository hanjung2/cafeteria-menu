import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-deli',
  templateUrl: './deli.component.html',
  styleUrls: ['./deli.component.less']
})
export class DeliComponent implements OnInit {
  private todaySpecial: string;
  private breadOptions: string[];
  private cheeseOptions: string[];
  private sauceOptions: string[];
  private proteinOptions: string[];
  private toppingOptions: string[];
  private deliOptions;
  constructor(private menuService: MenuService) {
    this.todaySpecial = this.menuService.getSpecial();
    this.deliOptions = this.menuService.getDeliOptions();
    this.breadOptions = this.deliOptions.Bread;
    this.cheeseOptions = this.deliOptions.Cheese;
    this.sauceOptions = this.deliOptions.Sauce;
    this.proteinOptions = this.deliOptions.Protein;
    this.toppingOptions = this.deliOptions.Topping;
  }

  ngOnInit() {
  }

}
