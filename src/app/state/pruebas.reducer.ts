import { createReducer, on } from '@ngrx/store';
import { superada } from './pruebas.actions';

export const estadoInicial: boolean[] = [false, false, false, false];

export const pruebasReducer = createReducer(
  estadoInicial,
  on(superada, (state, { id }) => {
    const newState = [...state];
    newState[id] = true;
    return newState;
  }),
);
