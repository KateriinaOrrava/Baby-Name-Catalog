import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './pages/counter/reducer/counter.reducer';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { SwitchComponent } from './components/switch/switch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GenderNeutralNamesComponent } from './pages/gender-neutral-names/gender-neutral-names.component';
import { HomeComponent } from './pages/home/home.component';
import { MyCounterComponent } from './pages/counter/counter.component';
import { namesReducer } from './pages/gender-neutral-names/ngRx/genderNeutralNames/names.reducer';
import { EffectsModule } from '@ngrx/effects';
import { NamesEffect } from './pages/gender-neutral-names/ngRx/genderNeutralNames/names.effects';
import { appReducer } from './app-ngrx/app.reducer';
import { AddNeutralNameComponent } from './pages/gender-neutral-names/ngRx/genderNeutralNames/add-neutral-name/add-neutral-name.component';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormComponent,
    SwitchComponent,
    GenderNeutralNamesComponent,
    HomeComponent,
    MyCounterComponent,
    AddNeutralNameComponent,
  ],
  imports: [
    StoreModule.forRoot({ appState: appReducer }),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ count: counterReducer }),
    StoreModule.forFeature('neutralNames', namesReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([NamesEffect]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
