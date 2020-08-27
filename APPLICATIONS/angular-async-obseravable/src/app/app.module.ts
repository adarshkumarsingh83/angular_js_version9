import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OservableProgressComponent } from './oservable-progress/oservable-progress.component';
import { InvalidUrlComponent } from './invalid-url/invalid-url.component';

@NgModule({
  declarations: [
    AppComponent,
    OservableProgressComponent,
    InvalidUrlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
