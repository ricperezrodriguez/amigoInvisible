import { createReducer, on } from '@ngrx/store';
import { inicializarLocalStorage, resetearPruebas, superada } from './pruebas.actions';

export const estadoInicial: boolean[] = [false, false, false, false, false];

export const pruebasReducer = createReducer(
  estadoInicial,

  on(superada, (state, { id }) => {
    const newState = [...state];
    newState[id] = true;
    return newState;
  }),

  on(inicializarLocalStorage, (state, { estadoLocalStorage }) => [...estadoLocalStorage]),

  on(resetearPruebas, (state) => [...estadoInicial]),
);
