import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-grill',
  templateUrl: './grill.component.html',
  styleUrls: ['./grill.component.less']
})
export class GrillComponent implements OnInit {
  private grillOptions: any;
  constructor(private menuService: MenuService) {
    this.grillOptions = this.menuService.getGrillOptions();
   }

  ngOnInit() {
  }

}
