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
      import('./Pages/components/sopa-letras/sopa-letras.component').then((m) => m.SopaLetrasComponent),
  },
  {
    path: 'prueba2',
    loadComponent: () =>
      import('./Pages/components/asociarFriends/asociarFriends.component').then((m) => m.AsociarFriendsComponent),
  },
  {
    path: 'prueba3',
    loadComponent: () => import('./Pages/components/preguntaCaca/caca/caca.component').then((m) => m.CacaComponent),
  },
  {
    path: 'prueba4',
    loadComponent: () => import('./Pages/components/frases/frases.component').then((m) => m.frasesComponent),
  },
  {
    path: 'prueba5',
    loadComponent: () => import('./Pages/components/blackjack/blackjack.component').then((m) => m.BlackjackComponent),
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
