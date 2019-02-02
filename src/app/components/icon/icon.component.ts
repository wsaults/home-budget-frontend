import { Component, OnInit, Input } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGasPump, faUtensils, faShoppingBag, faHamburger, faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons';

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
        this.icon = faUtensils;
        break;
      }
      case "Shopping": {
        this.icon = faShoppingBag;
        break;
      }
      case "Restaurant": {
        this.icon = faHamburger;
        break;
      }
      case "Health": {
        this.icon = faBriefcaseMedical;
        break;
      }
    }
  }
}
