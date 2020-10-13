import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityUtilService } from './security/security-util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-spring-authentication';
  public isLogoutButtonVisible = true;
  public isRegistrationButtonVisible = true;
  router: Router;
  securityUtilService: SecurityUtilService;

  constructor(router: Router, securityUtilService: SecurityUtilService) {
    this.securityUtilService = securityUtilService;
    this.router = router;
  }

  logout() {
    console.log(`AppComponent.logout()`);
    this.securityUtilService.removeStoreage();
    this.router.navigate(['/login'], {
      queryParams: { action: 'logout' },
    });
    this.isRegistrationButtonVisible = true;
  }

  registration() {
    console.log(`AppComponent.registration()`);
    this.router.navigate(['/registration'], {
      queryParams: { action: 'registration' },
    });
    this.isRegistrationButtonVisible = false;
    this.isLogoutButtonVisible = false;
  }

  public setLogoutButtonVisible(isLogoutButtonVisible: boolean) {
    this.isLogoutButtonVisible = isLogoutButtonVisible;
  }
  public setRegistrationButtonVisible(isRegistrationButtonVisible: boolean) {
    this.isRegistrationButtonVisible = isRegistrationButtonVisible;
  }
}
