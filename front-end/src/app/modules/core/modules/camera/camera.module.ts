import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CameraCreateComponent,
  CameraListComponent,
  CameraUpdateComponent
} from './components';

import { CameraHomeComponent } from './pages';
const COMPONENTS = [
  CameraCreateComponent,
  CameraListComponent,
  CameraUpdateComponent
];
const PAGES = [
  CameraHomeComponent
];
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...COMPONENTS, ...PAGES]
})
export class CameraModule { }
