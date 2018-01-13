import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { CategoryModel } from '../model/category.model';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.less']
})
export class CategoryAddComponent implements OnInit {

  @Input() category: CategoryModel = new CategoryModel();
  constructor(
    private apiService: CategoryService
  ) { }

  ngOnInit() {
  }

  addCategory() {
    console.log(this.category);
    this.apiService.post(this.category).subscribe((res) => {
      console.log(this.category);
    });
  }

}
