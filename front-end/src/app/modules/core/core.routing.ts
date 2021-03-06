import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {
        path: '', redirectTo: 'brand'
      },
      {
        path: 'camera',
        loadChildren: () => import('./modules/camera/camera.module').then((m => m.CameraModule))
      },
      {
        path: 'brand',
        loadChildren: () => import('./modules/brand/brand.module').then((m => m.BrandModule))
      },
      {
        path: 'category',
        loadChildren: () => import('./modules/category/category.module').then((m => m.CategoryModule))
      },
      {
        path: 'role',
        loadChildren: () => import('./modules/role/role.module').then((m => m.RoleModule))
      },
      {
        path: 'account',
        loadChildren: () => import('./modules/account/account.module').then((m => m.AccountModule))
      },
    ]
  },
];

export const CoreRoutes = RouterModule.forChild(routes);
