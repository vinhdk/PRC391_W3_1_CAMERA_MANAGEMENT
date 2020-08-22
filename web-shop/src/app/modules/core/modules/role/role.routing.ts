import { Routes, RouterModule } from '@angular/router';
import { RoleHomeComponent } from './pages';

const routes: Routes = [
  { path: '', component: RoleHomeComponent },
];

export const RoleRoutes = RouterModule.forChild(routes);
