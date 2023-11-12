import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [InicioComponent],
  imports: [CommonModule, PagesRoutingModule, MaterialModule],
})
export class PagesModule {}
