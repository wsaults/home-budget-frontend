import { Component, OnInit, HostBinding } from '@angular/core';
import { AddExpenseService } from 'src/app/services/add-expense.service';
import { CategoryService } from '../../category-service/category.service';
import { CategoryResponse } from '../../interfaces/category-response';
import { Router } from '@angular/router';
import { Category } from '../../models/category'

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  @HostBinding('class.is-visible')
  isVisible = false;
  category: Category;
  amount: String;

  constructor(
    private addExpenseService: AddExpenseService,
    private categoryService: CategoryService,
    private router: Router) {}

  ngOnInit() {
    this.addExpenseService.change.subscribe(event => {
      this.isVisible = event.isVisible;
      this.category = event.category;
    })
  }

  valueChange(newAmount: String) {
    this.amount = newAmount;
  }

  close() {
    this.addExpenseService.toggle(null);
  }

  save() {
    this.categoryService.addCategoryExpense(this.amount, this.category.id).subscribe((category: CategoryResponse) => {
      window.location.reload();
    });
    this.close();
  }
}
