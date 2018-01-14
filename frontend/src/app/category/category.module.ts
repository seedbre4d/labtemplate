import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryService } from './service/category.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CategoryRoutingModule,
    FormsModule,

  ],
  providers: [
    CategoryService
  ],
  declarations: [CategoryAddComponent, CategoryListComponent, CategoryEditComponent]
})
export class CategoryModule { }
