import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { ModalService } from 'src/app/shared/modal.service';
import { superada } from 'src/app/state/pruebas.actions';

@Component({
  selector: 'app-asociar',
  standalone: true,
  imports: [CommonModule, CdkDropList, CdkDrag, MatButtonModule],
  templateUrl: './asociar.component.html',
  styleUrl: './asociar.component.scss',
})
export class AsociarComponent implements OnInit {
  personas = ['antonio', 'brenda', 'kike', 'lico', 'maite', 'miriam', 'olalla', 'ricardo', 'xiana'];
  cosas = ['carrito', 'jeringa', 'movil', 'gorra', 'perro', 'bustamante', 'pantalla', 'skate', 'neumatico'];
  arrTotal!: string[];

  constructor(
    private _modalService: ModalService,
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.arrTotal = [...this.personas, ...this.cosas].sort(() => 0.5 - Math.random());
    this._modalService.modalText({
      texto:
        'Bien... En esta segunda prueba tienes que ordenar cada persona con un objeto relacionado. Arrastra y ordena PERSONA - OBJETO',
      imagen: 'minions.gif',
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.arrTotal, event.previousIndex, event.currentIndex);
  }

  comprobar() {
    if (this.resultadoCorrecto()) {
      this.store.dispatch(superada({ id: 1 }));
      this._modalService.mostrarModalOk();
    } else {
      this._modalService.mostrarModalFail();
    }
  }

  private resultadoCorrecto(): boolean {
    for (let i = 0; i < this.arrTotal.length - 1; i += 2) {
      const idx = this.personas.indexOf(this.arrTotal[i]);
      if (this.arrTotal[i + 1] !== this.cosas[idx]) {
        return false;
      }
    }
    return true;
  }
}
