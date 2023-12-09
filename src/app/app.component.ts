import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, map, tap } from 'rxjs';
import { AppState } from './app.reducer';
import { inicializarLocalStorage } from './state/pruebas.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  estadoPruebas = new BehaviorSubject<boolean[]>([]);
  todasSuperadas = new BehaviorSubject<boolean>(false);

  constructor(
    public router: Router,
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    const storedValue = localStorage.getItem('estadoAmigo');
    if (storedValue) {
      const estadoInicial = JSON.parse(storedValue) as AppState;
      this.store.dispatch(inicializarLocalStorage({ estadoLocalStorage: estadoInicial.estadoPruebas }));
    }
  }

  vm$ = this.store.pipe(
    tap((state) => {
      localStorage.setItem('estadoAmigo', JSON.stringify(state));
    }),
    map((state) => ({
      estadoPruebas: state.estadoPruebas,
      todasSuperadas: state.estadoPruebas.every((v) => v === true),
    })),
  );
}
