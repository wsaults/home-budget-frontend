import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './components/categories/categories.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconComponent } from './components/icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
