import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { Router } from '@angular/router';

interface Letra {
  sel: Casilla;
  l: string;
}

enum Casilla {
  sel = 0,
  noSel = 1,
  marcada = 2,
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
  casilla = Casilla;
  letrasSeleccionas: string = '';

  private palabras = [
    'gayoso',
    'piñeiro',
    'mucha e nucha',
    'digocho eu',
    'larpeiros',
    'xabarin club',
    'land rober',
    'luar',
    'touriñan',
  ];

  private palabrasOrdenadas: string[] = [];

  /* prettier-ignore */
  arr: Letra[][] = [
    [{sel: Casilla.noSel, l: 'L'}, {sel: Casilla.noSel, l: 'I'}, {sel: Casilla.noSel, l: 'V'}, {sel: Casilla.noSel, l: 'N'}, {sel: Casilla.noSel, l: 'A'}, {sel: Casilla.noSel, l: 'Ñ'}, {sel: Casilla.noSel, l: 'I'}, {sel: Casilla.noSel, l: 'R'}, {sel: Casilla.noSel, l: 'U'}, {sel: Casilla.noSel, l: 'O'}, {sel: Casilla.noSel, l: 'T'}, ],
    [{sel: Casilla.noSel, l: 'O'}, {sel: Casilla.noSel, l: 'E'}, {sel: Casilla.noSel, l: 'T'}, {sel: Casilla.noSel, l: 'S'}, {sel: Casilla.noSel, l: 'E'}, {sel: Casilla.noSel, l: 'O'}, {sel: Casilla.noSel, l: 'A'}, {sel: Casilla.noSel, l: 'E'}, {sel: Casilla.noSel, l: 'R'}, {sel: Casilla.noSel, l: 'Y'}, {sel: Casilla.noSel, l: 'I'}, ],
    [{sel: Casilla.noSel, l: 'B'}, {sel: Casilla.noSel, l: 'E'}, {sel: Casilla.noSel, l: 'J'}, {sel: Casilla.noSel, l: 'W'}, {sel: Casilla.noSel, l: 'S'}, {sel: Casilla.noSel, l: 'E'}, {sel: Casilla.noSel, l: 'O'}, {sel: Casilla.noSel, l: 'R'}, {sel: Casilla.noSel, l: 'U'}, {sel: Casilla.noSel, l: 'Y'}, {sel: Casilla.noSel, l: 'H'}, ],
    [{sel: Casilla.noSel, l: 'E'}, {sel: Casilla.noSel, l: 'I'}, {sel: Casilla.noSel, l: 'Z'}, {sel: Casilla.noSel, l: 'O'}, {sel: Casilla.noSel, l: 'Q'}, {sel: Casilla.noSel, l: 'H'}, {sel: Casilla.noSel, l: 'S'}, {sel: Casilla.noSel, l: 'A'}, {sel: Casilla.noSel, l: 'T'}, {sel: Casilla.noSel, l: 'A'}, {sel: Casilla.noSel, l: 'Ñ'}, ],
    [{sel: Casilla.noSel, l: 'R'}, {sel: Casilla.noSel, l: 'D'}, {sel: Casilla.noSel, l: 'Y'}, {sel: Casilla.noSel, l: 'J'}, {sel: Casilla.noSel, l: 'C'}, {sel: Casilla.noSel, l: 'W'}, {sel: Casilla.noSel, l: 'D'}, {sel: Casilla.noSel, l: 'U'}, {sel: Casilla.noSel, l: 'E'}, {sel: Casilla.noSel, l: 'B'}, {sel: Casilla.noSel, l: 'G'}, ],
    [{sel: Casilla.noSel, l: 'A'}, {sel: Casilla.noSel, l: 'A'}, {sel: Casilla.noSel, l: 'A'}, {sel: Casilla.noSel, l: 'O'}, {sel: Casilla.noSel, l: 'P'}, {sel: Casilla.noSel, l: 'W'}, {sel: Casilla.noSel, l: 'S'}, {sel: Casilla.noSel, l: 'L'}, {sel: Casilla.noSel, l: 'S'}, {sel: Casilla.noSel, l: 'J'}, {sel: Casilla.noSel, l: 'R'}, ],
    [{sel: Casilla.noSel, l: 'G'}, {sel: Casilla.noSel, l: 'J'}, {sel: Casilla.noSel, l: 'G'}, {sel: Casilla.noSel, l: 'N'}, {sel: Casilla.noSel, l: 'O'}, {sel: Casilla.noSel, l: 'R'}, {sel: Casilla.noSel, l: 'I'}, {sel: Casilla.noSel, l: 'E'}, {sel: Casilla.noSel, l: 'Ñ'}, {sel: Casilla.noSel, l: 'I'}, {sel: Casilla.noSel, l: 'P'}, ],
    [{sel: Casilla.noSel, l: 'V'}, {sel: Casilla.noSel, l: 'I'}, {sel: Casilla.noSel, l: 'L'}, {sel: Casilla.noSel, l: 'A'}, {sel: Casilla.noSel, l: 'N'}, {sel: Casilla.noSel, l: 'D'}, {sel: Casilla.noSel, l: 'R'}, {sel: Casilla.noSel, l: 'O'}, {sel: Casilla.noSel, l: 'B'}, {sel: Casilla.noSel, l: 'E'}, {sel: Casilla.noSel, l: 'R'}, ],
    [{sel: Casilla.noSel, l: 'D'}, {sel: Casilla.noSel, l: 'A'}, {sel: Casilla.noSel, l: 'S'}, {sel: Casilla.noSel, l: 'O'}, {sel: Casilla.noSel, l: 'R'}, {sel: Casilla.noSel, l: 'I'}, {sel: Casilla.noSel, l: 'E'}, {sel: Casilla.noSel, l: 'P'}, {sel: Casilla.noSel, l: 'R'}, {sel: Casilla.noSel, l: 'A'}, {sel: Casilla.noSel, l: 'L'}, ],
    [{sel: Casilla.noSel, l: 'B'}, {sel: Casilla.noSel, l: 'U'}, {sel: Casilla.noSel, l: 'L'}, {sel: Casilla.noSel, l: 'C'}, {sel: Casilla.noSel, l: 'N'}, {sel: Casilla.noSel, l: 'I'}, {sel: Casilla.noSel, l: 'R'}, {sel: Casilla.noSel, l: 'A'}, {sel: Casilla.noSel, l: 'B'}, {sel: Casilla.noSel, l: 'A'}, {sel: Casilla.noSel, l: 'X'}, ],
    [{sel: Casilla.noSel, l: 'A'}, {sel: Casilla.noSel, l: 'H'}, {sel: Casilla.noSel, l: 'C'}, {sel: Casilla.noSel, l: 'U'}, {sel: Casilla.noSel, l: 'N'}, {sel: Casilla.noSel, l: 'E'}, {sel: Casilla.noSel, l: 'A'}, {sel: Casilla.noSel, l: 'H'}, {sel: Casilla.noSel, l: 'C'}, {sel: Casilla.noSel, l: 'U'}, {sel: Casilla.noSel, l: 'M'}, ],
  ]

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.palabras.forEach((palabra) => {
      this.palabrasOrdenadas.push(palabra.split('').sort().join('').trim().toUpperCase());
    });
    console.log(this.palabrasOrdenadas);
  }

  volver() {
    this.router.navigate(['']);
  }

  teclaSeleccionada(letra: Letra) {
    if (letra.sel) {
    }

    if (letra.sel === Casilla.sel) {
      letra.sel = Casilla.noSel;
      this.letrasSeleccionas = this.letrasSeleccionas.replace(letra.l, '');
    } else if (letra.sel === Casilla.noSel) {
      letra.sel = Casilla.sel;
      this.letrasSeleccionas = this.letrasSeleccionas.concat(letra.l);
    }

    console.log(this.letrasSeleccionas);
  }

  comprobarPalabra() {
    const p = this.letrasSeleccionas.split('').sort().join('');

    if (this.palabrasOrdenadas.includes(p)) {
      this.arr = this.arr.map((fila) => {
        return fila.map((col) => {
          if (col.sel === Casilla.sel) {
            return {
              ...col,
              sel: Casilla.marcada,
            };
          } else {
            return col;
          }
        });
      });
    } else {
      this.arr = this.arr.map((fila) => {
        return fila.map((col) => {
          if (col.sel === Casilla.sel) {
            return {
              ...col,
              sel: Casilla.noSel,
            };
          } else {
            return col;
          }
        });
      });
    }

    this.letrasSeleccionas = '';
  }
}
