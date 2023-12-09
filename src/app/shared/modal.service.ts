import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { delay, of, take } from 'rxjs';
import { ModalFailComponent } from './modal-fail/modal-fail.component';
import { ModalOkComponent } from './modal-ok/modal-ok.component';
import { ModalTextComponent } from './modal-text/modal-text.component';

export interface DataModal {
  titulo: string | null;
  texto: string;
  imagen: string;
  button: string | null;
}
@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(public dialog: MatDialog) {}

  mostrarModal(modal: ComponentType<unknown>) {
    this.dialog.open(modal, {
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '200ms',
    });
  }

  mostrarModalOk() {
    const ref = this.dialog.open(ModalOkComponent, {
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '200ms',
    });

    of(null)
      .pipe(take(1), delay(1500))
      .subscribe(() => ref.close());
  }

  mostrarModalFail() {
    const ref = this.dialog.open(ModalFailComponent, {
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '200ms',
    });

    of(null)
      .pipe(take(1), delay(5000))
      .subscribe(() => ref.close());
  }

  modalText(datos: DataModal) {
    this.dialog.open(ModalTextComponent, {
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '200ms',
      data: datos,
    });
  }
}
