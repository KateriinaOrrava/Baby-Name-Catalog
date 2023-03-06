import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { GenderNeutralNames } from 'src/app/types/types';
@Component({
  selector: 'app-gender-neutral-names',
  templateUrl: './gender-neutral-names.component.html',
  styleUrls: ['./gender-neutral-names.component.scss']
})
export class GenderNeutralNamesComponent {
  genderNeutralNames$: Observable<GenderNeutralNames[]>;
}
