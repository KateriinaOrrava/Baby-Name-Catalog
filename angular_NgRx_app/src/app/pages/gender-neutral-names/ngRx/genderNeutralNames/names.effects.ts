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
import { AppState } from 'src/app/app-ngrx/app.action';

@Injectable()
export class NamesEffect {
  constructor(
    private actions$: Actions,
    private namesService: NamesService,
    private store: Store,
    private appStore: Store<AppState>
  ) {}

  loadAllNames$ = createEffect(
    () => {
      return this.namesService
        .getNeutralNameData()
        .pipe(map((data) => namesFetchAPISuccess({ allNeutralNames: data })));
    }
  );

  saveNewBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeSaveNewNameAPI),
      switchMap((action) => {
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
