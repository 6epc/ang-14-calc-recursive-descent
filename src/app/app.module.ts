import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalcButtonsComponent } from './calc-buttons/calc-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcButtonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
