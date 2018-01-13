import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Http } from '@angular/http';
import { CategoryModel } from '../models/category.model';

@Injectable()
export class CategoryService extends ApiService<CategoryModel>  {

  constructor(http: Http) {
    super(http);
    this.path = 'category';
 }

}
