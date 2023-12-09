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

interface Lugar {
  resBien: string;
  opciones: Opciones[];
}

interface Opciones {
  lugar: string;
  ok: boolean;
  rutaFoto?: string;
}

@Component({
  selector: 'app-prueba-fotos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule],
  templateUrl: './prueba-fotos.component.html',
  styleUrl: './prueba-fotos.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PruebaFotosComponent implements OnInit {
  lugares: Lugar[] = [
    {
      resBien: 'Estaba claro, esa cabina...',
      opciones: [
        { lugar: 'Barcelona', ok: false },
        { lugar: 'Bilbao', ok: false },
        { lugar: 'Londres', ok: true, rutaFoto: '1' },
        { lugar: 'Sevilla', ok: false },
      ],
    },
    {
      resBien: 'Estaba tirao!',
      opciones: [
        { lugar: 'Como', ok: false },
        { lugar: 'Alemania', ok: false },
        { lugar: 'Milano', ok: true, rutaFoto: '2' },
        { lugar: 'Sevilla', ok: false },
      ],
    },
    {
      resBien: 'Ese lago y esas montañas...',
      opciones: [
        { lugar: 'Barcelona', ok: false },
        { lugar: 'Como', ok: true, rutaFoto: '3' },
        { lugar: 'Verona', ok: false },
        { lugar: 'Sevilla', ok: false },
      ],
    },
    {
      resBien: 'Mucho rojo...',
      opciones: [
        { lugar: 'Paris', ok: true, rutaFoto: '4' },
        { lugar: 'Bilbao', ok: false },
        { lugar: 'Cudillero', ok: false },
        { lugar: 'Sevilla', ok: false },
      ],
    },
    {
      resBien: 'SEVILLA!!!!!!',
      opciones: [
        { lugar: 'barcelona', ok: false },
        { lugar: 'Bilbao', ok: false },
        { lugar: 'Londres', ok: false },
        { lugar: 'Sevilla', ok: true, rutaFoto: '5' },
      ],
    },
    {
      resBien: 'Una salchicha siempre se recuerda!',
      opciones: [
        { lugar: 'Londres', ok: true, rutaFoto: '6' },
        { lugar: 'Pontevedra', ok: false },
        { lugar: 'Porto', ok: false },
        { lugar: 'Sevilla', ok: false },
      ],
    },
    {
      resBien: 'Es lo que hay que ver aquí!',
      opciones: [
        { lugar: 'Milano', ok: true, rutaFoto: '7' },
        { lugar: 'Caldas', ok: false },
        { lugar: 'Vigo', ok: false },
        { lugar: 'Sevilla', ok: false },
      ],
    },
    {
      resBien: 'Ahí está!',
      opciones: [
        { lugar: 'Verona', ok: false },
        { lugar: 'Bilbao', ok: false },
        { lugar: 'Venecia', ok: true, rutaFoto: '8' },
        { lugar: 'Sevilla', ok: false },
      ],
    },
  ];

  fotoForm = new FormGroup({});

  constructor(
    private _modalService: ModalService,
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this._modalService.modalText({
      titulo: 'EXPLICACIÓN',
      texto:
        'En esta prueba vas a ver una pequeña parte de una foto. ¡¡Adivina en que lugar fue hecha!! ¡¡Incluso pudo ser en Sevilla!!',
      imagen: 'cerdo.gif',
      button: 'Comenzar',
    });

    this.lugares.forEach((lugar, index) => {
      const control = this.fotoForm.addControl(
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
        texto: 'Correcto!!! Aqui tienes la foto:',
        imagen: `lugares/${opcion.value.rutaFoto}.jpg`,
        button: null,
      });
    }

    if (this.fotoForm.valid) {
      this.store.dispatch(superada({ id: 3 }));
    }
  }
}
