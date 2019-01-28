import { Component } from '@angular/core';
import { CategoryService } from './CategoryService/category.service';
import { Category } from './models/category';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'home-budget-fe';
  categories: Category[];
  categoryService: CategoryService;

  constructor(categoryService: CategoryService) {
    this.categoryService = categoryService;
    this.showCategoies();
  }

  showCategoies() {
    this.categoryService.getCategories()
    .subscribe(data => {
        console.log(data);
    });
  }
}
