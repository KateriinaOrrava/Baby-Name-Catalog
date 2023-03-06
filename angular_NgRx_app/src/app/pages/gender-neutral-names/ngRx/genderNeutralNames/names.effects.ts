import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { NamesService } from 'src/app/services/names.service';
import {
  deleteNameAPISuccess,
  invokeDeleteNameAPI,
  namesFetchAPISuccess,
  invokeSaveNewNameAPI,
  saveNewNameAPISuccess,
} from './names.actions';

@Injectable()
export class NamesEffect {
  constructor(private actions$: Actions, private namesService: NamesService) {}

  loadAllNames$ = createEffect(() => {
    return this.namesService
      .getNeutralNameData()
      .pipe(map((data) => namesFetchAPISuccess({ allNeutralNames: data })));
  });

  saveNewName$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeSaveNewNameAPI),
      switchMap((action) => {
        return this.namesService.addNeutralNameData(action.newNeutralName).pipe(
          map((data) => {
            // this.appStore.dispatch(
            //   setAPIStatus({
            //     apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
            //   })
            // );
            return saveNewNameAPISuccess({ newNeutralName: data });
          })
        );
      })
    );
  });

  deleteNameAPI$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeDeleteNameAPI),
      switchMap((actions) => {
        return this.namesService.deleteNeutralNameData(actions.name).pipe(
          map(() => {
            // this.appStore.dispatch(
            //   setAPIStatus({
            //     apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
            //   })
            // );
            return deleteNameAPISuccess({ name: actions.name });
          })
        );
      })
    );
  });
}
