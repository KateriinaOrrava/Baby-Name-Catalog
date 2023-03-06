import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GenderNeutralNames } from 'src/app/types/types';
import { AppState } from 'src/app/app-ngrx/app.action';

export const selectNeutralNames =
  createFeatureSelector<GenderNeutralNames[]>('neutralNames');

export const selectAppState = createFeatureSelector<AppState>('appState');

export const selectNameByName = (name: string) =>
  createSelector(selectNeutralNames, (names: GenderNeutralNames[]) => {
    let nameByName = names.filter((_) => _.name == name);
    if (nameByName.length == 0) {
      return null;
    }
    return nameByName[0];
  });
