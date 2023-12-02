import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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
}
