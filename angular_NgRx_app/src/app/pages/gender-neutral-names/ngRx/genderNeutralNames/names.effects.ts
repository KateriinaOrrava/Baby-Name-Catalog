import { Injectable } from '@angular/core';
import { selectNeutralNames } from './names.selector';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, switchMap, withLatestFrom } from 'rxjs';
import { NamesService } from 'src/app/services/names.service';
import {
  deleteNameAPISuccess,
  invokeDeleteNameAPI,
  invokeNamesAPI,
  namesFetchAPISuccess,
  invokeSaveNewNameAPI,
  saveNewNameAPISuccess,
  setAPIStatus,
} from './names.actions';
import { AppState } from '../../../../app-ngrx/appState';

@Injectable()
export class NamesEffect {
  constructor(
    private actions$: Actions,
    private namesService: NamesService,
    private store: Store,
    private appStore: Store<AppState>
  ) {}

  loadAllNames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeNamesAPI),
      withLatestFrom(this.store.pipe(select(selectNeutralNames))),
      mergeMap(([, nameFromStore]) => {
        if (nameFromStore.length > 0) {
          return EMPTY;
        }
        return this.namesService
          .getNeutralNameData()
          .pipe(map((data) => namesFetchAPISuccess({ allNeutralNames: data })));
      })
    )
  );

  saveNewBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeSaveNewNameAPI),
      switchMap((action) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        return this.namesService.addNeutralNameData(action.newNeutralName).pipe(
          map((data) => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
              })
            );
            return saveNewNameAPISuccess({ newNeutralName: data });
          })
        );
      })
    );
  });

  deleteBooksAPI$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeDeleteNameAPI),
      switchMap((actions) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        return this.namesService.deleteNeutralNameData(actions.name).pipe(
          map(() => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
              })
            );
            return deleteNameAPISuccess({ name: actions.name });
          })
        );
      })
    );
  });
}
