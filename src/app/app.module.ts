import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AjaxComponent } from './ajax/ajax.component';
import { PokerComponent } from './components/poker/poker.component';

@NgModule({
  declarations: [
    AppComponent,
    PokerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
