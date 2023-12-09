import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { resetearPruebas } from 'src/app/state/pruebas.actions';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatGridListModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioComponent {
  constructor(
    private router: Router,
    private store: Store<AppState>,
  ) {}

  vm$ = this.store.pipe(
    map((state) => ({
      algunaPruebaSuperada: state.estadoPruebas.some((v) => v === true),
    })),
  );

  irPrueba1() {
    this.router.navigate(['prueba1']);
  }

  resetarjuego() {
    this.store.dispatch(resetearPruebas());
  }
}
