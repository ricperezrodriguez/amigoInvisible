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
  templateUrl: './sopa-letras.component.html',
  styleUrls: ['./sopa-letras.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SopaLetrasComponent implements OnInit {
  letrasSeleccionas: string = '';
  juegoAcabado = false;

  palabras: Palabra[] = [
    {
      palabra: 'pivot',
      encontrada: false,
    },
    {
      palabra: 'oh my god',
      encontrada: false,
    },
    {
      palabra: 'smelly cat',
      encontrada: false,
    },
    {
      palabra: 'guitar',
      encontrada: false,
    },
    {
      palabra: 'umbrella',
      encontrada: false,
    },
    {
      palabra: 'leather pant',
      encontrada: false,
    },
    {
      palabra: 'sandwich',
      encontrada: false,
    },
    {
      palabra: 'marcel',
      encontrada: false,
    },
    {
      palabra: 'futbolin',
      encontrada: false,
    },
  ];

  private palabrasOrdenadas: string[] = [];

  /* prettier-ignore */
  arr: Letra[][] = [
    [{sel: false, marcada: false, l: 'P'}, {sel: false, marcada: false, l: 'I'}, {sel: false, marcada: false, l: 'V'}, {sel: false, marcada: false, l: 'O'}, {sel: false, marcada: false, l: 'T'}, {sel: false, marcada: false, l: 'A'}, {sel: false, marcada: false, l: 'N'}, {sel: false, marcada: false, l: 'L'}, {sel: false, marcada: false, l: 'R'}, {sel: false, marcada: false, l: 'X'}, {sel: false, marcada: false, l: 'J'} ],
    [{sel: false, marcada: false, l: 'F'}, {sel: false, marcada: false, l: 'U'}, {sel: false, marcada: false, l: 'S'}, {sel: false, marcada: false, l: 'S'}, {sel: false, marcada: false, l: 'A'}, {sel: false, marcada: false, l: 'N'}, {sel: false, marcada: false, l: 'D'}, {sel: false, marcada: false, l: 'W'}, {sel: false, marcada: false, l: 'I'}, {sel: false, marcada: false, l: 'C'}, {sel: false, marcada: false, l: 'H'} ],
    [{sel: false, marcada: false, l: 'U'}, {sel: false, marcada: false, l: 'U'}, {sel: false, marcada: false, l: 'D'}, {sel: false, marcada: false, l: 'M'}, {sel: false, marcada: false, l: 'O'}, {sel: false, marcada: false, l: 'S'}, {sel: false, marcada: false, l: 'R'}, {sel: false, marcada: false, l: 'N'}, {sel: false, marcada: false, l: 'E'}, {sel: false, marcada: false, l: 'O'}, {sel: false, marcada: false, l: 'A'} ],
    [{sel: false, marcada: false, l: 'M'}, {sel: false, marcada: false, l: 'O'}, {sel: false, marcada: false, l: 'T'}, {sel: false, marcada: false, l: 'E'}, {sel: false, marcada: false, l: 'E'}, {sel: false, marcada: false, l: 'O'}, {sel: false, marcada: false, l: 'X'}, {sel: false, marcada: false, l: 'E'}, {sel: false, marcada: false, l: 'U'}, {sel: false, marcada: false, l: 'U'}, {sel: false, marcada: false, l: 'Z'} ],
    [{sel: false, marcada: false, l: 'B'}, {sel: false, marcada: false, l: 'U'}, {sel: false, marcada: false, l: 'H'}, {sel: false, marcada: false, l: 'B'}, {sel: false, marcada: false, l: 'G'}, {sel: false, marcada: false, l: 'L'}, {sel: false, marcada: false, l: 'B'}, {sel: false, marcada: false, l: 'J'}, {sel: false, marcada: false, l: 'U'}, {sel: false, marcada: false, l: 'O'}, {sel: false, marcada: false, l: 'B'} ],
    [{sel: false, marcada: false, l: 'R'}, {sel: false, marcada: false, l: 'W'}, {sel: false, marcada: false, l: 'X'}, {sel: false, marcada: false, l: 'M'}, {sel: false, marcada: false, l: 'O'}, {sel: false, marcada: false, l: 'U'}, {sel: false, marcada: false, l: 'L'}, {sel: false, marcada: false, l: 'Y'}, {sel: false, marcada: false, l: 'R'}, {sel: false, marcada: false, l: 'R'}, {sel: false, marcada: false, l: 'X'} ],
    [{sel: false, marcada: false, l: 'E'}, {sel: false, marcada: false, l: 'A'}, {sel: false, marcada: false, l: 'M'}, {sel: false, marcada: false, l: 'I'}, {sel: false, marcada: false, l: 'Y'}, {sel: false, marcada: false, l: 'L'}, {sel: false, marcada: false, l: 'I'}, {sel: false, marcada: false, l: 'Y'}, {sel: false, marcada: false, l: 'V'}, {sel: false, marcada: false, l: 'U'}, {sel: false, marcada: false, l: 'O'} ],
    [{sel: false, marcada: false, l: 'L'}, {sel: false, marcada: false, l: 'S'}, {sel: false, marcada: false, l: 'K'}, {sel: false, marcada: false, l: 'V'}, {sel: false, marcada: false, l: 'P'}, {sel: false, marcada: false, l: 'G'}, {sel: false, marcada: false, l: 'I'}, {sel: false, marcada: false, l: 'T'}, {sel: false, marcada: false, l: 'C'}, {sel: false, marcada: false, l: 'A'}, {sel: false, marcada: false, l: 'P'} ],
    [{sel: false, marcada: false, l: 'L'}, {sel: false, marcada: false, l: 'E'}, {sel: false, marcada: false, l: 'C'}, {sel: false, marcada: false, l: 'R'}, {sel: false, marcada: false, l: 'A'}, {sel: false, marcada: false, l: 'M'}, {sel: false, marcada: false, l: 'O'}, {sel: false, marcada: false, l: 'N'}, {sel: false, marcada: false, l: 'A'}, {sel: false, marcada: false, l: 'A'}, {sel: false, marcada: false, l: 'N'} ],
    [{sel: false, marcada: false, l: 'A'}, {sel: false, marcada: false, l: 'J'}, {sel: false, marcada: false, l: 'O'}, {sel: false, marcada: false, l: 'Z'}, {sel: false, marcada: false, l: 'G'}, {sel: false, marcada: false, l: 'J'}, {sel: false, marcada: false, l: 'C'}, {sel: false, marcada: false, l: 'D'}, {sel: false, marcada: false, l: 'B'}, {sel: false, marcada: false, l: 'R'}, {sel: false, marcada: false, l: 'T'} ],
    [{sel: false, marcada: false, l: 'T'}, {sel: false, marcada: false, l: 'N'}, {sel: false, marcada: false, l: 'A'}, {sel: false, marcada: false, l: 'P'}, {sel: false, marcada: false, l: 'R'}, {sel: false, marcada: false, l: 'E'}, {sel: false, marcada: false, l: 'H'}, {sel: false, marcada: false, l: 'T'}, {sel: false, marcada: false, l: 'A'}, {sel: false, marcada: false, l: 'E'}, {sel: false, marcada: false, l: 'L'} ],
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
      texto: '¡¡TSopa de letras!! Encuentra las palabras, por ejemplo:',
      imagen: 'friends/pivot.gif',
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
