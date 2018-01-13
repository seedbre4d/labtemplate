import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../../../models/category.model';
import { ApiService } from '../../../service/index';
import { CategoryService } from '../../../service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.less']
})
export class CategoryListComponent implements OnInit {

  categories: CategoryModel[];

  constructor(
    private apiService: CategoryService
  ) { }

  ngOnInit() {
    this.apiService.get().subscribe(res => {
      this.categories = res;
    });
  }

  delete(category: CategoryModel) {
    this.categories = this.categories.filter(c => c.id !== category.id);
    this.apiService.delete(category.id).subscribe((res) => {
      console.log('success!');
    })
  }

}
