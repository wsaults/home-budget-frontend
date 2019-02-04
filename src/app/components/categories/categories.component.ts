import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category-service/category.service';
import { CategoryResponse } from '../../interfaces/category-response';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { AddExpenseService } from 'src/app/services/add-expense.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  faPlusCircle = faPlusCircle;
  showAddCategory: boolean;
  categories: CategoryResponse[];

  constructor(private addExpenseService: AddExpenseService, private categoryService: CategoryService) {}

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

  addExpense(category: Category) {
    this.addExpenseService.toggle(category);
  }
}
