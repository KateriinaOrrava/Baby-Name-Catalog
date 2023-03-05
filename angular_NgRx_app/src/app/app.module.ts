import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './pages/counter/reducer/counter.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { SwitchComponent } from './components/switch/switch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GenderNeutralNamesComponent } from './pages/gender-neutral-names/gender-neutral-names.component';
import { HomeComponent } from './pages/home/home.component';
import { MyCounterComponent } from './pages/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormComponent,
    SwitchComponent,
    GenderNeutralNamesComponent,
    HomeComponent,
    MyCounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ count: counterReducer }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
