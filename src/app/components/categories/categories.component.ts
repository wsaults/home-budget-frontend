import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category-service/category.service';
import { CategoryResponse } from '../../interfaces/category-response'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(categoryService: CategoryService) {
    this.categoryService = categoryService;
   }

  categories: CategoryResponse[];
  categoryService: CategoryService;

  ngOnInit() {
    this.showCategoies();
  }

  showCategoies() {
    this.categoryService.getCategories().subscribe((categories:CategoryResponse[]) => {
      this.categories = categories;
    });
  }

  getCategories() {
    return this.categories;
  }

  getIcon() {
    return "faCoffee";
  }
}
