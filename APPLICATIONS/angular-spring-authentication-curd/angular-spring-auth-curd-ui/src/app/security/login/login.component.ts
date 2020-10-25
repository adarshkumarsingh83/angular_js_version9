import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../app-services/authentication.service';
import { Router } from '@angular/router';
import { SecurityUtilService } from '../security-util.service';
import { Authentication } from '../../app-services/beans/authentication';
import { HeaderService, PageType } from '../../app-services/header.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  authentication: Authentication;

  constructor(
    private router: Router,
    private headerService: HeaderService,
    private securityUtilService: SecurityUtilService,
    private authenticationService: AuthenticationService
  ) {
    console.log(`LoginComponent.constructor()`);
  }

  public login(myForm: NgForm): void {
    console.log(`LoginComponent.login()`);
    const requestedUrl = this.router.url;
    console.log(`reqeusted url ${requestedUrl}`);
    const user = this.authenticationService.loginUser(
      myForm.value.nameInput,
      myForm.value.pwdInput
    );

    this.authenticationService
      .loginUser(myForm.value.nameInput, myForm.value.pwdInput)
      .subscribe(
        (response) => {
          this.authentication = response.data;
          this.headerService.setInfoMessage(response.message);
          console.log(`LoginComponent.login()`, response);
          this.doAction(this.authentication);
        },
        (errorResponse) => {
          console.log(`LoginComponent.login() Errors `, errorResponse);
          this.headerService.setFailureMessage(errorResponse.error.message);
        }
      );
  }

  private doAction(authentication: Authentication): void {
    if (this.authentication != null) {
      console.log('LoginComponent.doAction() ', this.authentication.userBean);
      this.headerService.setSucsessMessage('login sucessful');
      const userContext = this.securityUtilService.storeOnLocalStorage({
        userName: this.authentication.userBean.userName,
        email: this.authentication.userBean.email,
        isAdmin: this.authentication.userBean.userRoles[0] == 'ADMIN',
        isUser: this.authentication.userBean.userRoles[0] == 'USER',
        isGuest: this.authentication.userBean.userRoles[0] == 'GUEST',
        isAuthenticate: this.authentication.token ? true : false,
        userToken: this.authentication.token,
        key: this.authentication.key,
      });

      this.headerService.calculateHeaderMenu(
        PageType.COMMON_HOME_PAGE,
        userContext
      );

      if (userContext.isAdmin) {
        this.headerService.setInfoMessage(
          `welcome to espark ${this.authentication.userBean.userName} loggin as Admin`
        );
        this.router.navigate(['/'], {
          queryParams: { name: this.authentication.userBean.userName },
        });
      } else if (userContext.isUser) {
        this.headerService.setInfoMessage(
          `welcome to espark ${this.authentication.userBean.userName} loggin as User`
        );
        this.router.navigate(['/'], {
          queryParams: { name: this.authentication.userBean.userName },
        });
      } else if (userContext.isGuest) {
        this.headerService.setInfoMessage(
          `welcome to espark ${this.authentication.userBean.userName} loggin as Guest`
        );
        this.router.navigate(['/'], {
          queryParams: { name: this.authentication.userBean.userName },
        });
      }
    } else {
      this.headerService.calculateHeaderMenu(PageType.LOGIN_PAGE, null);
      this.headerService.setFailureMessage('login failure');
      console.log('authentication false for login ', this.authentication);
      this.headerService.setFailureMessage('invalid credentials');
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
    this.headerService.calculateHeaderMenu(PageType.COMMON_HOME_PAGE, null);
  }
}
