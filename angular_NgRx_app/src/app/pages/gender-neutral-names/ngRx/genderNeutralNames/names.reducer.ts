import { createReducer, on } from '@ngrx/store';
// import { addName, deleteName, getNames } from './names.actions';

import { GenderNeutralNames } from 'src/app/types/types';
import { deleteNameAPISuccess, namesFetchAPISuccess, saveNewNameAPISuccess } from './names.actions';

export const initialState: ReadonlyArray<GenderNeutralNames> = [];

export const namesReducer = createReducer(
  initialState,
  on(namesFetchAPISuccess, (state, { allNeutralNames }) => {
    return allNeutralNames;
  }),
  on(saveNewNameAPISuccess, (state, { newNeutralName }) => {
    let newState = [...state];
    newState.unshift(newNeutralName);
    return newState;
  }),
  on(deleteNameAPISuccess, (state, { name }) => {
    let newState =state.filter((_) => _.name != name);
    return newState;
  })
);


