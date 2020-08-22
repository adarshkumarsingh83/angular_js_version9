import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightPipe } from './highlight.pipe';
import { HighlightcolorPipe } from './highlightcolor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HighlightPipe,
    HighlightcolorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
