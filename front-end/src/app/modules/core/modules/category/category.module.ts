import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CategoryCreateComponent,
  CategoryListComponent,
  CategoryUpdateComponent
} from './components';

import { CategoryHomeComponent } from './pages';
const COMPONENTS = [
  CategoryCreateComponent,
  CategoryListComponent,
  CategoryUpdateComponent
];
const PAGES = [
  CategoryHomeComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...COMPONENTS, ...PAGES]
})
export class CategoryModule { }
