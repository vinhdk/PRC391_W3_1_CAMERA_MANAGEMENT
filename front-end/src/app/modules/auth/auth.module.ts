import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavigateComponent, LoginComponent } from './components';
import { AuthRoutes } from './auth.routing';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AuthRoutes
  ],
  declarations: [NavigateComponent, LoginComponent]
})
export class AuthModule { }
