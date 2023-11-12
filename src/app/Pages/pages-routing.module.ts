import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrucigramaComponent } from './components/crucigrama/crucigrama.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'prueba1',
    component: CrucigramaComponent,
  },
  {
    path: '**',
    redirectTo: 'inicio',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
