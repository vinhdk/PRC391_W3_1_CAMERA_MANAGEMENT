import { Routes, RouterModule } from '@angular/router';
import { NavigateComponent, LoginComponent } from './components';

const routes: Routes = [
  {
    path: '', redirectTo: 'navigate'
  },
  {
    path: 'navigate', component: NavigateComponent
  },
  {
    path: 'login', component: LoginComponent
  }
];

export const AuthRoutes = RouterModule.forChild(routes);
