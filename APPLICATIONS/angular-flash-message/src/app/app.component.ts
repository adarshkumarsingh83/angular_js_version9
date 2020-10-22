import { Component } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-flash-message';
  constructor(private flashMessage: FlashMessagesService) {}

  showSucessFlash() {
    // 1st parameter is a flash message text
    // 2nd parameter is optional. You can pass object with options.
    this.flashMessage.show('Welcome To espark adarsh', {
      cssClass: 'alert-success',
      timeout: 2000,
    });
  }

  public showDangerFlash(): void {
    // 1st parameter is a flash message text
    // 2nd parameter is optional. You can pass object with options.
    this.flashMessage.show('Welcome To espark adarsh', {
      cssClass: 'alert-danger',
      timeout: 2000,
    });
  }

  public showInfoFlash(): void {
    // 1st parameter is a flash message text
    // 2nd parameter is optional. You can pass object with options.
    this.flashMessage.show('Welcome To espark adarsh', {
      cssClass: 'alert-info',
      timeout: 2000,
    });
  }

  public showWarningFlash(): void {
    // 1st parameter is a flash message text
    // 2nd parameter is optional. You can pass object with options.
    this.flashMessage.show('Welcome To espark adarsh', {
      cssClass: 'alert-warning',
      timeout: 2000,
    });
  }

  public showLightFlash(): void {
    // 1st parameter is a flash message text
    // 2nd parameter is optional. You can pass object with options.
    this.flashMessage.show('Welcome To espark adarsh', {
      cssClass: 'alert-light',
      timeout: 2000,
    });
  }

  public showDarkFlash(): void {
    // 1st parameter is a flash message text
    // 2nd parameter is optional. You can pass object with options.
    this.flashMessage.show('Welcome To espark adarsh', {
      cssClass: 'alert-dark',
      timeout: 2000,
    });
  }

  public showPrimaryFlash(): void {
    // 1st parameter is a flash message text
    // 2nd parameter is optional. You can pass object with options.
    this.flashMessage.show('Welcome To espark adarsh', {
      cssClass: 'alert-primary',
      timeout: 2000,
    });
  }

  public showSecoundaryFlash(): void {
    // 1st parameter is a flash message text
    // 2nd parameter is optional. You can pass object with options.
    this.flashMessage.show('Welcome To espark adarsh', {
      cssClass: 'alert-secondary',
      timeout: 2000,
    });
  }
}
