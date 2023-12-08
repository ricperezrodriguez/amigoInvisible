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
    path: 'prueba2',
    loadComponent: () => import('./Pages/components/asociar/asociar.component').then((m) => m.AsociarComponent),
  },
  {
    path: 'prueba3',
    loadComponent: () => import('./Pages/components/preguntaCaca/caca/caca.component').then((m) => m.CacaComponent),
  },
  {
    path: 'prueba4',
    loadComponent: () =>
      import('./Pages/components/prueba-fotos/prueba-fotos.component').then((m) => m.PruebaFotosComponent),
  },
  {
    path: 'resumen',
    loadComponent: () => import('./Pages/components/final/final.component').then((m) => m.FinalComponent),
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
