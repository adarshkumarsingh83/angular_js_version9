import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../app-services/authentication.service';
import { Router } from '@angular/router';
import { SecurityUtilService } from '../security-util.service';
import { AppComponent } from '../../app.component';
import { Authentication } from '../../app-services/authentication';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  message: any;
  authentication: Authentication;
  router: Router;
  authenticationService: AuthenticationService;
  securityUtilService: SecurityUtilService;
  appComponent: AppComponent;

  constructor(
    authenticationService: AuthenticationService,
    router: Router,
    securityUtilService: SecurityUtilService,
    appComponent: AppComponent
  ) {
    this.authenticationService = authenticationService;
    this.router = router;
    this.securityUtilService = securityUtilService;
    this.appComponent = appComponent;
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
        (error) => {
          console.log(`LoginComponent.login() Errors `, error);
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
      this.securityUtilService.storeOnLocalStorage({
        userName: this.authentication.userBean.userName,
        email: this.authentication.userBean.email,
        isAdmin: this.authentication.userBean.isAdmin,
        isAuthenticate: this.authentication.token ? true : false,
        userToken: this.authentication.token,
        key: this.authentication.key,
      });

      if (this.authentication.userBean.isAdmin == true) {
        console.log(this.authentication.userBean.isAdmin);
        this.appComponent.setLogoutButtonVisible(true);
        this.appComponent.setRegistrationButtonVisible(false);
        this.appComponent.setAdminHomeVisible(true);
        this.appComponent.setUserHomeVisible(true);
        this.appComponent.setMessage(
          `welcome to espark ${this.authentication.userBean.userName}`
        );
        this.router.navigate(['/'], {
          queryParams: { name: this.authentication.userBean.userName },
        });
      } else if (this.authentication.userBean.isAdmin == false) {
        console.log(this.authentication.userBean.isAdmin);
        this.appComponent.setLogoutButtonVisible(true);
        this.appComponent.setRegistrationButtonVisible(false);
        this.appComponent.setAdminHomeVisible(false);
        this.appComponent.setUserHomeVisible(true);
        this.appComponent.setMessage(
          `welcome to espark ${this.authentication.userBean.userName}`
        );
        this.router.navigate(['/'], {
          queryParams: { name: this.authentication.userBean.userName },
        });
      }
    } else {
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
