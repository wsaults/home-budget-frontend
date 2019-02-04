import { Component, OnInit, Input } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGasPump, faShoppingBasket, faShoppingBag, faUtensils, faBriefcaseMedical, faPills } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon',
  template: `<fa-icon [icon]="icon"></fa-icon>`,
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {

  icon = faCoffee;

  @Input() iconName: string;  

  constructor() {
  }

  ngOnInit() {
    switch(this.iconName) {
      case "Fuel": {
        this.icon = faGasPump;
        break;
      }
      case "Groceries": {
        this.icon = faShoppingBasket;
        break;
      }
      case "Shopping": {
        this.icon = faShoppingBag;
        break;
      }
      case "Restaurant": {
        this.icon = faUtensils;
        break;
      }
      case "Health": {
        this.icon = faBriefcaseMedical;
        break;
      }
      case "Vitamins": {
        this.icon = faPills;
        break;
      }
    }
  }
}
