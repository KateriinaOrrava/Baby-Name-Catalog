import { createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.action';

export const selectAppState = createFeatureSelector<AppState>('appState');
