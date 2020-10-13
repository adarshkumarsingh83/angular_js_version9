import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../../app-services/data.service';
import { Router } from '@angular/router';
import { SecurityUtilService } from '../security-util.service';
import { AppComponent } from '../../app.component';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  dataService: DataService;
  router: Router;
  securityUtilService: SecurityUtilService;
  appComponent: AppComponent;

  constructor(
    dataService: DataService,
    router: Router,
    securityUtilService: SecurityUtilService,
    appComponent: AppComponent
  ) {
    this.dataService = dataService;
    this.router = router;
    this.securityUtilService = securityUtilService;
    this.appComponent = appComponent;
    appComponent.setLogoutButtonVisible(false);
    appComponent.setRegistrationButtonVisible(true);
  }

  message;
  login(myForm: NgForm) {
    const requestedUrl = this.router.url;
    console.log(`reqeusted url ${requestedUrl}`);
    const user = this.dataService.getFromStorge(
      myForm.value.nameInput,
      myForm.value.pwdInput
    );
    if (user != null) {
      console.log(user);
      this.securityUtilService.storeOnLocalStorage({
        userName: user.userName,
        email: user.email,
        isAdmin: user.isAdmin,
        isAuthenticate: true,
      });

      if (user.isAdmin == true) {
        console.log(user.isAdmin);
        this.appComponent.setLogoutButtonVisible(true);
        this.appComponent.setRegistrationButtonVisible(false);
        this.appComponent.setAdminHomeVisible(true);
        this.appComponent.setUserHomeVisible(true);
        this.appComponent.setMessage(`welcome to espark ${user.userName}`);
        this.router.navigate(['/'], {
          queryParams: { name: user.userName },
        });
      } else if (user.isAdmin == false) {
        console.log(user.isAdmin);
        this.appComponent.setLogoutButtonVisible(true);
        this.appComponent.setRegistrationButtonVisible(false);
        this.appComponent.setAdminHomeVisible(false);
        this.appComponent.setUserHomeVisible(true);
        this.appComponent.setMessage(`welcome to espark ${user.userName}`);
        this.router.navigate(['/'], {
          queryParams: { name: user.userName },
        });
      }
    } else {
      this.appComponent.setAdminHomeVisible(false);
      this.appComponent.setUserHomeVisible(false);
      this.appComponent.setLogoutButtonVisible(false);
      this.appComponent.setRegistrationButtonVisible(true);
      this.message = { message: 'invalid credentials' };
      this.router.navigate(['/login']);
    }
  }
  ngOnInit(): void {}
}
