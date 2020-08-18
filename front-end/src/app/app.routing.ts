import { Routes, RouterModule } from '@angular/router';
import { AppGuard } from './guards';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(mod => mod.AuthModule),
  },
  {
    path: 'core',
    loadChildren: () => import('./modules/core/core.module').then(mod => mod.CoreModule),
    // canLoad: [AppGuard]
  },
];

export const AppRoutes = RouterModule.forRoot(routes, { useHash: true });
