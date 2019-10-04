import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-deli',
  templateUrl: './deli.component.html',
  styleUrls: ['./deli.component.less']
})
export class DeliComponent implements OnInit {
  public todaySpecial: string;
  public breadOptions: string[];
  public cheeseOptions: string[];
  public sauceOptions: string[];
  public proteinOptions: string[];
  public toppingOptions: string[];
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
