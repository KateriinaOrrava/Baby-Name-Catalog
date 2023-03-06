import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { switchMap } from 'rxjs';
import { AppState } from 'src/app/app-ngrx/appState';
import { GenderNeutralNames } from 'src/app/types/types';
import { invokeSaveNewNameAPI, setAPIStatus } from '../names.actions';
import { selectAppState, selectNameByName } from '../names.selector';

@Component({
  selector: 'app-add-neutral-name',
  templateUrl: './add-neutral-name.component.html',
  styleUrls: ['./add-neutral-name.component.scss'],
})
export class AddNeutralNameComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store,
    private appStore: Store<AppState>
  ) {}

  nameForm: GenderNeutralNames = {
    name: '',
    meaning: '',
  };

  ngOnInit(): void {
  }

  saveName() {
    this.store.dispatch(invokeSaveNewNameAPI({ newNeutralName: this.nameForm }));
    let apiStatus$ = this.appStore.pipe(select(selectAppState));
    apiStatus$.subscribe((appState) => {
      if (appState.apiStatus == 'success') {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
      }
    });
  }
}
