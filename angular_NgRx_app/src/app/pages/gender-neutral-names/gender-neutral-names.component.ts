import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
// import { addName, deleteName, getNames } from './ngRx/names.actions';
import { GenderNeutralNames } from 'src/app/types/types';
import {
  invokeDeleteNameAPI,
  invokeNamesAPI,
  setAPIStatus,
} from './ngRx/genderNeutralNames/names.actions';
import {
  selectAppState,
  selectNeutralNames,
} from './ngRx/genderNeutralNames/names.selector';
import { AppState } from 'src/app/app-ngrx/appState';
@Component({
  selector: 'app-gender-neutral-names',
  templateUrl: './gender-neutral-names.component.html',
  styleUrls: ['./gender-neutral-names.component.scss'],
})
export class GenderNeutralNamesComponent implements OnInit {
  constructor(private store: Store, private appStore: Store<AppState>) {}

  names$ = this.store.pipe(select(selectNeutralNames));

  nameToDelete: string = '';

  ngOnInit(): void {
    this.store.dispatch(invokeNamesAPI());
  }

  deleteName(name: string) {
    this.store.dispatch(
      invokeDeleteNameAPI({
        name: name,
      })
    );
    let apiStatus$ = this.appStore.pipe(select(selectAppState));
    apiStatus$.subscribe((apState) => {
      if (apState.apiStatus == 'success') {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
      }
    });
  }
}
