import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { ModalService } from 'src/app/shared/modal.service';
import { superada } from 'src/app/state/pruebas.actions';

interface Letra {
  sel: boolean;
  marcada: boolean;
  l: string;
}

interface Palabra {
  palabra: string;
  encontrada: boolean;
}
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatGridListModule],
  templateUrl: './crucigrama.component.html',
  styleUrls: ['./crucigrama.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrucigramaComponent implements OnInit {
  letrasSeleccionas: string = '';
  juegoAcabado = false;

  palabras: Palabra[] = [
    {
      palabra: 'gayoso',
      encontrada: false,
    },
    {
      palabra: 'piñeiro',
      encontrada: false,
    },
    {
      palabra: 'mucha e nucha',
      encontrada: false,
    },
    {
      palabra: 'digocho eu',
      encontrada: false,
    },
    {
      palabra: 'larpeiros',
      encontrada: false,
    },
    {
      palabra: 'xabarin club',
      encontrada: false,
    },
    {
      palabra: 'land rober',
      encontrada: false,
    },
    {
      palabra: 'luar',
      encontrada: false,
    },
    {
      palabra: 'touriñan',
      encontrada: false,
    },
  ];

  private palabrasOrdenadas: string[] = [];

  /* prettier-ignore */
  arr: Letra[][] = [
    [{sel: false, marcada: false, l: 'L'}, {sel: false, marcada: false, l: 'I'}, {sel: false, marcada: false, l: 'V'}, {sel: false, marcada: false, l: 'N'}, {sel: false, marcada: false, l: 'A'}, {sel: false, marcada: false, l: 'Ñ'}, {sel: false, marcada: false, l: 'I'}, {sel: false, marcada: false, l: 'R'}, {sel: false, marcada: false, l: 'U'}, {sel: false, marcada: false, l: 'O'}, {sel: false, marcada: false, l: 'T'}, ],
    [{sel: false, marcada: false, l: 'O'}, {sel: false, marcada: false, l: 'E'}, {sel: false, marcada: false, l: 'T'}, {sel: false, marcada: false, l: 'S'}, {sel: false, marcada: false, l: 'E'}, {sel: false, marcada: false, l: 'O'}, {sel: false, marcada: false, l: 'A'}, {sel: false, marcada: false, l: 'E'}, {sel: false, marcada: false, l: 'R'}, {sel: false, marcada: false, l: 'Y'}, {sel: false, marcada: false, l: 'I'}, ],
    [{sel: false, marcada: false, l: 'B'}, {sel: false, marcada: false, l: 'E'}, {sel: false, marcada: false, l: 'J'}, {sel: false, marcada: false, l: 'W'}, {sel: false, marcada: false, l: 'S'}, {sel: false, marcada: false, l: 'E'}, {sel: false, marcada: false, l: 'O'}, {sel: false, marcada: false, l: 'R'}, {sel: false, marcada: false, l: 'U'}, {sel: false, marcada: false, l: 'Y'}, {sel: false, marcada: false, l: 'H'}, ],
    [{sel: false, marcada: false, l: 'E'}, {sel: false, marcada: false, l: 'I'}, {sel: false, marcada: false, l: 'Z'}, {sel: false, marcada: false, l: 'O'}, {sel: false, marcada: false, l: 'Q'}, {sel: false, marcada: false, l: 'H'}, {sel: false, marcada: false, l: 'S'}, {sel: false, marcada: false, l: 'A'}, {sel: false, marcada: false, l: 'T'}, {sel: false, marcada: false, l: 'A'}, {sel: false, marcada: false, l: 'Ñ'}, ],
    [{sel: false, marcada: false, l: 'R'}, {sel: false, marcada: false, l: 'D'}, {sel: false, marcada: false, l: 'Y'}, {sel: false, marcada: false, l: 'J'}, {sel: false, marcada: false, l: 'C'}, {sel: false, marcada: false, l: 'W'}, {sel: false, marcada: false, l: 'D'}, {sel: false, marcada: false, l: 'U'}, {sel: false, marcada: false, l: 'E'}, {sel: false, marcada: false, l: 'B'}, {sel: false, marcada: false, l: 'G'}, ],
    [{sel: false, marcada: false, l: 'A'}, {sel: false, marcada: false, l: 'A'}, {sel: false, marcada: false, l: 'A'}, {sel: false, marcada: false, l: 'O'}, {sel: false, marcada: false, l: 'P'}, {sel: false, marcada: false, l: 'W'}, {sel: false, marcada: false, l: 'S'}, {sel: false, marcada: false, l: 'L'}, {sel: false, marcada: false, l: 'S'}, {sel: false, marcada: false, l: 'J'}, {sel: false, marcada: false, l: 'R'}, ],
    [{sel: false, marcada: false, l: 'G'}, {sel: false, marcada: false, l: 'J'}, {sel: false, marcada: false, l: 'G'}, {sel: false, marcada: false, l: 'N'}, {sel: false, marcada: false, l: 'O'}, {sel: false, marcada: false, l: 'R'}, {sel: false, marcada: false, l: 'I'}, {sel: false, marcada: false, l: 'E'}, {sel: false, marcada: false, l: 'Ñ'}, {sel: false, marcada: false, l: 'I'}, {sel: false, marcada: false, l: 'P'}, ],
    [{sel: false, marcada: false, l: 'V'}, {sel: false, marcada: false, l: 'I'}, {sel: false, marcada: false, l: 'L'}, {sel: false, marcada: false, l: 'A'}, {sel: false, marcada: false, l: 'N'}, {sel: false, marcada: false, l: 'D'}, {sel: false, marcada: false, l: 'R'}, {sel: false, marcada: false, l: 'O'}, {sel: false, marcada: false, l: 'B'}, {sel: false, marcada: false, l: 'E'}, {sel: false, marcada: false, l: 'R'}, ],
    [{sel: false, marcada: false, l: 'D'}, {sel: false, marcada: false, l: 'A'}, {sel: false, marcada: false, l: 'S'}, {sel: false, marcada: false, l: 'O'}, {sel: false, marcada: false, l: 'R'}, {sel: false, marcada: false, l: 'I'}, {sel: false, marcada: false, l: 'E'}, {sel: false, marcada: false, l: 'P'}, {sel: false, marcada: false, l: 'R'}, {sel: false, marcada: false, l: 'A'}, {sel: false, marcada: false, l: 'L'}, ],
    [{sel: false, marcada: false, l: 'B'}, {sel: false, marcada: false, l: 'U'}, {sel: false, marcada: false, l: 'L'}, {sel: false, marcada: false, l: 'C'}, {sel: false, marcada: false, l: 'N'}, {sel: false, marcada: false, l: 'I'}, {sel: false, marcada: false, l: 'R'}, {sel: false, marcada: false, l: 'A'}, {sel: false, marcada: false, l: 'B'}, {sel: false, marcada: false, l: 'A'}, {sel: false, marcada: false, l: 'X'}, ],
    [{sel: false, marcada: false, l: 'A'}, {sel: false, marcada: false, l: 'H'}, {sel: false, marcada: false, l: 'C'}, {sel: false, marcada: false, l: 'U'}, {sel: false, marcada: false, l: 'N'}, {sel: false, marcada: false, l: 'E'}, {sel: false, marcada: false, l: 'A'}, {sel: false, marcada: false, l: 'H'}, {sel: false, marcada: false, l: 'C'}, {sel: false, marcada: false, l: 'U'}, {sel: false, marcada: false, l: 'M'}, ],
  ]

  constructor(
    private _modalService: ModalService,
    private _store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.palabras.forEach((palabra) => {
      this.palabrasOrdenadas.push(palabra.palabra.split('').sort().join('').trim().toUpperCase());
    });

    this._modalService.modalText({
      titulo: 'EXPLICACIÓN',
      texto: '¡¡TVG!! Encuentra las palabras en la sopa de letras',
      imagen: 'gayoso.gif',
      button: 'Comenzar',
    });
  }

  teclaSeleccionada(letra: Letra) {
    if (letra.sel) {
      letra.sel = false;
      this.letrasSeleccionas = this.letrasSeleccionas.replace(letra.l, '');
    } else {
      letra.sel = true;
      this.letrasSeleccionas = this.letrasSeleccionas.concat(letra.l);
    }
  }

  comprobarPalabra() {
    const p = this.letrasSeleccionas.split('').sort().join('');

    if (this.palabrasOrdenadas.includes(p)) {
      this.arr = this.arr.map((fila) => {
        return fila.map((col) => {
          if (col.sel) {
            return {
              ...col,
              sel: false,
              marcada: true,
            };
          } else {
            return col;
          }
        });
      });

      const pos = this.palabrasOrdenadas.indexOf(p);
      this.palabras[pos].encontrada = true;
      this._modalService.mostrarModalOk();
    } else {
      this.arr = this.arr.map((fila) => {
        return fila.map((col) => {
          if (col.sel) {
            return {
              ...col,
              sel: false,
            };
          } else {
            return col;
          }
        });
      });

      this._modalService.mostrarModalFail();
    }

    this._juegoAcabado();

    this.letrasSeleccionas = '';
  }

  private _juegoAcabado(): boolean {
    const acabado = this.palabras.every((p) => p.encontrada);
    if (acabado) {
      this._store.dispatch(superada({ id: 0 }));
      this.juegoAcabado = true;
    }
    return acabado;
  }
}
