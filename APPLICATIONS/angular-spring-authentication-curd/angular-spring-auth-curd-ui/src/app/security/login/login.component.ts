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
  message: any;
  authentication: Authentication;

  constructor(
    private router: Router,
    private appComponent: AppComponent,
    private securityUtilService: SecurityUtilService,
    private authenticationService: AuthenticationService
  ) {
    appComponent.setLogoutButtonVisible(false);
    appComponent.setRegistrationButtonVisible(true);
  }

  login(myForm: NgForm) {
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
          this.message = response.message;
          console.log(`LoginComponent.login()`, this.authentication);
          this.doAction(this.authentication);
        },
        (errorResponse) => {
          console.log(`LoginComponent.login() Errors `, errorResponse);
          this.message = errorResponse.error.message;
        }
      );
  }

  ngOnInit(): void {}

  private doAction(authentication: Authentication): void {
    if (this.authentication != null) {
      console.log(
        'authentication true for login ',
        this.authentication.userBean
      );
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
        console.log(this.authentication.userBean.isAdmin);
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
        console.log(this.authentication.userBean.isAdmin);
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
        console.log(this.authentication.userBean.isAdmin);
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
      this.message = { message: 'invalid credentials' };
      this.router.navigate(['/login']);
    }
  }
}
