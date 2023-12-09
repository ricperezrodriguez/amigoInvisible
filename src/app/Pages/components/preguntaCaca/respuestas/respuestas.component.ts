import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { filter, take } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { ModalService } from 'src/app/shared/modal.service';
import { superada } from 'src/app/state/pruebas.actions';

@Component({
  selector: 'app-caca',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './respuestas.component.html',
  styleUrl: './respuestas.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RespuestasComponent {
  constructor(
    private _snackBar: MatSnackBar,
    private _modalService: ModalService,
    private store: Store<AppState>,
  ) {}

  respuesta(res: string) {
    switch (res) {
      case 'seCago':
        this.openSnackBar('Pudo haber sido, pero era algo incomodo', 'Mal');
        break;
      case 'leCagamos':
        this.openSnackBar('A lo mejor le llegaba a parecer mal. Pero el problema es que no había servilletas', 'Mal');
        break;
      case 'natilla':
        this.openSnackBar('Nunca se lo llegamos a decir. Él sigue pensando que fue un acidente', 'Bien!');
        this.store.dispatch(superada({ id: 2 }));
        break;
    }
  }

  openSnackBar(texto: string, btn: string) {
    this._snackBar
      .open(texto, btn, {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 8000,
      })
      .afterDismissed()
      .pipe(
        filter(() => btn === 'Bien!'),
        take(1),
      )
      .subscribe(() => {
        this._modalService.modalText({
          titulo: 'MORALEJA',
          texto: 'La conclusión de esto es: Nunca te rías de los demás, le puede parecer mal (pero es gracioso)',
          imagen: 'moraleja.jpg',
          button: 'Entendido',
        });
      });
  }
}
