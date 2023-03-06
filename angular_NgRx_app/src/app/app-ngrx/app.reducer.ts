import { createReducer, on } from '@ngrx/store';
import { setAPIStatus } from './app.action';
import { AppState } from './app.action';

export const initialState: Readonly<AppState> = {
  apiResponseMessage: '',
  apiStatus: '',
};

export const appReducer = createReducer(
  initialState,
  on(setAPIStatus, (state, { apiStatus }) => {
    return {
      ...state,
      ...apiStatus,
    };
  })
);
