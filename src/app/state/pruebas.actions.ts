import { createAction, props } from '@ngrx/store';

export const inicializarLocalStorage = createAction(
  '[PRUEBAS] Inicializar Pruebas',
  props<{ estadoLocalStorage: boolean[] }>(),
);

export const superada = createAction('[PRUEBAS] Prueba Superada', props<{ id: number }>());

export const resetearPruebas = createAction('[PRUEBAS] Resetear Pruebas');
