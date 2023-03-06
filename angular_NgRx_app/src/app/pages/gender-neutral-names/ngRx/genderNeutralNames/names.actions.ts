import { createAction, props } from '@ngrx/store';
import { GenderNeutralNames } from 'src/app/types/types';
import { AppState } from '../../../../app-ngrx/appState';

export const invokeNamesAPI = createAction(
  '[Names API] Invoke Names Fetch API'
);

export const namesFetchAPISuccess = createAction(
  '[Names API] Fetch API Success',
  props<{ allNeutralNames: GenderNeutralNames[] }>()
);

export const setAPIStatus = createAction(
  '[API] success or failure status',
  props<{ apiStatus: AppState }>()
);

export const invokeSaveNewNameAPI = createAction(
  '[Names API] Invoke save new book api',
  props<{ newNeutralName: GenderNeutralNames }>()
);

export const saveNewNameAPISuccess = createAction(
  '[Names API] save new book api success',
  props<{ newNeutralName: GenderNeutralNames }>()
);

export const invokeDeleteNameAPI = createAction(
  '[Names API] Invoke delete name api',
  props<{name:string}>()
);
 
export const deleteNameAPISuccess = createAction(
  '[Names API] deleted name api success',
  props<{name:string}>()
);
