import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  CategoryCreateComponent,
  CategoryListComponent,
  CategoryUpdateComponent
} from './components';

import { CategoryHomeComponent } from './pages';
import { CategoryRoutes } from './Category.routing';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import {
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbButtonModule,
  NbPopoverModule,
  NbToggleModule,
  NbRadioModule,
  NbAccordionModule,
  NbSelectModule,
  NbTooltipModule
} from '@nebular/theme';
import { ThemeModule } from 'src/app/modules/nebular/nebular.module';
import { ShareModule } from 'src/app/share/share.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
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
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CategoryRoutes,
    MDBBootstrapModulesPro,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbButtonModule,
    NbPopoverModule,
    NbToggleModule,
    NbRadioModule,
    NbAccordionModule,
    NbSelectModule,
    NbTooltipModule,
    ThemeModule,
    NgxDatatableModule,
    SweetAlert2Module.forRoot(),
    ShareModule
  ],
  declarations: [...COMPONENTS, ...PAGES]
})
export class CategoryModule { }
