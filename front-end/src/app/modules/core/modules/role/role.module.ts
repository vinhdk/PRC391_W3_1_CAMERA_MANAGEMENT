import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  RoleCreateComponent,
  RoleListComponent,
  RoleUpdateComponent
} from './components';

import { RoleHomeComponent } from './pages';
import { RoleRoutes } from './role.routing';
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
import { NgxMaskModule, IConfig } from 'ngx-mask';
// tslint:disable-next-line:prefer-const
let options: Partial<IConfig> | (() => Partial<IConfig>);
const COMPONENTS = [
  RoleCreateComponent,
  RoleListComponent,
  RoleUpdateComponent
];
const PAGES = [
  RoleHomeComponent
];
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RoleRoutes,
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
    NgxMaskModule.forRoot(options),
    ShareModule
  ],
  declarations: [...COMPONENTS, ...PAGES]
})
export class RoleModule { }
