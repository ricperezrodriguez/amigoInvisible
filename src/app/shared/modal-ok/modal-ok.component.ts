import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-ok',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './modal-ok.component.html',
  styleUrl: './modal-ok.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalOkComponent {
  constructor(public dialogRef: MatDialogRef<ModalOkComponent>) {}
}
