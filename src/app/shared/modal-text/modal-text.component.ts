import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { DataModal } from '../modal.service';

@Component({
  selector: 'app-modal-ok',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './modal-text.component.html',
  styleUrl: './modal-text.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalTextComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DataModal) {}
}
