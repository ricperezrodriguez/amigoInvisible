import { Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

export const routes: Routes = [
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  // },
  {
    path: '',
    loadComponent: () => import('./Pages/components/inicio/inicio.component').then((m) => m.InicioComponent),
  },
  {
    path: 'prueba1',
    loadComponent: () =>
      import('./Pages/components/crucigrama/crucigrama.component').then((m) => m.CrucigramaComponent),
  },
  {
    path: '404',
    component: ErrorPageComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];
