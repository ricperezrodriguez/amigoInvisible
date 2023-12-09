import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, map } from 'rxjs';
import { AppState } from './app.reducer';

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
export class AppComponent {
  estadoPruebas = new BehaviorSubject<boolean[]>([]);
  todasSuperadas = new BehaviorSubject<boolean>(false);

  constructor(
    public router: Router,
    private store: Store<AppState>,
  ) {}

  vm$ = this.store.pipe(
    map((state) => ({
      estadoPruebas: state.estadoPruebas,
      todasSuperadas: state.estadoPruebas.every((v) => v === true),
    })),
  );
}
