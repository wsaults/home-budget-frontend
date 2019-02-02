import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category-service/category.service';
import { CategoryResponse } from '../../interfaces/category-response'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  faPlusCircle = faPlusCircle;
  router: Router;
  route: ActivatedRoute;
  showAddCategory: boolean;

  constructor(categoryService: CategoryService, router: Router, route: ActivatedRoute) {
    this.categoryService = categoryService;
    this.router = router;
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

  addExpense(name: String) {
    this.showAddCategory = true;
    // this.router.navigate([`add-expense/${name}`], { relativeTo: this.route });
  }
}
