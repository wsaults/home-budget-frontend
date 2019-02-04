import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategoryResponse } from '../interfaces/category-response';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl;
  categoriesUrl = this.baseUrl + 'categories';
  categoryUrl = this.baseUrl + 'category/';

  getCategories() {
    return this.http.get<CategoryResponse[]>(this.categoriesUrl);
  }

  addCategoryExpense(amount: String, id: Number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.http.post<CategoryResponse>(this.categoryUrl + id.toString() + '/addExpense/' + amount, httpOptions);
  }
}
