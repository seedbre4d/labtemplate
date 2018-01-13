import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, UserComponent } from './components';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { CategoryAddComponent } from './components/category/category-add/category-add.component';
const routes: Routes = [
  { path: '', redirectTo: 'category', pathMatch: 'full' },
  {
    path: 'category',
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
      path: 'list',
      component: CategoryListComponent
    },
    {
      path: 'add',
      component: CategoryAddComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
