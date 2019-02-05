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
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.get<CategoryResponse[]>(this.categoriesUrl, httpOptions);
  }

  addCategoryExpense(amount: String, id: Number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.post<CategoryResponse>(this.categoryUrl + id.toString() + '/addExpense/' + amount, httpOptions);
  }
}
