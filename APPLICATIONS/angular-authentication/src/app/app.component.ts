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
  message = '';
  isLogoutButtonVisible = true;
  isRegistrationButtonVisible = true;
  isAdminHomeVisible = false;
  isUserHomeVisible = false;
  isCommonHomeVisible = false;
  router: Router;
  securityUtilService: SecurityUtilService;

  constructor(router: Router, securityUtilService: SecurityUtilService) {
    this.securityUtilService = securityUtilService;
    this.router = router;
    this.isLogoutButtonVisible = true;
    this.isRegistrationButtonVisible = false;
  }

  logout() {
    console.log(`AppComponent.logout()`);
    this.setMessage('');
    const userContext = this.securityUtilService.getFromStorge();
    if (userContext.isAuthenticate) {
      this.securityUtilService.removeStoreage();
      this.router.navigate(['/login'], {
        queryParams: { action: 'logout' },
      });
      this.setLogoutButtonVisible(false);
      this.setRegistrationButtonVisible(true);
      this.setAdminHomeVisible(false);
      this.setUserHomeVisible(false);
      this.setCommonHomeVisible(false);
    } else {
      this.setLogoutButtonVisible(false);
      this.setRegistrationButtonVisible(true);
      this.setAdminHomeVisible(false);
      this.setUserHomeVisible(false);
      this.setCommonHomeVisible(false);
      this.securityUtilService.removeStoreage();
      this.router.navigate(['/login'], {
        queryParams: { action: 'login-expired' },
      });
    }
  }

  registration() {
    console.log(`AppComponent.registration()`);
    this.router.navigate(['/registration'], {
      queryParams: { action: 'registration' },
    });
    this.setLogoutButtonVisible(false);
    this.setRegistrationButtonVisible(false);
    this.setCommonHomeVisible(false);
  }

  public adminHome(): void {
    const userContext = this.securityUtilService.getFromStorge();
    if (userContext.isAuthenticate) {
      this.setRegistrationButtonVisible(false);
      this.setLogoutButtonVisible(true);
      this.setAdminHomeVisible(false);
      this.setUserHomeVisible(true);
      this.setCommonHomeVisible(true);
      this.router.navigate(['/admin'], {
        queryParams: { action: 'admin-home' },
      });
    } else {
      this.logout();
    }
  }

  public userHome(): void {
    const userContext = this.securityUtilService.getFromStorge();
    if (userContext.isAuthenticate) {
      if (userContext.isAdmin) {
        this.setAdminHomeVisible(true);
      }
      this.setRegistrationButtonVisible(false);
      this.setLogoutButtonVisible(true);
      this.setUserHomeVisible(false);
      this.setCommonHomeVisible(true);
      this.router.navigate(['/user'], {
        queryParams: { action: 'user-home' },
      });
    } else {
      this.logout();
    }
  }

  public home(): void {
    const userContext = this.securityUtilService.getFromStorge();
    if (userContext.isAuthenticate) {
      if (userContext.isAdmin) {
        this.setAdminHomeVisible(true);
        this.setUserHomeVisible(true);
      } else {
        this.setAdminHomeVisible(false);
        this.setUserHomeVisible(true);
      }
      this.setCommonHomeVisible(false);
      this.router.navigate(['/'], {
        queryParams: { action: 'common-home' },
      });
    } else {
      this.logout();
    }
  }

  public setLogoutButtonVisible(isLogoutButtonVisible: boolean): void {
    this.isLogoutButtonVisible = isLogoutButtonVisible;
  }
  public setRegistrationButtonVisible(
    isRegistrationButtonVisible: boolean
  ): void {
    this.isRegistrationButtonVisible = isRegistrationButtonVisible;
  }

  public setAdminHomeVisible(isAdminHomeVisible: boolean): void {
    this.isAdminHomeVisible = isAdminHomeVisible;
  }

  public setUserHomeVisible(isUserHomeVisible: boolean): void {
    this.isUserHomeVisible = isUserHomeVisible;
  }

  public setCommonHomeVisible(isCommonHomeVisible: boolean): void {
    this.isCommonHomeVisible = isCommonHomeVisible;
  }

  public setMessage(message: string): void {
    this.message = message;
  }
}
