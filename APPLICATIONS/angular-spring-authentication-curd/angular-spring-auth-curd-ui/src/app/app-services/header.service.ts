import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserContext } from '../security/beans/user-context';

export enum PageType {
  LOGIN_PAGE = 'LOGIN_PAGE',
  REGISTRATION_PAGE = 'REGISTRATION_PAGE',
  COMMON_HOME_PAGE = 'COMMON_HOME_PAGE',
  ADMIN_HOME_PAGE = 'ADMIN_HOME_PAGE',
  USER_HOME_PAGE = 'USER_HOME_PAGE',
  EMPLOYEE_MGMT_PAGE = 'EMPLOYEE_MGMT_PAGE',
  USER_MGMT_PAGE = 'USER_MGMT_PAGE',
}

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  public infoMessage: BehaviorSubject<string> = null;
  public successMessage: BehaviorSubject<string> = null;
  public failureMessage: BehaviorSubject<string> = null;
  public homeVisiable: BehaviorSubject<boolean> = null;
  public adminVisiable: BehaviorSubject<boolean> = null;
  public userVisiable: BehaviorSubject<boolean> = null;
  public logoutVisiable: BehaviorSubject<boolean> = null;
  public registrationVisiable: BehaviorSubject<boolean> = null;
  public userMgmtVisable: BehaviorSubject<boolean> = null;
  public employeMgmtVisable: BehaviorSubject<boolean> = null;
  public contactUsVisiable: BehaviorSubject<boolean> = null;

  constructor() {
    this.infoMessage = new BehaviorSubject<string>('');
    this.successMessage = new BehaviorSubject<string>('');
    this.failureMessage = new BehaviorSubject<string>('');
    this.homeVisiable = new BehaviorSubject<boolean>(false);
    this.adminVisiable = new BehaviorSubject<boolean>(false);
    this.userVisiable = new BehaviorSubject<boolean>(false);
    this.logoutVisiable = new BehaviorSubject<boolean>(false);
    this.registrationVisiable = new BehaviorSubject<boolean>(true);
    this.userMgmtVisable = new BehaviorSubject<boolean>(false);
    this.employeMgmtVisable = new BehaviorSubject<boolean>(false);
    this.contactUsVisiable = new BehaviorSubject<boolean>(true);
    console.log(`HeaderService.constructor()`);
  }

  public setInfoMessage(messageInfo: string): void {
    this.infoMessage.next(messageInfo);
  }
  public setSucsessMessage(messageSucsess: string): void {
    this.successMessage.next(messageSucsess);
  }
  public setFailureMessage(messageFailure: string): void {
    this.failureMessage.next(messageFailure);
  }
  public setHomeVisible(homeVisiable: boolean): void {
    this.homeVisiable.next(homeVisiable);
  }
  public setAdminVisible(adminVisiable: boolean): void {
    this.adminVisiable.next(adminVisiable);
  }
  public setUserVisible(userVisiable: boolean): void {
    this.userVisiable.next(userVisiable);
  }

  public setLogoutVisible(logoutVisiable: boolean): void {
    this.logoutVisiable.next(logoutVisiable);
  }
  public setRegistrationVisible(registrationVisiable: boolean): void {
    this.registrationVisiable.next(registrationVisiable);
  }
  public setUserMgmtVisible(userMgmtVisable: boolean): void {
    this.userMgmtVisable.next(userMgmtVisable);
  }
  public setEmployeeMgmtVisible(employeMgmtVisable: boolean): void {
    this.employeMgmtVisable.next(employeMgmtVisable);
  }

  public setContactUsVisible(contactUsVisiable: boolean): void {
    this.contactUsVisiable.next(contactUsVisiable);
  }

  public calculateHeaderMenu(
    pageName: PageType,
    userContext: UserContext
  ): void {
    console.log('HeaderService.calculateHeaderMenu()', pageName, userContext);
    if (userContext == null) {
      this.setHomeVisible(false);
      this.setAdminVisible(false);
      this.setUserVisible(false);
      this.setLogoutVisible(false);
      this.setRegistrationVisible(true);
      this.setEmployeeMgmtVisible(false);
      this.setUserMgmtVisible(false);
      this.setContactUsVisible(true);
    } else if (!userContext.isAuthenticate) {
      this.setHomeVisible(false);
      this.setAdminVisible(false);
      this.setUserVisible(false);
      this.setLogoutVisible(false);
      this.setEmployeeMgmtVisible(false);
      this.setUserMgmtVisible(false);
      this.setRegistrationVisible(true);
      this.setContactUsVisible(true);
    } else {
      if (userContext.isAdmin) {
        if (pageName == PageType.COMMON_HOME_PAGE) {
          this.setHomeVisible(false);
          this.setAdminVisible(true);
          this.setUserVisible(true);
          this.setEmployeeMgmtVisible(false);
          this.setUserMgmtVisible(false);
          this.setLogoutVisible(true);
          this.setRegistrationVisible(false);
          this.setContactUsVisible(true);
        } else if (pageName == PageType.ADMIN_HOME_PAGE) {
          this.setHomeVisible(true);
          this.setAdminVisible(false);
          this.setUserVisible(true);
          this.setLogoutVisible(true);
          this.setEmployeeMgmtVisible(true);
          this.setUserMgmtVisible(true);
          this.setRegistrationVisible(false);
          this.setContactUsVisible(true);
        } else if (pageName == PageType.EMPLOYEE_MGMT_PAGE) {
          this.setHomeVisible(true);
          this.setAdminVisible(true);
          this.setUserVisible(true);
          this.setEmployeeMgmtVisible(false);
          this.setUserMgmtVisible(true);
          this.setLogoutVisible(true);
          this.setRegistrationVisible(false);
          this.setContactUsVisible(true);
        } else if (pageName == PageType.USER_MGMT_PAGE) {
          this.setHomeVisible(true);
          this.setAdminVisible(true);
          this.setUserVisible(false);
          this.setEmployeeMgmtVisible(true);
          this.setUserMgmtVisible(false);
          this.setLogoutVisible(true);
          this.setRegistrationVisible(false);
          this.setContactUsVisible(true);
        } else if (pageName == PageType.USER_HOME_PAGE) {
          this.setHomeVisible(true);
          this.setAdminVisible(true);
          this.setUserVisible(false);
          this.setEmployeeMgmtVisible(false);
          this.setUserMgmtVisible(false);
          this.setRegistrationVisible(false);
          this.setLogoutVisible(true);
          this.setContactUsVisible(true);
        }
      } else if (userContext.isUser) {
        if (pageName == PageType.COMMON_HOME_PAGE) {
          this.setHomeVisible(false);
          this.setAdminVisible(false);
          this.setUserVisible(true);
          this.setEmployeeMgmtVisible(false);
          this.setUserMgmtVisible(false);
          this.setRegistrationVisible(false);
          this.setContactUsVisible(true);
          this.setLogoutVisible(true);
        } else if (pageName == PageType.USER_HOME_PAGE) {
          this.setHomeVisible(true);
          this.setAdminVisible(false);
          this.setUserVisible(false);
          this.setEmployeeMgmtVisible(false);
          this.setUserMgmtVisible(false);
          this.setRegistrationVisible(false);
          this.setLogoutVisible(true);
          this.setContactUsVisible(true);
        }
      } else if (userContext.isGuest) {
        if (pageName == PageType.COMMON_HOME_PAGE) {
          this.setHomeVisible(false);
          this.setAdminVisible(false);
          this.setUserVisible(false);
          this.setEmployeeMgmtVisible(false);
          this.setUserMgmtVisible(false);
          this.setRegistrationVisible(false);
          this.setLogoutVisible(true);
          this.setContactUsVisible(true);
        }
      }
    }
  }
}
