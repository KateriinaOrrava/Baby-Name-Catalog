import { createAction, props } from '@ngrx/store';

export type AppState = {
  apiStatus: string;
  apiResponseMessage: string;
}

export const setAPIStatus = createAction(
  '[API] success or failure status',
  props<{ apiStatus: AppState }>()
);
