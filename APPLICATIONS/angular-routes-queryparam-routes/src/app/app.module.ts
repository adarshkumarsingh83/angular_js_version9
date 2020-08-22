import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvalidUrlComponent } from './invalid-url/invalid-url.component';
import { WishComponent } from './wish/wish.component';

@NgModule({
  declarations: [
    AppComponent,
    InvalidUrlComponent,
    WishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
