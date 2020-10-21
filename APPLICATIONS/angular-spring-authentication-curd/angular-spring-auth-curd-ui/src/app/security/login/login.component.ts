import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../app-services/authentication.service';
import { Router } from '@angular/router';
import { SecurityUtilService } from '../security-util.service';
import { AppComponent } from '../../app.component';
import { Authentication } from '../../app-services/beans/authentication';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  authentication: Authentication;

  constructor(
    private router: Router,
    private appComponent: AppComponent,
    private securityUtilService: SecurityUtilService,
    private authenticationService: AuthenticationService
  ) {
    console.log(`LoginComponent.constructor()`);
    appComponent.setLogoutButtonVisible(false);
    appComponent.setRegistrationButtonVisible(true);
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
          this.appComponent.setMessageSucess(response.message);
          console.log(`LoginComponent.login()`, response);
          this.doAction(this.authentication);
        },
        (errorResponse) => {
          console.log(`LoginComponent.login() Errors `, errorResponse);
          this.appComponent.setMessageFailure(errorResponse.error.message);
        }
      );
  }

  private doAction(authentication: Authentication): void {
    if (this.authentication != null) {
      console.log('LoginComponent.doAction() ', this.authentication.userBean);
      this.appComponent.setMessageSucess('login sucessful');
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

      if (userContext.isAdmin) {
        this.appComponent.setLogoutButtonVisible(true);
        this.appComponent.setRegistrationButtonVisible(false);
        this.appComponent.setAdminHomeVisible(true);
        this.appComponent.setUserHomeVisible(true);
        this.appComponent.setMessage(
          `welcome to espark ${this.authentication.userBean.userName} loggin as Admin`
        );
        this.router.navigate(['/'], {
          queryParams: { name: this.authentication.userBean.userName },
        });
      } else if (userContext.isUser) {
        this.appComponent.setLogoutButtonVisible(true);
        this.appComponent.setRegistrationButtonVisible(false);
        this.appComponent.setAdminHomeVisible(false);
        this.appComponent.setUserHomeVisible(true);
        this.appComponent.setMessage(
          `welcome to espark ${this.authentication.userBean.userName} loggin as User`
        );
        this.router.navigate(['/'], {
          queryParams: { name: this.authentication.userBean.userName },
        });
      } else if (userContext.isGuest) {
        this.appComponent.setLogoutButtonVisible(true);
        this.appComponent.setRegistrationButtonVisible(false);
        this.appComponent.setAdminHomeVisible(false);
        this.appComponent.setUserHomeVisible(false);
        this.appComponent.setMessage(
          `welcome to espark ${this.authentication.userBean.userName} loggin as Guest`
        );
        this.router.navigate(['/'], {
          queryParams: { name: this.authentication.userBean.userName },
        });
      }
    } else {
      this.appComponent.setMessageSucess('login failure');
      console.log('authentication false for login ', this.authentication);
      this.appComponent.setAdminHomeVisible(false);
      this.appComponent.setUserHomeVisible(false);
      this.appComponent.setLogoutButtonVisible(false);
      this.appComponent.setRegistrationButtonVisible(true);
      this.appComponent.setMessageFailure('invalid credentials');
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {}
}
