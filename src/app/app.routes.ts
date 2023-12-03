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
    loadComponent: () => import('./Pages/components/pregunta/pregunta.component').then((m) => m.PreguntaComponent),
  },
  {
    path: 'prueba4',
    loadComponent: () =>
      import('./Pages/components/crucigrama/crucigrama.component').then((m) => m.CrucigramaComponent),
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
