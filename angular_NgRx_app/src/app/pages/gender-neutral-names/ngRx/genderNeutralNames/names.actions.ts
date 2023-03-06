import { createAction, props } from '@ngrx/store';
import { GenderNeutralNames } from 'src/app/types/types';
import { AppState } from 'src/app/app-ngrx/app.action';

//This action is dispatched to set the status of the API call to either success or failure. 
//It carries an AppState object as payload data.
export const setAPIStatus = createAction(
  '[API] success or failure status',
  props<{ apiStatus: AppState }>()
);

//This action is dispatched to fetch gender-neutral names from the backend API.
export const invokeNamesAPI = createAction(
  '[Names API] Invoke Names Fetch API'
);

// This action is dispatched when the API call to fetch gender-neutral names succeeds. 
//It carries an array of GenderNeutralNames objects as payload data.
export const namesFetchAPISuccess = createAction(
  '[Names API] Fetch API Success',
  props<{ allNeutralNames: GenderNeutralNames[] }>()
);

// This action is dispatched to save a new gender-neutral name to the backend API. 
// It carries a GenderNeutralNames object as payload data.
export const invokeSaveNewNameAPI = createAction(
  '[Names API] Invoke save new name api',
  props<{ newNeutralName: GenderNeutralNames }>()
);

//This action is dispatched when the API call to save a new gender-neutral name succeeds. 
// It carries a GenderNeutralNames object as payload data.
export const saveNewNameAPISuccess = createAction(
  '[Names API] save new name api success',
  props<{ newNeutralName: GenderNeutralNames }>()
);

//This action is dispatched to delete a gender-neutral name from the backend API. 
// It carries the name of the name to be deleted as payload data.
export const invokeDeleteNameAPI = createAction(
  '[Names API] Invoke delete name api',
  props<{name:string}>()
);
 
export const deleteNameAPISuccess = createAction(
  '[Names API] deleted name api success',
  props<{name:string}>()
);



// import { createAction, props } from '@ngrx/store';
// import { GenderNeutralNames } from 'src/app/types/types';

// export const loadYourNames = createAction('[Your Data] Load Your Data');
// export const loadYourNamesSuccess = createAction('[Your Data] Load Your Data Success', props<{ data: GenderNeutralNames[] }>());
// export const loadYourNamesFailure = createAction('[Your Data] Load Your Data Failure', props<{ error: any }>());

// export const addYourName = createAction('[Your Data] Add Your Data', props<{ data: GenderNeutralNames }>());
// export const addYourNameSuccess = createAction('[Your Data] Add Your Data Success', props<{ data: GenderNeutralNames }>());
// export const addYourNameFailure = createAction('[Your Data] Add Your Data Failure', props<{ error: any }>());

// export const deleteYourName = createAction('[Your Data] Delete Your Data', props<{ name: string }>());
// export const deleteYourNameSuccess = createAction('[Your Data] Delete Your Data Success', props<{ name: string }>());
// export const deleteYourNameFailure = createAction('[Your Data] Delete Your Data Failure', props<{ error: any }>());