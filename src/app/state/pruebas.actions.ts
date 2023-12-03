import { createAction, props } from '@ngrx/store';

export const superada = createAction('[PRUEBAS] Prueba Superada', props<{ id: number }>());
