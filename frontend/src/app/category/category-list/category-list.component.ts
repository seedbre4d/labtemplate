import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { CategoryModel } from '../model/category.model';
import { MatDialog, MatSnackBar } from '@angular/material';
import { CategoryAddComponent } from '../category-add/category-add.component';
import { CategoryEditComponent } from '../category-edit/category-edit.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.less']
})
export class CategoryListComponent implements OnInit {
  categories: CategoryModel[];

  constructor(
    private categoryService: CategoryService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.fetchAll();
  }

  fetchAll() {
    this.categoryService.get().subscribe(res => {
      this.categories = res;
    });
  }

  openEditDialog(category: CategoryModel): void {
    const dialogRef = this.dialog.open(CategoryEditComponent, {
      width: '250px',
      data: category
    });
    dialogRef.componentInstance.onEdit.subscribe(res => {
      this.fetchAll();
    });
    dialogRef.afterClosed().subscribe(res => {
      dialogRef.componentInstance.onEdit.unsubscribe();
    });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(CategoryAddComponent, {
      width: '250px'
    });
    dialogRef.componentInstance.onAdd.subscribe(res => {
      this.fetchAll();
    });
    dialogRef.afterClosed().subscribe(res => {
      dialogRef.componentInstance.onAdd.unsubscribe();
    });
  }

  delete(category: CategoryModel) {
    this.categories = this.categories.filter(c => c.id !== category.id);
    this.categoryService.delete(category.id).subscribe(res => {
      console.log('success!');
      this.openSnackbar();
    });
  }
  openSnackbar() {
    this.snackBar.open(`Category deleted!`, 'Ok', {
      duration: 5000
    });
  }
}
