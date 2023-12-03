import { ActionReducerMap } from '@ngrx/store';
import { pruebasReducer } from './state/pruebas.reducer';

export interface AppState {
  estadoPruebas: boolean[];
}

export const appReducers: ActionReducerMap<AppState> = {
  estadoPruebas: pruebasReducer,
};
