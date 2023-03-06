import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  select, Store } from '@ngrx/store';
import { AppState } from 'src/app/app-ngrx/app.action';
import { GenderNeutralNames } from 'src/app/types/types';
import { invokeSaveNewNameAPI, setAPIStatus } from '../names.actions';
import { selectAppState } from '../names.selector';

@Component({
  selector: 'app-add-neutral-name',
  templateUrl: './add-neutral-name.component.html',
  styleUrls: ['./add-neutral-name.component.scss'],
})
export class AddNeutralNameComponent {
  constructor(
    private store: Store,
    private appStore: Store<AppState>,
  ) {}

  nameForm: GenderNeutralNames = {
    name: '',
    meaning: '',
  };
  @ViewChild('nameForm')
  form!: NgForm;
  ngOnInit(): void {
  }

  saveName() {
    this.store.dispatch(invokeSaveNewNameAPI({ newNeutralName: this.nameForm }));
    // let apiStatus$ = this.appStore.pipe(select(selectAppState));
    // apiStatus$.subscribe((appState) => {
    //   if (appState.apiStatus == 'success') {
    //     this.appStore.dispatch(
    //       setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
    //     );
    //   }
    // });
  }
}
