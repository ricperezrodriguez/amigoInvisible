import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { ModalService } from 'src/app/shared/modal.service';

interface Lugar {
  resBien: string;
  opciones: Opciones[];
}

interface Opciones {
  lugar: string;
  ok: boolean;
}

@Component({
  selector: 'app-prueba-fotos',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule],
  templateUrl: './prueba-fotos.component.html',
  styleUrl: './prueba-fotos.component.scss',
})
export class PruebaFotosComponent implements OnInit {
  lugares: Lugar[] = [
    {
      resBien: 'Woof!',
      opciones: [
        { lugar: 'barcelona', ok: false },
        { lugar: 'bilbao', ok: false },
        { lugar: 'londres', ok: false },
        { lugar: 'Sevilla', ok: true },
      ],
    },
    {
      resBien: 'Woof!',
      opciones: [
        { lugar: 'barcelona', ok: false },
        { lugar: 'bilbao', ok: false },
        { lugar: 'londres', ok: true },
        { lugar: 'Sevilla', ok: false },
      ],
    },
    {
      resBien: 'Woof!',
      opciones: [
        { lugar: 'barcelona', ok: false },
        { lugar: 'bilbao', ok: true },
        { lugar: 'londres', ok: false },
        { lugar: 'Sevilla', ok: false },
      ],
    },
    {
      resBien: 'Woof!',
      opciones: [
        { lugar: 'barcelona', ok: false },
        { lugar: 'bilbao', ok: false },
        { lugar: 'londres', ok: false },
        { lugar: 'Sevilla', ok: true },
      ],
    },
    {
      resBien: 'Woof!',
      opciones: [
        { lugar: 'barcelona', ok: false },
        { lugar: 'bilbao', ok: false },
        { lugar: 'londres', ok: true },
        { lugar: 'Sevilla', ok: false },
      ],
    },
    {
      resBien: 'Woof!',
      opciones: [
        { lugar: 'barcelona', ok: false },
        { lugar: 'bilbao', ok: true },
        { lugar: 'londres', ok: false },
        { lugar: 'Sevilla', ok: false },
      ],
    },
    {
      resBien: 'Woof!',
      opciones: [
        { lugar: 'barcelona', ok: false },
        { lugar: 'bilbao', ok: false },
        { lugar: 'londres', ok: false },
        { lugar: 'Sevilla', ok: true },
      ],
    },
    {
      resBien: 'Woof!',
      opciones: [
        { lugar: 'barcelona', ok: false },
        { lugar: 'bilbao', ok: false },
        { lugar: 'londres', ok: true },
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

  cambio(opcion: Opciones) {
    console.log(opcion);
    if (opcion.ok) {
      this._modalService.modalText({
        texto: 'Correcto!!! Aqui tienes la foto:',
        imagen: 'lugares/1.jpg',
      });
    }
  }
}
