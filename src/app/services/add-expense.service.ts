import { Injectable, Output, EventEmitter } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class AddExpenseService {

  isVisible = false;

  @Output() change: EventEmitter<{isVisible: boolean, category: Category}> = new EventEmitter();

  constructor() { }

  toggle(category: Category) {
    this.isVisible = !this.isVisible;
    this.change.emit({isVisible: this.isVisible, category: category});
  }
}