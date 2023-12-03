import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { AppState } from 'src/app/app.reducer';

@Component({
  selector: 'app-final',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatIconModule],
  templateUrl: './final.component.html',
  styleUrl: './final.component.scss',
})
export class FinalComponent implements OnInit {
  estadoPruebas!: boolean[];
  codigo = [3, 1, 4, 1];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.pipe(take(1)).subscribe((state) => {
      this.estadoPruebas = state.estadoPruebas;
    });
  }
}
