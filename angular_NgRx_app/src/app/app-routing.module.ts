import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MyCounterComponent } from './pages/counter/counter.component';
import { GenderNeutralNamesComponent } from './pages/gender-neutral-names/gender-neutral-names.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'gender-neutral-names', component: GenderNeutralNamesComponent},
    {path: 'about', component: HomeComponent},
    {path: 'girl-boy-names', component: AppComponent},
    {path: 'counter', component: MyCounterComponent},
  ]),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
