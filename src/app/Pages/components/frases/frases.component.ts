import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { ModalService } from 'src/app/shared/modal.service';
import { superada } from 'src/app/state/pruebas.actions';

interface Frase {
  quien: string;
  opciones: Opciones[];
}

interface Opciones {
  palabra: string;
  ok: boolean;
}

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule],
  templateUrl: './frases.component.html',
  styleUrl: './frases.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class frasesComponent implements OnInit {
  frases: Frase[] = [
    {
      quien: 'Rachel',
      opciones: [
        { palabra: 'flirt', ok: false },
        { palabra: 'love', ok: false },
        { palabra: 'dress', ok: true },
        { palabra: 'joke', ok: false },
        { palabra: 'sing', ok: false },
        { palabra: 'clean', ok: false },
      ],
    },
    {
      quien: 'Joey',
      opciones: [
        { palabra: 'flirt', ok: true },
        { palabra: 'love', ok: false },
        { palabra: 'dress', ok: false },
        { palabra: 'joke', ok: false },
        { palabra: 'sing', ok: false },
        { palabra: 'clean', ok: false },
      ],
    },
    {
      quien: 'Monica',
      opciones: [
        { palabra: 'flirt', ok: false },
        { palabra: 'love', ok: false },
        { palabra: 'dress', ok: false },
        { palabra: 'joke', ok: false },
        { palabra: 'sing', ok: false },
        { palabra: 'clean', ok: true },
      ],
    },
    {
      quien: 'Phoebe',
      opciones: [
        { palabra: 'flirt', ok: false },
        { palabra: 'love', ok: false },
        { palabra: 'dress', ok: false },
        { palabra: 'joke', ok: false },
        { palabra: 'sing', ok: true },
        { palabra: 'clean', ok: false },
      ],
    },
    {
      quien: 'Chandler',
      opciones: [
        { palabra: 'flirt', ok: false },
        { palabra: 'love', ok: false },
        { palabra: 'dress', ok: false },
        { palabra: 'joke', ok: true },
        { palabra: 'sing', ok: false },
        { palabra: 'clean', ok: false },
      ],
    },
    {
      quien: 'Ross',
      opciones: [
        { palabra: 'flirt', ok: false },
        { palabra: 'love', ok: true },
        { palabra: 'dress', ok: false },
        { palabra: 'joke', ok: false },
        { palabra: 'sing', ok: false },
        { palabra: 'clean', ok: false },
      ],
    },
  ];

  frasesForm = new FormGroup({});

  constructor(
    private _modalService: ModalService,
    private _store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this._modalService.modalText({
      titulo: 'EXPLICACIÓN',
      texto: 'Rellena las frases!!',
      imagen: 'friends/piensa.gif',
      button: 'Comenzar',
    });

    this.frases.forEach((_, index) => {
      const control = this.frasesForm.addControl(
        index.toString(),
        new FormControl<string | null>(null, [Validators.required, this.customValidator]),
      );
    });
  }

  customValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const value = control.value as Opciones;
    if (value?.ok) {
      return null;
    }
    return { customError: true };
  }

  cambio(opcion: MatSelectChange) {
    if (opcion.value.ok) {
      this._modalService.modalText({
        titulo: null,
        texto: 'Correcto!!!',
        imagen: `friends/correcto.gif`,
        button: null,
      });
    }

    if (this.frasesForm.valid) {
      this._modalService.mostrarModalOk();
      this._store.dispatch(superada({ id: 3 }));
    }
  }
}
