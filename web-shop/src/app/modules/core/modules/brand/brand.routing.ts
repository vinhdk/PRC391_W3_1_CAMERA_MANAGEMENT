import { Routes, RouterModule } from '@angular/router';
import { BrandHomeComponent } from './pages';

const routes: Routes = [
  {
    path: '', component: BrandHomeComponent
  },
];

export const BrandRoutes = RouterModule.forChild(routes);
