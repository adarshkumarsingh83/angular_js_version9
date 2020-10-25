import { Component, OnInit } from '@angular/core';
import { HeaderService, PageType } from '../../app-services/header.service';
import { Router } from '@angular/router';
import { SecurityUtilService } from '../../security/security-util.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  successMessage: string;
  failureMessage: string;
  infoMessage: string;
  homeVisiable: boolean;
  adminVisiable: boolean;
  userVisiable: boolean;
  contactUsVisiable: boolean;
  logoutVisiable: boolean;
  registrationVisiable: boolean;
  userMgmtVisable: boolean;
  employeMgmtVisable: boolean;

  constructor(
    private router: Router,
    private headerService: HeaderService,
    private securityUtilService: SecurityUtilService,
    private flashMessagesService: FlashMessagesService
  ) {
    console.log(`HeaderComponent.constructor()`);

    this.headerService.infoMessage.subscribe((value) => {
      this.setInfoMessage(value);
    });

    this.headerService.successMessage.subscribe((value) => {
      this.setSucessMessage(value);
    });
    this.headerService.failureMessage.subscribe((value) => {
      this.setMessageFailure(value);
    });

    this.headerService.homeVisiable.subscribe((value) => {
      this.homeVisiable = value;
    });
    this.headerService.adminVisiable.subscribe((value) => {
      this.adminVisiable = value;
    });
    this.headerService.userVisiable.subscribe((value) => {
      this.userVisiable = value;
    });

    this.headerService.logoutVisiable.subscribe((value) => {
      this.logoutVisiable = value;
    });
    this.headerService.registrationVisiable.subscribe((value) => {
      this.registrationVisiable = value;
    });
    this.headerService.userMgmtVisable.subscribe((value) => {
      this.userMgmtVisable = value;
    });
    this.headerService.employeMgmtVisable.subscribe((value) => {
      this.employeMgmtVisable = value;
    });

    this.headerService.contactUsVisiable.subscribe((value) => {
      this.contactUsVisiable = value;
    });
  }

  public login(): void {
    console.log(`AppComponent.login()`);
    let userContext = this.securityUtilService.getFromStorge();
    this.headerService.calculateHeaderMenu(PageType.LOGIN_PAGE, userContext);
    if (userContext == null) {
      this.router.navigate(['/login'], {
        queryParams: { action: 'login-page' },
      });
    } else if (userContext.isAuthenticate) {
      this.router.navigate(['/'], {
        queryParams: { action: 'common-page' },
      });
    } else {
      this.logout();
    }
  }
  public logout(): void {
    console.log(`AppComponent.logout()`);
    let userContext = this.securityUtilService.getFromStorge();
    if (userContext.isAuthenticate) {
      this.securityUtilService.removeStoreage();
      this.router.navigate(['login'], {
        queryParams: { action: 'logout' },
      });
      this.setSucessMessage('logout sucessful');
    } else {
      this.securityUtilService.removeStoreage();
      this.router.navigate(['login'], {
        queryParams: { action: 'login-expired' },
      });
      this.setMessageFailure('logout failure');
    }
    userContext = this.securityUtilService.getFromStorge();
    this.headerService.calculateHeaderMenu(PageType.LOGIN_PAGE, userContext);
  }

  public registration(): void {
    console.log(`AppComponent.registration()`);
    let userContext = this.securityUtilService.getFromStorge();
    this.headerService.calculateHeaderMenu(
      PageType.REGISTRATION_PAGE,
      userContext
    );
    this.router.navigate(['registration'], {
      queryParams: { action: 'registration' },
    });
  }

  public home(): void {
    console.log(`AppComponent.home()`);
    const userContext = this.securityUtilService.getFromStorge();
    this.headerService.calculateHeaderMenu(
      PageType.COMMON_HOME_PAGE,
      userContext
    );
    if (userContext.isAuthenticate) {
      this.router.navigate(['/'], {
        queryParams: { action: 'common-home' },
      });
    } else {
      this.logout();
    }
  }

  public adminHome(): void {
    console.log(`AppComponent.adminHome()`);
    const userContext = this.securityUtilService.getFromStorge();
    this.headerService.calculateHeaderMenu(
      PageType.ADMIN_HOME_PAGE,
      userContext
    );
    if (userContext.isAuthenticate) {
      this.router.navigate(['admin'], {
        queryParams: { action: 'admin-home' },
      });
    } else {
      this.logout();
    }
  }

  public userHome(): void {
    console.log(`AppComponent.userHome()`);
    const userContext = this.securityUtilService.getFromStorge();
    this.headerService.calculateHeaderMenu(
      PageType.USER_HOME_PAGE,
      userContext
    );
    if (userContext.isAuthenticate) {
      this.router.navigate(['user'], {
        queryParams: { action: 'user-home' },
      });
    } else {
      this.logout();
    }
  }

  public employees(): void {
    console.log(`AdminHomeComponent.employees()`);
    this.router.navigate(['/admin/employees-mgmt/employees'], {
      queryParams: { action: 'employees-mgmt' },
    });
  }

  public users(): void {
    console.log(`AdminHomeComponent.users()`);
    this.router.navigate(['/admin/users-mgmt/users'], {
      queryParams: { action: 'users-mgmt' },
    });
  }

  public setSucessMessage(successMessage: string): void {
    if (successMessage != '') {
      this.flashMessagesService.show(successMessage, {
        cssClass: 'alert-success',
        timeout: 2000,
      });
    }
  }

  public setMessageFailure(failureMessage: string): void {
    if (failureMessage != '') {
      this.flashMessagesService.show(failureMessage, {
        cssClass: 'alert-danger',
        timeout: 2000,
      });
    }
  }

  public setInfoMessage(infoMessage: string): void {
    if (infoMessage != '') {
      this.flashMessagesService.show(infoMessage, {
        cssClass: 'alert-info',
        timeout: 2000,
      });
    }
  }

  ngOnInit(): void {}
}
