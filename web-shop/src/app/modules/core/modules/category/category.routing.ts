import { Routes, RouterModule } from '@angular/router';
import { CategoryHomeComponent } from './pages';

const routes: Routes = [
  { path: '', component: CategoryHomeComponent },
];

export const CategoryRoutes = RouterModule.forChild(routes);
