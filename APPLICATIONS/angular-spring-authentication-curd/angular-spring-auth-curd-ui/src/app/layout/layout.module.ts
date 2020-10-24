import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, FlashMessagesModule.forRoot()],
  exports: [HeaderComponent, FooterComponent],
})
export class LayoutModule {}
