import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { delay, of, take } from 'rxjs';
import { RespuestasComponent } from '../respuestas/respuestas.component';

@Component({
  selector: 'app-caca',
  standalone: true,
  imports: [CommonModule, MatBottomSheetModule, MatButtonModule],
  templateUrl: './caca.component.html',
  styleUrl: './caca.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CacaComponent implements OnInit {
  constructor(private _bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {
    of(null)
      .pipe(take(1), delay(1500))
      .subscribe(() => this.abrirRespuestas());
  }

  abrirRespuestas() {
    this._bottomSheet.open(RespuestasComponent);
  }
}
