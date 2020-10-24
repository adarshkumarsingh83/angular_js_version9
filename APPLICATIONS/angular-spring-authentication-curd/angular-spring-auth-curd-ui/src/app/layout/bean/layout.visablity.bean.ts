import { UserContext } from '../../security/beans/user-context';

export class LayoutVisablityBean {
  homeVisiable: boolean;
  adminVisiable: boolean;
  userVisiable: boolean;
  logoutVisiable: boolean;
  registrationVisiable: boolean;
  userMgmtVisable: boolean;
  employeMgmtVisable: boolean;

  constructor(pageName: string, userContext: UserContext) {
    if (!userContext.isAuthenticate) {
      this.setHomeVisiable(false);
      this.setAdminVisiable(false);
      this.setUserVisiable(false);
      this.setLogoutVisiable(false);
      this.setRegistrationVisiable(true);
      this.setEmployeMgmtVisable(false);
      this.setUserMgmtVisable(false);
    } else {
      if (userContext.isAdmin) {
        if (pageName == 'common') {
          this.setHomeVisiable(false);
          this.setAdminVisiable(true);
          this.setUserVisiable(true);
          this.setLogoutVisiable(true);
          this.setRegistrationVisiable(false);
        } else if (pageName == 'emp-mgmt') {
          this.setHomeVisiable(true);
          this.setAdminVisiable(true);
          this.setUserVisiable(true);
          this.setEmployeMgmtVisable(true);
          this.setUserMgmtVisable(true);
          this.setLogoutVisiable(true);
          this.setRegistrationVisiable(false);
        } else if (pageName == 'user-mgmt') {
          this.setHomeVisiable(true);
          this.setAdminVisiable(true);
          this.setUserVisiable(false);
          this.setEmployeMgmtVisable(true);
          this.setUserMgmtVisable(true);
          this.setLogoutVisiable(true);
          this.setRegistrationVisiable(false);
        }
      } else if (userContext.isUser) {
        if (pageName == 'common') {
          this.setHomeVisiable(false);
          this.setAdminVisiable(false);
          this.setUserVisiable(true);
          this.setEmployeMgmtVisable(false);
          this.setUserMgmtVisable(false);
          this.setRegistrationVisiable(false);
          this.setLogoutVisiable(true);
        } else if (pageName == 'users-home') {
          this.setHomeVisiable(true);
          this.setAdminVisiable(false);
          this.setUserVisiable(false);
          this.setEmployeMgmtVisable(false);
          this.setUserMgmtVisable(false);
          this.setRegistrationVisiable(false);
          this.setLogoutVisiable(true);
        }
      } else if (userContext.isGuest) {
        if (pageName == 'common') {
          this.setHomeVisiable(false);
          this.setAdminVisiable(false);
          this.setUserVisiable(false);
          this.setEmployeMgmtVisable(false);
          this.setUserMgmtVisable(false);
          this.setRegistrationVisiable(false);
          this.setLogoutVisiable(true);
        }
      }
    }
  }

  public setHomeVisiable(homeVisiable: boolean): void {
    this.homeVisiable = homeVisiable;
  }

  public setAdminVisiable(adminVisiable: boolean): void {
    this.adminVisiable = adminVisiable;
  }

  public setUserVisiable(userVisiable: boolean): void {
    this.userVisiable = userVisiable;
  }

  public setRegistrationVisiable(registrationVisiable: boolean): void {
    this.registrationVisiable = registrationVisiable;
  }

  public setLogoutVisiable(logoutVisiable: boolean): void {
    this.logoutVisiable = logoutVisiable;
  }
  public setUserMgmtVisable(userMgmtVisable: boolean): void {
    this.userMgmtVisable = userMgmtVisable;
  }
  public setEmployeMgmtVisable(employeMgmtVisable: boolean): void {
    this.employeMgmtVisable = employeMgmtVisable;
  }
}
