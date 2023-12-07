import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { superada } from 'src/app/state/pruebas.actions';

@Component({
  selector: 'app-caca',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './respuestas.component.html',
  styleUrl: './respuestas.component.scss',
})
export class RespuestasComponent {
  constructor(
    private _snackBar: MatSnackBar,
    private store: Store<AppState>,
  ) {}

  respuesta(res: string) {
    switch (res) {
      case 'seCago':
        this.openSnackBar('Pudo haber sido, pero era algo incomodo');
        break;
      case 'leCagamos':
        this.openSnackBar('A lo mejor le llegaba a parecer mal. Pero el problema es que no había servilletas');
        break;
      case 'natilla':
        this.openSnackBar('Nunca se lo llegamos a decir. Él sigue pensando que fue un acidente');
        this.store.dispatch(superada({ id: 2 }));
        break;
    }
  }

  openSnackBar(texto: string) {
    this._snackBar.open(texto, 'Guay!', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 8000,
    });
  }
}
