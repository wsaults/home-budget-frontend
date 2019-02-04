import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './components/categories/categories.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconComponent } from './components/icon/icon.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "**", redirectTo: "/" }
];

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    IconComponent,
    AddExpenseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes, { useHash: false, onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
