import { createReducer, on } from '@ngrx/store';
// import { addName, deleteName, getNames } from './names.actions';

import { GenderNeutralNames } from 'src/app/types/types';
import { deleteNameAPISuccess, namesFetchAPISuccess, saveNewNameAPISuccess } from './names.actions';

export const initialState: ReadonlyArray<GenderNeutralNames> = [];

export const namesReducer = createReducer(
  initialState,

  // This action is triggered when the API call to fetch all the gender-neutral names is successful. 
  // It replaces the existing state with the new list of names returned by the API call.
  on(namesFetchAPISuccess, (state, { allNeutralNames }) => {
    return allNeutralNames;
  }),

  // This action is triggered when a new gender-neutral name is successfully added via an API call.
  // It creates a new array that includes the new name at the beginning and returns it as the new state.
  on(saveNewNameAPISuccess, (state, { newNeutralName }) => {
    let newState = [...state];
    newState.unshift(newNeutralName);
    return newState;
  }),

  //This action is triggered when a gender-neutral name is successfully deleted via an API call.
  // It creates a new array that excludes the deleted name and returns it as the new state.
  on(deleteNameAPISuccess, (state, { name }) => {
    let newState =state.filter((_) => _.name != name);
    return newState;
  })
);
// import { createReducer, on } from '@ngrx/store';
// import {
//   loadYourNames,
//   loadYourNamesSuccess,
//   loadYourNamesFailure,
//   addYourName,
//   addYourNameSuccess,
//   addYourNameFailure,
//   deleteYourName,
//   deleteYourNameSuccess,
//   deleteYourNameFailure,
// } from './names.actions';
// import { GenderNeutralNames } from 'src/app/types/types';

// export interface YourDataState {
//   data: GenderNeutralNames[];
//   loading: boolean;
//   error: any;
// }

// export const initialState: YourDataState = {
//   data: [],
//   loading: false,
//   error: null,
// };

// export const yourDataReducer = createReducer(
//   initialState,
//   on(loadYourNames, (state) => ({ ...state, loading: true })),
//   on(loadYourNamesSuccess, (state, { data }) => ({
//     ...state,
//     data,
//     loading: false,
//   })),

//   on(loadYourNamesFailure, (state, { error }) => ({ ...state, error, loading: false })),
//   on(addYourName, (state) => ({ ...state, loading: true })),
//   on(addYourNameSuccess, (state, { data }) => ({
//     ...state,
//     data: [...state.data, data],
//     loading: false,
//   })),
//   on(addYourNameFailure, (state, { error }) => ({ ...state, error, loading: false })),

//   on(deleteYourName, (state) => ({ ...state, loading: true })),
//   on(deleteYourNameSuccess, (state, { name }) => ({
//     ...state,
//     data: state.data.filter((item) => item.name !== name),
//     loading: false,
//   })),
//   on(deleteYourNameFailure, (state, { error }) => ({ ...state, error, loading: false })),
// );


