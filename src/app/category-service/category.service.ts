import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryResponse } from '../interfaces/category-response';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  categoryUrl = 'http://localhost:8080/categories';

  getCategories() {
    return this.http.get<CategoryResponse[]>(this.categoryUrl);
  }

  // getIconName() :HTMLElement {
  //   var element = new HTMLElement;
  //   var elem = document.createElement('fa-icon', { "icon": "['fa', 'coffee']"})
  //   // <fa-icon [icon]="['fa', 'coffee']"></fa-icon>
  //   return elem;
  // }
}

// <fa-icon [icon]={{getIconName()}}></fa-icon>
